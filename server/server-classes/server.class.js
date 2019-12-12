class Server {
  constructor() {
    const express = require("express");
    const cors = require("cors");
    const bodyParser = require("body-parser");

    this.options = { format: "Letter" };
    this.pdfTemplate = require("../documents/index");
    this.PDFGenerator = require("../classes/pdf.generator");

    this.app = express();
    this.port = process.env.PORT || 5000;

    this.app.use(cors());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());

    const server = this.app.listen(this.port, () =>
      console.log(`Listening on port ${this.port}`)
    );
  }

  postMethod() {
    this.app.post("/create-pdf", (request, response) => {
      const newPDF = new this.PDFGenerator(
        null,
        this.options,
        this.pdfTemplate(request.body)
      );
      const generatePDF = newPDF.generatePDF();
      if (generatePDF === "Could not create PDF - template location error") {
        return response.send(Promise.reject());
      } else {
        return response.send(Promise.resolve());
      }
    });
  }

  getMethod() {
    this.app.get("/fetch-pdf", (request, response) => {
      response.sendFile(`${__dirname}/buisness.pdf`);
    });
  }
}

const server = new Server();

