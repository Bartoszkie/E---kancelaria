import React from "react";
import { connect } from "react-redux";

const OrderItem = props => {
  console.log("to są propsy z orderITem", props);
  return (
    <div className="order-item">
      <img className="order-item__picture" src={props.img} alt="pic"></img>
      <div className="order-item-col1">
        <p className="order-item-col1--name">{props.name}</p>
        <p className="order-item-col1--description">{props.description}</p>
      </div>
      <div className="order-item-col2">
        <p className="order-item-col2--name">PODANE DANE</p>
        <div className="order-item-col2--data">
          {props.required.map(item => (
            <p className="order-item-col2--data--detail">{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    selectedInput: state.formInput
  };
};

export default connect(mapStateToProps)(OrderItem);
