import React from "react";
import axios from "axios";
import { saveAs } from "file-saver";
import Button from "../button/button.components";

class Form extends React.Component {
  state = {
    name: "",
    receiptId: 0,
    price1: 0,
    price2: 0
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value
    });
  };

  createAndDownloadPDF = () => {
    axios
      .post("/create-pdf", this.state)
      .then(() => axios.get("fetch-pdf", { responseType: "blob" }))
      .then(response => {
        const pdfBlob = new Blob([response.data], { type: "application/pdf" });

        saveAs(pdfBlob, "newPdf.pdf");
      });
  };

  render() {
    return (
      <div className='form'>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={this.handleChange}
        />
        <input
          type="number"
          placeholder="Recipt id"
          name="receiptId"
          onChange={this.handleChange}
        />
        <input
          type="number"
          placeholder="Price 1"
          name="price1"
          onChange={this.handleChange}
        />
        <input
          type="number"
          placeholder="Price 2"
          name="price2"
          onChange={this.handleChange}
        />
        <Button onClick={this.createAndDownloadPDF} text="Generate PDF!"/>
      </div>
    );
  }
}

export default Form;
