const fs = require("fs");
const pdf = require("html-pdf");
const options = { format: "Letter" };

class PDFGenerator {
  constructor(fileName, options) {
    this.fileName = fileName;
    this.options = options;
    this.html = "";
  }

  locateTemplate() {
    try {
      const html = fs.readFileSync(`${__dirname}${this.fileName}`, "utf8");
      return this.html = html;
    } catch (error) {
      return "Error: readFileSync";
    }
  }

  generatePDF(html = this.html) {
    if (html !== "Error: readFileSync") {
      pdf
        .create(html, this.options)
        .toFile("./buisness.pdf", function(error, response) {
          if (error) return "Error occured " + error;
          return response;
        });
    } else {
      return "Could not create PDF - template location error";
    }
  }
}

const newPDF = new PDFGenerator("/buisness.html", options);
console.log(newPDF.html = "<html><p>dummy test</p></html>")
console.log(newPDF.generatePDF());
console.log(newPDF.html);

module.exports = PDFGenerator;
