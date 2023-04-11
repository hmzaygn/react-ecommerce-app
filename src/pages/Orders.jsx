import React, { useEffect, useState } from "react";
import OrderCards from "../components/OrderCards";
import useProductCalls from "../hooks/useProductCalls";

const Orders = () => {
  const { getAllOrderItems } = useProductCalls();
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    getAllOrderItems(setOrderItems);
  }, []);

  console.log(orderItems);

  return (
    <div>
      {orderItems?.map((item) => (
        <OrderCards key={item.id} item={item} />
      ))}
      <OrderCards />
    </div>
  );
};

export default Orders;
