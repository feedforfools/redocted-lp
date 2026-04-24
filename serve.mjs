import http from "http";
import fs from "fs";
import path from "path";

const port = 3000;
const distDir = path.join(process.cwd(), "dist");

console.log(`Serving files from: ${distDir}`);

const server = http.createServer((req, res) => {
  let filePath = path.join(distDir, req.url);

  console.log(`Request: ${req.url} -> ${filePath}`);

  // If no file extension or ends with /, try appending index.html
  if (req.url === "/" || !path.extname(filePath) || filePath.endsWith("/")) {
    filePath = path.join(filePath, "index.html");
  }

  console.log(`Final path: ${filePath}`);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err.message}`);
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>404 Not Found</h1>");
      return;
    }

    const ext = path.extname(filePath);
    const mimeTypes = {
      ".html": "text/html",
      ".css": "text/css",
      ".js": "text/javascript",
      ".json": "application/json",
      ".png": "image/png",
      ".jpg": "image/jpeg",
      ".svg": "image/svg+xml",
    };

    const contentType = mimeTypes[ext] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  });
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
