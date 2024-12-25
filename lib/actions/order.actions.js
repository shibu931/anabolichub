// Example in a Server Component
export async function getOrders(userId) {
    try {
      const res = await fetch(`${process.env.DOMAIN_URL}/api/orders?userId=${userId}`);
      if (!res.ok) {
        const errorData = await res.json()
        throw new Error(`API returned an error: ${res.status} - ${JSON.stringify(errorData)}`);
      }
      const data = await res.json();
      return data.orders; // Returns array of order objects
    } catch (error) {
      console.error("Error fetching orders:", error);
      return []; // Return empty array in case of error
    }
}

export async function getSingleOrder(orderId){
  try {
    const res = await fetch(`${process.env.DOMAIN_URL}/api/orders/get-single-order?orderId=${orderId}`)
    if(!res.ok){
      const errorData = await res.json()
      throw new Error(`API returned an error: ${res.status} = ${JSON.stringify(errorData)}`)
    
    }
    const data = await res.json();  
    return data.order;
  } catch (error) {
    console.log("Error fetching orders: ", error);
    return null;
  }
}

