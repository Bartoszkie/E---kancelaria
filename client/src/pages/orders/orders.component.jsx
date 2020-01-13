import React from "react";
import OrderItem from "../../components/order-item/order-item.component";
import { connect } from "react-redux";

const Orders = props => {
  return (
    <section className="orders">
      {props.selectedId.pictureData.length > 0
        ? props.selectedId.pictureData.map(item => (
            <OrderItem
              key={item.id}
              name={item.name}
              description={item.description}
              img={item.img}
              required={item.required}
            />
          ))
        : null}
    </section>
  );
};

const mapStateToProps = state => {
  return {
    selectedId: state.templatesIDs, 
  };
};

export default connect(mapStateToProps)(Orders);
