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
    this.setState(
      {
        id: selectedId
      },
      () => {
        this.props.sendValues(this.state);
      }
    );
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

  onClickForGenerate = () => {
    this.changeIdOfGeneratedPDF();
    this.createAndDownloadPDF();
  };

  render() {
    return (
      <div className="form">
        <input
          type="text"
          placeholder="Value 1"
          name="name"
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="Value 2"
          name="receiptId"
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="Value 3"
          name="price1"
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="Value 4"
          name="price2"
          onChange={this.handleChange}
        />
        <Button onClick={this.onClickForGenerate} text="Generate PDF!" />
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
