const pdf = require("html-pdf");
const pdfTemplate = require("../../documents");

//POST ROUTE: PDF generation and fetching data from frontend
// const postMethod = app.post("/create-pdf", (request, response) => {
//   generatePDF();
// });

const generatePDF = request => {
  pdf.create(pdfTemplate(request.body), {}).toFile("result.pdf", error => {
    if (error) {
      return Promise.reject();
    }
    return Promise.resolve();
  });
};

module.exports = {
  generatePDF
};
