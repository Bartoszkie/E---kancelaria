import React from "react";

const OrderItem = props => {
  return (
    <div className="order-item">
      <p></p>
      <span className="order-item--span">NAZWA</span>
      <span className="order-item--span">OPIS</span>
      <img src={props.img} alt="pic"></img>
      <p>{props.name}</p>
      <p>{props.description}</p>
    </div>
  );
};

export default OrderItem;
