const request = require("supertest");
const server = require("../index");

describe("index.js tests", () => {
  it("should create a new post", async () => {
    const res = await request(server.postMethod)
      .post("/create-pdf")
      .send(Promise.resolve());
    expect(res.statusCode).toEqual(200);
  });

  it("should send file", async () => {
    const res = await request(server.getMethod)
      .get("/fetch-pdf")
      .send(`${__dirname}/result.pdf`);
    expect(res.statusCode).toEqual(200);
  });
});
