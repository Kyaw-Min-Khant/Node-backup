const fs = require("fs");
const crypto = require("crypto");

let myReadableStream = fs.createReadStream("Nann.txt");
myReadableStream.on("data", function (chunk) {
  console.log("working");
  console.log(chunk);

  // Create a hash object
  const hash = crypto.createHash("sha256");

  // Update the hash with the current chunk
  hash.update(chunk);

  // Generate the hash digest (hexadecimal representation)
  const hashcode = hash.digest("hex");

  console.log("Hash code:", hashcode);
});

function javascriptFunction() {
  console.log("JavaScript Regular Function");
}
javascriptFunction();

const anonymousFunction = function (name) {
  console.log("JavaScript anonymousFunction");
};
anonymousFunction();
