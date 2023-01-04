const fs = require("node:fs");
const { Readable } = require("node:stream");

const fileName = "09-stream-custom-readable.txt";

const createMyReadableStream = () => {
  return new Readable({
    read() {
      this.push("Line 1\n");
      this.push("Line 2\n");
      this.push(null);
    },
  });
};

const outputStream = fs.createWriteStream(fileName);
createMyReadableStream().pipe(outputStream);

console.log(`Check ${fileName} for readable output`);
