import React from "react";
import OrderItem from "../../components/order-item/order-item.component";
import { connect } from "react-redux";

const Orders = props => {
  const { selectedId, formInput } = props;
  console.log(selectedId.pictureData, formInput.formState);

  if (selectedId.pictureData.length > 0 && formInput.formState.length > 0) {
    for (let i = 0; i < selectedId.pictureData.length; i++) {
      if (selectedId.pictureData[i].id === formInput.formState[i].id) {
        
      }
    }
  }

  return (
    <section className="orders">
      {props.selectedId.pictureData.length > 0
        ? props.selectedId.pictureData.map((item, index) => (
            <OrderItem
              key={item.id}
              name={item.name}
              description={item.description}
              img={item.img}
              required={item.required}
              values={item.id === formInput.formState[index].id ? formInput.formState[index] : null}
            />
          ))
        : null}
    </section>
  );
};

const mapStateToProps = state => {
  return {
    selectedId: state.templatesIDs,
    formInput: state.formInput
  };
};

export default connect(mapStateToProps)(Orders);
