import connectToDB from "@/utils/dbConnect";
import Address from "@/models/address";
import Cart from "@/models/cart";
import Order from "@/models/order";
import { generateOrderId } from "@/lib/utils";

export async function createCheckout(userId, addressData) {
  connectToDB()
  try {
    if (!userId || !addressData) {
      throw new Error('User ID and address data are required');
    }
    let address;
    const existingAddress = await Address.findOne({ userId: userId });

    if (existingAddress) {
      Object.assign(existingAddress, addressData);
      await existingAddress.save();
      address = existingAddress;
    } else {
      addressData.userId = userId;
      const newAddress = new Address(addressData);
      await newAddress.save();
      address = newAddress;
    }

    const cart = await Cart.findOne({ userId: userId }).populate('item.product');

    if (!cart || cart.item.length === 0) {
      throw new Error('Cart is empty');
    }

    let totalAmount = 0;
    const products = cart.item.map(item => {
      const priceString = item.price;
      const price = parseFloat(priceString.replace('€', '').trim());

      if (isNaN(price)) {
        console.error(`Invalid price format for product ${item.product}: ${item.name}`);
        throw new Error(`Invalid price format for product ${item.name}`);
      }

      totalAmount += price * item.quantity;
      return {
        productId: item.product, // Store as ObjectId
        productName: item.name,
        quantity: item.quantity,
        price: item.price,
        slug: item.slug,
      };
    });

    const deliverCharge = 17;
    const finalAmount = totalAmount + deliverCharge;

    const newOrder = new Order({
      orderId: generateOrderId(),
      userId: userId,
      products: products,
      totalAmount,
      deliverCharge,
      finalAmount,
      shippingAddress: {
        name: address.name,
        email: address.email,
        phone: address.phone,
        address: address.address,
        city: address.city,
        country: address.country,
        zipCode: address.zipCode,
      },
    });

    await newOrder.save();
    await Cart.findOneAndDelete({ userId: userId });
    return { message: 'Order created successfully', order: newOrder }
  } catch (error) {
    console.error('Error creating order:', error);
    return { error: error.message };
  }
}