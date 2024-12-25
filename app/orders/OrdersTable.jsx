import Link from "next/link";

const OrdersTable = ({ orders }) => {
    if (!orders || orders.length === 0) {
      return <p className="text-center py-4">No orders found.</p>;
    }
  
    return (
      <div className="overflow-x-auto custom-scrollbar border shadow border-gray-200"> {/* For horizontal scrolling on smaller screens */}
        <table className="min-w-full divide-y divide-gray-200 table-auto table">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Order ID
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Order Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Total Amount
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Payment Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Shipping Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Order Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                View Order
              </th>
              {/* Add more columns as needed */}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <Link href={`/orders/view-order-details?orderId=${order.orderId}`}>
                    {order.orderId}
                  </Link>  
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {new Date(order.createdAt).toLocaleDateString()} {/* Format date */}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  €{order.finalAmount.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {order.paymentStatus}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {order.shippingStatus}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {order.orderStatus}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <Link className="btn btn-primary rounded-none btn-sm" href={`/orders/view-order-details?orderId=${order.orderId}`}>
                    View Order
                  </Link>  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default OrdersTable;