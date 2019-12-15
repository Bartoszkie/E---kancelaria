const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const PDFGenerator = require("../classes/pdf.generator");
const pdfTemplate = require("../documents/index");

class Server {
  constructor() {
    this.port = process.env.PORT || 5000;
    this.app = express();
    this.app.use(cors());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
  }

  listen() {
    return this.app.listen(this.port, error => {
      if (error) {
        console.log(error);
      } else {
        const string = `Server is running, started on ${this.port}`;
        return string;
      }
    });
  }

  getMethod() {
    return this.app.get("/fetch-pdf", (req, res) => {
      res.sendFile(`${__dirname}/buisness.pdf`);
    });
  }

  postMethod() {
    return this.app.post("/create-pdf", (request, response) => {
      const newPDF = new PDFGenerator(null, pdfTemplate(request.body));
      const generatePDF = newPDF.generatePDF();
      if (generatePDF === "Could not create PDF - template location error") {
        return response.send(Promise.reject());
      } else {
        return response.send(Promise.resolve());
      }
    });
  }
}

//instance
// let server = new Server();
// server.listen();
// server.postMethod();
// server.getMethod();

module.exports = Server;
