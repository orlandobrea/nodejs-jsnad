const fs = require("node:fs");

const fileName = "01-buffer-alloc.js";

const readStream = fs.createReadStream(fileName);

// For each chunk of data read from the file...
readStream.on("data", (chunk) => {
  console.log(chunk.toString());
});

// When the stream ends...
readStream.on("end", () => {
  console.log("--End Of Stream--");
});
