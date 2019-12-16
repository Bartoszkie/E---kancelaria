//LIBKI IMPORT
const express = require("express");
const bodyParser = require("body-parser");
const pdf = require("html-pdf");
const cors = require("cors");

//PDF || APP CONFIG
const pdfTemplate = require("./documents");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const postMethod = require('./methods/post-methods/postMethod');
const getMethod = require('./methods/get-methods/getMethod');

class KLASAGLOWNA {
  constructor(postMethod, getMethod) {
    this.postMethod = postMethod;
    this.getMethod = getMethod;
  } 
}

const test = new KLASAGLOWNA(postMethod, getMethod);
test.postMethod();
test.getMethod();

const server = app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = {
  server, 
  postMethod, 
  getMethod
}