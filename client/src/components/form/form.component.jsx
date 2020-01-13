import React from "react";
import axios from "axios";
import { saveAs } from "file-saver";
import Button from "../button/button.components";
import { connect } from "react-redux";
import { FormInputAdd } from "../../redux/form/form.actions";

class Form extends React.Component {
  state = {
    id: 1,
    name: "",
    receiptId: 0,
    price1: 0,
    price2: 0,
    name2: "",
    receiptId2: ""
  };

  changeIdOfGeneratedPDF = () => {
    const selectedId = this.props.selectedId.lastId;
    console.log("na to ustawiam", selectedId);
    this.setState({
      id: selectedId
    });
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

  componentDidUpdate() {}

  render() {
    console.log("to jest mój state z forma", this.state);
    console.log("to jest mój props z forma", this.props);
    return (
      <div className="form">
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
        <Button onClick={this.changeIdOfGeneratedPDF, this.createAndDownloadPDF} text="Generate PDF!" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedId: state.templatesIDs
  };
};

const mapDispatchToProps = dispatch => ({
  sendValues: state => dispatch(FormInputAdd(state))
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
