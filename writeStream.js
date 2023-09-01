const fs = require("fs");
const readStream = fs.createReadStream("text.txt", "utf-8");
const writeStream = fs.createWriteStream("newText.txt");

readStream.on("data", function (chunk) {
  readStream.pipe(writeStream);
  //   writeStream.write(chunk);
});
