import React from "react";

const Form = () => {
  return (
    <>
      <input
        type="text"
        placeholder="Name"
        name="name"
        onChange={this.handleChange}
      />
      <input
        type="number"
        placeholder="Recipt id"
        name="reciptId"
        onChange={this.handleChange}
      />
      <input
        type="number"
        placeholder="Price 1"
        name="price 1"
        onChange={this.handleChange}
      />
      <input
        type="number"
        placeholder="Price 2"
        name="price 2"
        onChange={this.handleChange}
      />
      <button onClick={this.createAndDownloadPDF}>Mati śmierdzi</button>
    </>
  );
};

export default Form;