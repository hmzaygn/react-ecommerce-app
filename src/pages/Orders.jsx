import React, { useEffect, useState } from "react";
import OrderCards from "../components/OrderCards";
import useProductCalls from "../hooks/useProductCalls";

const Orders = () => {
  const { getAllOrderItems } = useProductCalls();
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    getAllOrderItems(setOrderItems);
  }, []);

  return (
    <div className="pt-20 text-center p-8">
      <p className="font-bold text-2xl mb-4 text-gray-700">My Orders</p>
      {orderItems.length > 0 &&
        orderItems?.map((item) => (
          <OrderCards key={item.id} item={item} setOrderItems={setOrderItems} />
        ))}
    </div>
  );
};

export default Orders;
