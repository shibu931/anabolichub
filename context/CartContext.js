'use client'
import { createContext, useContext, useState, useEffect, useActionState } from "react";
import axios from "axios";
import { useAuth } from '@clerk/nextjs'

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { isLoaded, userId } = useAuth()
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [productTotal,setProductTotal] = useState(0);
  // Fetch cart from the server
  const fetchAndSyncCart = async (userId) => {
    try {
      const response = await axios.get(`/api/cart?userId=${userId}`);
      const serverCart = response.data && response.data.cart;
      const localCart = JSON.parse(localStorage.getItem("cart")) || null;
      let finalCart = null;

      if (!serverCart && localCart) {
        // No server cart but local cart exists
        finalCart = localCart;

        if(userId) await saveCartToServer(userId, localCart); // Save local cart to server
      } else if (serverCart && !localCart) {
        finalCart = serverCart
        localStorage.setItem("cart", JSON.stringify(finalCart))
      } else if (serverCart && localCart) {
        // Both server and local carts exist
        finalCart = mergeCarts(serverCart, localCart);

        if(userId) await saveCartToServer(userId, finalCart); // Update server cart with merged data
        localStorage.setItem("cart", JSON.stringify(finalCart)); // Update local storage
      } else {
        // No cart on server or locally
        finalCart = null;
      }

      setCart(finalCart);
    } catch (error) {
      console.error("Error fetching syncing cart:", error);
    } finally {
      setLoading(false);
    }
  };

  const mergeCarts = (serverCart, localCart) => {
    const mergedItems = [];
    const serverItemsMap = new Map(serverCart.item.map(item => [item.product, item]));

    for (const localItem of localCart.item) {
      const serverItem = serverItemsMap.get(localItem.product);

      if (serverItem) {
        // Item exists in both carts, compare modifiedAt
        const serverModified = serverItem.modifiedAt || serverCart.modifiedAt;
        const localModified = localItem.modifiedAt || localCart.modifiedAt;

        if (localModified && serverModified) {
          if (new Date(localModified) >= new Date(serverModified)) { // Use >= to prioritize local on tie
            mergedItems.push({ ...localItem });
          } else {
            mergedItems.push({ ...serverItem });
          }
        } else {
          //If one cart does not have modified at use the local cart data
          mergedItems.push({ ...localItem });
        }
      } else {
        // Item only exists in local cart
        mergedItems.push({ ...localItem });
      }
    }

    // Add any items that are ONLY on the server but not on local
    for (const serverItem of serverCart.item) {
      if (!localCart.item.some(localItem => localItem.product === serverItem.product)) {
        mergedItems.push({ ...serverItem })
      }
    }

    return { ...serverCart, item: mergedItems, modifiedAt: new Date() };
  };


  // Save cart to the server
  const saveCartToServer = async (userId, cart) => {
    try {
      await axios.post("/api/cart", { userId, cart });
    } catch (error) {
      console.error("Error saving cart to server:", error);
    }
  };

  // Add item to cart
  const addToCart = (item) => {
    const currentTime = new Date().toISOString();

    if (!cart) {
      const newCart = {
        item: [{ ...item, quantity: item.quantity || 1 }],
        modifiedTime: currentTime,
      };
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
      if (userId) saveCartToServer(userId, newCart);
      return;
    }

    const existingProductIndex = cart.item.findIndex(
      (cartItem) => cartItem.product === item.product
    );

    let updatedCart;
    if (existingProductIndex > -1) {
      // Update the existing product quantity
      updatedCart = {
        ...cart,
        item: cart.item.map((cartItem, index) =>
          index === existingProductIndex
            ? {
              ...cartItem,
              quantity: cartItem.quantity + (item.quantity || 1),
            }
            : cartItem
        ),
        modifiedTime: currentTime,
      };
    } else {
      // Add a new product to the cart
      updatedCart = {
        ...cart,
        item: [...cart.item, { ...item, quantity: item.quantity || 1 }],
        modifiedTime: currentTime,
      };
    }

    // Update the localStorage and state
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);

    // Sync with the server if a user is logged in
    if (userId) saveCartToServer(userId, updatedCart);
  };
  // Remove item from cart
  const removeFromCart = (productId) => {
    const updatedCart = {
      ...cart,
      item: cart.item.filter((item) => item.product !== productId),
    };
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    if (updatedCart.item.length == 0) setCart(null)
    else setCart(updatedCart);
    if (userId) saveCartToServer(userId, updatedCart);
  };

  // Update item quantity
  const updateCartItemQuantity = (productId, quantity) => {
    const updatedCart = {
      ...cart,
      item: cart.item.map((item) =>
        item.product === productId ? { ...item, quantity } : item
      ),
    };
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
    if (userId) saveCartToServer(userId, updatedCart);
  };

  // Clear cart
  const clearCart = () => {
    setCart(null);
    localStorage.removeItem("cart");
  };

  const calculateCartTotal = (cart) => {
    if (!cart || !cart.item || cart.item.length === 0) return setProductTotal(0);

    const total = cart.item.reduce((total, item) => {
      const convertPriceToNumber = (priceString) => {
        const cleanedString = priceString.replace(/[^\d,.-]/g, '');
        const normalizedString = cleanedString.replace(',', '.');
        const priceNumber = parseFloat(normalizedString);
        return priceNumber;
      };

      const price = convertPriceToNumber(item.price);
      return total + price * item.quantity;;
    }, 0);
    
    setProductTotal(total)
  };

  useEffect(()=>{
    calculateCartTotal(cart)
  },[cart])

  // Effect to sync cart on initial load
  useEffect(() => {    
    if (isLoaded) {
      fetchAndSyncCart(userId);
    }
  }, [userId, isLoaded]);

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        clearCart,
        productTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = () => useContext(CartContext);
