const PDFGenerator = require("./pdf.generator");
const fs = require("fs");
const options = { format: "Letter" };

describe("PDF Generator Class tests", () => {
  beforeAll(() => {
    const options = { format: "Letter" };
    const mainInstance = new PDFGenerator("/buisness.html", options);
    mainInstance.generatePDF();
  });

  it("test if file is created = should return true", () => {
    expect(fs.existsSync(`${__dirname}/buisness.html`)).toBe(true);
  });

  it("test if class contructor is getting proper values", () => {
    const mockObject = new PDFGenerator("buisness", "OPTIONS");
    expect(mockObject.fileName).toBe("buisness");
    expect(mockObject.options).toBe("OPTIONS");
  });

  it("test if path to template is correct", () => {
    const mockCorrectPath = "/buisness.html";
    const mockObject = new PDFGenerator(mockCorrectPath, options);
    expect(typeof mockObject.locateTemplate()).toBe("string");
  });

  it("test if PDFTemplate.html is equal to mocked PDFTemplate.pdf", () => {
    const pathToPDFTemplate = "/PDFTemplate.html";
    const mockPDFTemplate = "";
    const mockObject = new PDFGenerator(pathToPDFTemplate, options);
    const convertPassedHTMLToString = mockObject.locateTemplate();
    expect(convertPassedHTMLToString).toEqual(mockPDFTemplate);
  });
});
