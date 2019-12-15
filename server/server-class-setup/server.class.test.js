const Server = require("./server.class");
const request = require("supertest");

describe("server class tests", () => {
  var server;
  beforeAll(() => {
    server = new Server();
  });

  afterAll(() => {
    server.close();
  });

  it("check if Server.class constructor is up and running", () => {
    expect(server.port).toBe(5000);
    expect(typeof server.app).toBe("function");
  });

  it("get method should return 200 OK to /fetch-pdf", done => {
    const serverGetMethod = server.getMethod();
    request(serverGetMethod)
      .get("/fetch-pdf")
      .expect(200, done);
  });

  it("404 to everything else on getMethod", done => {
    const serverGetMethod = server.getMethod();
    request(serverGetMethod)
      .get("/dummy/url")
      .expect(404, done);
  });

  it("Should create a new post at /create-pdf URL", async () => {
    jest.setTimeout(6000);
    const serverPostMethod = server.postMethod();
    const response = await request(serverPostMethod)
      .post("/create-pdf")
      .send(Promise.resolve());
    expect(response.statusCode).toEqual(200);
  });

  it("Should return 404 while new post at wrong /create-pdf URL", async () => {
    jest.setTimeout(6000);
    const serverPostMethod = server.postMethod();
    const response = await request(serverPostMethod)
      .post("/dummy/url")
      .send(Promise.resolve());
    expect(response.statusCode).toEqual(404);
  });

  it("Post method should post object with data to frontend", async () => {
    jest.setTimeout(6000);
    const serverPostMethod = server.postMethod();
    const response = await request(serverPostMethod)
      .post("/create-pdf")
      .send(Promise.resolve());
    expect(response.clientError).toBe(false);
  });
});
