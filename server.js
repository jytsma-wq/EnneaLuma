const { createReadStream, statSync } = require("node:fs");
const { createServer } = require("node:http");
const { extname, isAbsolute, relative, resolve } = require("node:path");

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
  let cleanPath;

  try {
    cleanPath = decodeURIComponent(urlPath.split("?")[0]);
  } catch {
    return { status: 400 };
  }

  if (cleanPath.includes("\0")) {
    return { status: 400 };
  }

  const requestedPath = cleanPath === "/" ? "/index.html" : cleanPath;
  const filePath = resolve(root, `.${requestedPath}`);
  const relativePath = relative(root, filePath);

  if (relativePath.startsWith("..") || isAbsolute(relativePath)) {
    return { status: 403 };
  }

  return { filePath, status: 200 };
}

function setSecurityHeaders(response) {
  response.setHeader("X-Content-Type-Options", "nosniff");
  response.setHeader("X-Frame-Options", "DENY");
  response.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  response.setHeader(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()"
  );
}

function sendText(response, status, message) {
  response.writeHead(status, {
    "Content-Type": "text/plain; charset=utf-8",
    "Cache-Control": "no-store"
  });
  response.end(message);
}

function createAppServer() {
  return createServer((request, response) => {
    setSecurityHeaders(response);

    if (request.method !== "GET" && request.method !== "HEAD") {
      response.setHeader("Allow", "GET, HEAD");
      sendText(response, 405, "Method not allowed");
      return;
    }

    const resolvedPath = resolvePath(request.url || "/");

    if (!resolvedPath.filePath) {
      sendText(
        response,
        resolvedPath.status,
        resolvedPath.status === 403 ? "Forbidden" : "Bad request"
      );
      return;
    }

    let isFile = false;

    try {
      isFile = statSync(resolvedPath.filePath).isFile();
    } catch {
      isFile = false;
    }

    if (!isFile) {
      sendText(response, 404, "Not found");
      return;
    }

    const extension = extname(resolvedPath.filePath);

    response.writeHead(200, {
      "Content-Type": contentTypes[extension] || "application/octet-stream",
      "Cache-Control": extension === ".html" ? "no-cache" : "public, max-age=3600"
    });

    if (request.method === "HEAD") {
      response.end();
      return;
    }

    const stream = createReadStream(resolvedPath.filePath);
    stream.on("error", () => {
      if (!response.headersSent) {
        sendText(response, 500, "Internal server error");
      } else {
        response.destroy();
      }
    });
    stream.pipe(response);
  });
}

if (require.main === module) {
  createAppServer().listen(port, () => {
    console.log(`EnneaLuma website listening on port ${port}`);
  });
}

module.exports = { createAppServer, resolvePath };
