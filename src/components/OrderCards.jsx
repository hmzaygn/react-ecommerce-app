import React from "react";
import defaultProduct from "../assets/defaultProduct.png";

const OrderCards = ({ item }) => {
  return (
    <div>
      <div>
        <img src={item?.item.image || defaultProduct} alt="product" />
      </div>
      <div></div>
    </div>
  );
};

export default OrderCards;
