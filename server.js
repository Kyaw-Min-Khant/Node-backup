const http = require("http");
const port = 3000;

let server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": `text/html` });
  res.end("Hello World!");
});

server.listen(port, function () {
  console.log("Server is running at port" + port);
});
