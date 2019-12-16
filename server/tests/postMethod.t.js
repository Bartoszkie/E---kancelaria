const pdftest = require("../methods/post-methods/postMethod");

describe("test of PDF Generator method", () => {
  it("generate pdf method", () => {
    const mockResponseBody = {
      body: {
        name: "Bartosz",
        price1: 1,
        price2: 2
      }
    };
    expect(pdftest.generatePDF(mockResponseBody)).toEqual(Promise.resolve());
  });
});
