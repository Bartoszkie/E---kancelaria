const express = require("express");
const bodyParser = require("body-parser");
const pdf = require("html-pdf");
const cors = require("cors");

const pdfTemplate = require("./documents");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//POST ROUTE: PDF generation and fetching data from frontend
app.post("/create-pdf", (request, response) => {
  pdf.create(pdfTemplate(request.body), {}).toFile("result.pdf", error => {
    if (error) {
      response.send(Promise.reject());
    }

    response.send(Promise.resolve());
  });
});

//GET  - send the generated PDF to clinet
app.get("/fetch-pdf", (request, response) => {
  response.sendFile(`${__dirname}/result.pdf`);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
