const http = require("http");
const fs = require("fs");
const readString = fs.createReadStream("index.html", "utf-8");
const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  readString.pipe(res);
});

server.listen(3000, function () {
  console.log("Server is working for Ma Nann");
});
