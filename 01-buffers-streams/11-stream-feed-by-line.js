const fs = require("node:fs");
const { Duplex, pipeline } = require("node:stream");

// file -> myStream -> console.log by line

const inputFileName = "01-buffer-alloc.js";

const createAddLineNumberStream = () => {
  let lineNumber = 1;
  return new Duplex({
    read() {},
    write(chunk, _, next) {
      const lines = chunk.toString().split("\n");
      lines.forEach((line) => {
        this.push(`${lineNumber}\t${line}\n`);
        lineNumber++;
      });
      next();
    },
  });
};

const inputReader = fs.createReadStream(inputFileName);
const myStream = createAddLineNumberStream();

pipeline(inputReader, myStream, process.stdout, (err) => {
  err ? console.error("Error processing") : console.log("Ok");
});
