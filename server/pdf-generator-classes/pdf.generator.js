const fs = require("fs");
const pdf = require("html-pdf");

class PDFGenerator {
  constructor(fileName, html) {
    this.fileName = fileName;
    this.html = html;
    this.options = { format: "Letter" };
  }

  locateTemplate() {
    try {
      const html = fs.readFileSync(`${__dirname}${this.fileName}`, "utf8");
      return (this.html = html);
    } catch (error) {
      return "Error: readFileSync";
    }
  }

  generatePDF(html = this.html) {
    if (html !== "Error: readFileSync") {
      pdf
        .create(html, this.options)
        .toFile(`./buisness.pdf`, function(error, response) {
          if (error) return "Error occured " + error;
          return response;
        });
    } else {
      return "Could not create PDF - template location error";
    }
  }
}

// const html = "<html><p>dummy test from new fucking constructor</p></html>";
// const newPDF = new PDFGenerator("/buisness.html", html);
// newPDF.generatePDF();

module.exports = PDFGenerator;
