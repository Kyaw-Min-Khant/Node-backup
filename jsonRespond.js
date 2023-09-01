const http = require("http");
const fs = require("fs");
const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  const user = {
    name: "Kyaw Min Khant",
    age: 18,
    job: "Developer",
  };
  res.end(JSON.stringify(user));
});
server.listen(3000, function () {
  console.log("Server is working for User");
});
