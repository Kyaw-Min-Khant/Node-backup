const http = require("http");
const fs = require("fs");
const myReadableStream = fs.createReadStream("text.txt", "utf-8");
const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  myReadableStream.pipe(res);
});
server.listen(3000, function () {
  console.log("Server is Working at 3000");
});
