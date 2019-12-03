const fs = require("fs");
const pdf = require("html-pdf");
const options = { format: "Letter" };
const parseArgs = require("minimist");
const colors = require("colors");

class PDFGenerator {
  constructor(fileName, options) {
    this.fileName = fileName;
    this.options = options;
    this.html = "";
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
        .toFile("./buisness.pdf", function(error, response) {
          if (error) return "Error occured " + error;
          return response;
        });
    } else {
      return "Could not create PDF - template location error";
    }
  }

  handleCommand = ({ content }) => {
    if (content) {
      if (typeof content !== "string") {
        return "Podaj prawidłową wartość";
      }
    } else {
      if (content === "") {
        return "Treść nie może być pusta";
      } else {
        return 'Błędne polecenie. Użyj: node pdf.generator.js --content="treść"';
      }
    }
  };
}

const newPDF = new PDFGenerator("/buisness.html", options);

const command = parseArgs(process.argv.slice(2, 3));
delete command._;

commandTest = newPDF.handleCommand(command);

if (commandTest === undefined) {
  newPDF.html = `<html><p>${command.content}</p></html>`;
  newPDF.generatePDF();
  newPDF.html;
} else {
  console.log(commandTest.red);
}

module.exports = PDFGenerator;
