const PDFGenerator = require("./pdf.generator");
const fs = require("fs");
const options = { format: "Letter" };
const pdftohtml = require("pdftohtmljs");

describe("PDF Generator Class tests", () => {
  beforeAll(() => {
    const options = { format: "Letter" };
    const mainInstance = new PDFGenerator("/buisness.html", options);
    mainInstance.locateTemplate();
    mainInstance.generatePDF();
  });

  it("test if file is created = should return true", () => {
    expect(fs.existsSync(`${__dirname}/buisness.pdf`)).toBe(true);
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

  it("test if content of passed string is equal to content of generated pdf", () => {
    //Mock of htmlTemplate
    const mockHTMLTemplate = "<html><p>Test syf</p></html>";
    //Mock of correctPath
    const mockCorrectPath = "/buisness.html";
    //Mock of initializing object
    const mockObject = new PDFGenerator(mockCorrectPath, options);
    //assign mockHTMLTemplate to html property
    mockObject.html = mockHTMLTemplate;
    //generate PDF with mockHTMLTemplate string passed
    mockObject.generatePDF();
    expect(mockObject.locateTemplate()).toEqual(mockObject.html);
  });
});
