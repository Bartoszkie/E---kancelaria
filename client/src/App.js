import React from "react";
import axios from "axios";
import { saveAs } from "file-saver";

import {Route} from 'react-router-dom';
import StartPage from './pages/start-page/StartPage.component';

import "./sass/global/main.scss";

class App extends React.Component {
  state = {
    name: "",
    reciptId: 0,
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
      <div className="container">
        <Route exact path="/" component={StartPage}/>
      </div>
    );
  }
}

export default App;
