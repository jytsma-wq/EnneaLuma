const { after, before, describe, it } = require("node:test");
const assert = require("node:assert/strict");
const { createAppServer, resolvePath } = require("./server");

describe("static server", () => {
  let baseUrl;
  let server;

  before(async () => {
    server = createAppServer();
    await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
    const { port } = server.address();
    baseUrl = `http://127.0.0.1:${port}`;
  });

  after(async () => {
    await new Promise((resolve, reject) =>
      server.close((error) => (error ? reject(error) : resolve()))
    );
  });

  it("serves the home page with security headers", async () => {
    const response = await fetch(baseUrl);

    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type"), /^text\/html/);
    assert.equal(response.headers.get("x-content-type-options"), "nosniff");
    assert.equal(response.headers.get("x-frame-options"), "DENY");
    assert.match(await response.text(), /<title>/i);
  });

  it("returns a real 404 for a missing asset", async () => {
    const response = await fetch(`${baseUrl}/missing.js`);

    assert.equal(response.status, 404);
    assert.match(response.headers.get("content-type"), /^text\/plain/);
  });

  it("supports HEAD without sending a response body", async () => {
    const response = await fetch(`${baseUrl}/styles.css`, { method: "HEAD" });

    assert.equal(response.status, 200);
    assert.equal(await response.text(), "");
  });

  it("rejects unsupported methods and unsafe paths", async () => {
    const response = await fetch(baseUrl, { method: "POST" });

    assert.equal(response.status, 405);
    assert.equal(response.headers.get("allow"), "GET, HEAD");
    assert.equal(resolvePath("/%E0%A4%A").status, 400);
    assert.equal(resolvePath("/../package.json").status, 403);
  });
});
