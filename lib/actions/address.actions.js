export async function fetchUserAddress(userId) {
    try {
      const res = await fetch(`${process.env.DOMAIN_URL}/api/address?userId=${userId}`);
      if (!res.ok) {
        const errorData = await res.json()
        throw new Error(`API returned an error: ${res.status} - ${JSON.stringify(errorData)}`);
      }
      const data = await res.json();
      return data.address; // Returns the address object or null
    } catch (error) {
      console.error("Error fetching address:", error);
      return null; // Return null in case of error
    }
  }
