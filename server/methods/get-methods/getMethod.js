//GET  - send the generated PDF to clinet
const getMethod = app.get("/fetch-pdf", (request, response) => {
  response.sendFile(`${__dirname}/result.pdf`);
});

module.exports = {
  getMethod
};
