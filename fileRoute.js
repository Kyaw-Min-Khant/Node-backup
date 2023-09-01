const fs = require("fs");
const http = require("http");
const server = http.createServer(function (req, res) {
  if (req.url === "/" || req.url === "/home" || req.url === "/index") {
    const readString = fs.createReadStream("index.html");
    res.writeHead(200, { "Content-Type": "text/html" });
    readString.pipe(res);
  } else if (req.url === "/about") {
    const readString = fs.createReadStream("about.html");
    res.writeHead(200, { "Content-Type": "text/html" });
    readString.pipe(res);
  } else if (req.url === "/profile") {
    const readString = fs.createReadStream("profile.html");
    res.writeHead(200, { "Content-Type": "text/html" });
    readString.pipe(res);
  } else if (req.url === "/api/user") {
    const user = {
      name: "Kyaw Kyaw",
      age: 20,
      work: "Developer",
    };
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(user));
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("No result found");
  }
});
server.listen(3000, function () {
  console.log("Server is Working");
});
