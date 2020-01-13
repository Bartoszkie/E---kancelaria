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
        <did className="order-item-col2--data">
          <div className="order-item-col2--data--col1">
            {props.required.map(item => (
              <p key={item.id} className="order-item-col2--data--detail">
                {item}:{" "}
              </p>
            ))}
          </div>
          <div className="order-item-col2--data--col2">
            {props.values ? (
              <>
                <p key={props.values.id} className="order-item-col2--data--detail">
                  {props.values.name !== "" ? props.values.name : "Nie podano"}
                </p>
                <p key={props.values.id} className="order-item-col2--data--detail">
                  {props.values.receiptId !== "" ? props.values.receiptId : "Nie podano"}
                </p>
                <p key={props.values.id} className="order-item-col2--data--detail">
                  {props.values.price1 !== "" ? props.values.price1 : "Nie podano"}
                </p>
                <p key={props.values.id} className="order-item-col2--data--detail">
                  {props.values.price2 !== "" ? props.values.price2 : "Nie podano"}
                </p>
              </>
            ) : null }
          </div>
        </did>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    formInput: state.formInput
  };
};

export default connect(mapStateToProps)(OrderItem);
