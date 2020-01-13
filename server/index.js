const express = require("express");
const bodyParser = require("body-parser");
const pdf = require("html-pdf");
const cors = require("cors");

const pdfTemplate = require("./documents/index");
const pdfTemplate2 = require("./documents/index2");
const pdfTemplate3 = require("./documents/index3");


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//POST ROUTE: PDF generation and fetching data from frontend
app.post("/create-pdf", (request, response) => {
  if(request.body.id === 1) {
    pdf.create(pdfTemplate(request.body), {}).toFile("result.pdf", error => {
      if (error) {
        response.send(Promise.reject());
      }
      response.send(Promise.resolve());
    });
  } else if(request.body.id === 2) {
    pdf.create(pdfTemplate2(request.body), {}).toFile("result.pdf", error => {
      if (error) {
        response.send(Promise.reject());
      }
      response.send(Promise.resolve());
    });
  }else if(request.body.id === 3) {
    pdf.create(pdfTemplate3(request.body), {}).toFile("result.pdf", error => {
      if (error) {
        response.send(Promise.reject());
      }
      response.send(Promise.resolve());
    });
  }
});

//GET  - send the generated PDF to clinet
app.get("/fetch-pdf", (request, response) => {
  response.sendFile(`${__dirname}/result.pdf`);
});

app.listen(port, () => console.log(`Listening on port ${port}`));