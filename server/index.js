//LIBKI IMPORT
const express = require("express");
const bodyParser = require("body-parser");
const pdf = require("html-pdf");
const cors = require("cors");

//PDF || APP CONFIG
const pdfTemplate = require("./documents");

const options = { format: "Letter" };
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PDFGenerator = require("./classes/pdf.generator");

//POST ROUTE: PDF generation and fetching data from frontend
const postMethod = app.post("/create-pdf", (request, response) => {
  const newPDF = new PDFGenerator(null, options, pdfTemplate(request.body));
  const generatePDF = newPDF.generatePDF();
  if (generatePDF === "Could not create PDF - template location error") {
    return response.send(Promise.reject());
  } else {
    return response.send(Promise.resolve());
  }
});

//GET  - send the generated PDF to clinet
const getMethod = app.get("/fetch-pdf", (request, response) => {
  response.sendFile(`${__dirname}/buisness.pdf`);
});

const server = app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = {
  server,
  postMethod,
  getMethod
};