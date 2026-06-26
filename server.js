const { createReadStream, existsSync } = require("node:fs");
const { createServer } = require("node:http");
const { extname, join, normalize } = require("node:path");

const port = Number(process.env.PORT || 3000);
const root = __dirname;

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml; charset=utf-8",
  ".ico": "image/x-icon"
};

function resolvePath(urlPath) {
  const cleanPath = decodeURIComponent(urlPath.split("?")[0]);
  const requestedPath = cleanPath === "/" ? "/index.html" : cleanPath;
  const filePath = normalize(join(root, requestedPath));

  if (!filePath.startsWith(root)) {
    return "";
  }

  return filePath;
}

createServer((request, response) => {
  const filePath = resolvePath(request.url || "/");
  const fallbackPath = join(root, "index.html");
  const targetPath = filePath && existsSync(filePath) ? filePath : fallbackPath;
  const extension = extname(targetPath);

  response.writeHead(200, {
    "Content-Type": contentTypes[extension] || "application/octet-stream",
    "Cache-Control": extension === ".html" ? "no-cache" : "public, max-age=3600"
  });

  createReadStream(targetPath).pipe(response);
}).listen(port, () => {
  console.log(`EnneaLuma website listening on port ${port}`);
});
