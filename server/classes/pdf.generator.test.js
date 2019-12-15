const PDFGenerator = require("./pdf.generator");
const fs = require("fs");

describe("PDF Generator Class tests", () => {
  beforeAll(() => {
    const mainInstance = new PDFGenerator("/buisness.html", "");
    mainInstance.locateTemplate();
    mainInstance.generatePDF();
  });

  it("test if file is created = should return true", () => {
    expect(fs.existsSync(`${__dirname}/buisness.pdf`)).toBe(true);
  });

  it("test if class contructor is getting proper values", () => {
    const mockObject = new PDFGenerator("buisness", "html");
    expect(mockObject.fileName).toBe("buisness");
    expect(mockObject.html).toBe("html");
  });

  it("test if path to template is correct", () => {
    const mockCorrectPath = "/buisness.html";
    const mockObject = new PDFGenerator(mockCorrectPath, "");
    expect(typeof mockObject.locateTemplate()).toBe("string");
  });

  it("test if content of passed string is equal to content of generated pdf", () => {
    //Mock of htmlTemplate
    const mockHTMLTemplate = "<html><p>Test syf</p></html>";
    //Mock of correctPath
    const mockCorrectPath = "/buisness.html";
    //Mock of initializing object
    const mockObject = new PDFGenerator(mockCorrectPath, mockHTMLTemplate);
    // //assign mockHTMLTemplate to html property
    // mockObject.html = mockHTMLTemplate;
    //generate PDF with mockHTMLTemplate string passed
    mockObject.generatePDF();
    expect(mockObject.locateTemplate()).toEqual(mockObject.html);
  });

  it("test if successfully created pdf size is larger than 0", () => {
    const mockCorrectPath = "/buisness.html";
    const mockObject = new PDFGenerator(mockCorrectPath, "increasing size of pdf file");
    // mockObject.html = "increasing size of pdf file";
    mockObject.generatePDF();
    expect(fs.existsSync(`${__dirname}/buisness.pdf`)).toBe(true);
    const stats = fs.statSync(`${__dirname}/buisness.pdf`);
    expect(stats["size"]).toBeGreaterThan(0);
  });

  it("test if wrong template localization is handled", () => {
    const mockWrongCorrectPath = "test";
    const mockObject = new PDFGenerator(mockWrongCorrectPath, "");
    expect(mockObject.locateTemplate()).toEqual("Error: readFileSync");
  });

  it("test if generatePDF gets wrong parameter is handled", () => {
    const mockCorrectPath = "/buisness.html";
    const mockObject = new PDFGenerator(mockCorrectPath, "Error: readFileSync");
    // mockObject.html = "Error: readFileSync";
    expect(mockObject.generatePDF()).toEqual(
      "Could not create PDF - template location error"
    );
  });
});
