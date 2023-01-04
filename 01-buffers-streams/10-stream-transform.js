const fs = require("node:fs");
const { Transform, pipeline } = require("node:stream");

const inputFileName = "01-buffer-alloc.js";
const outputFileName = "10-stream-transform.txt";

const createUpperCaseTransformStream = () => {
  return new Transform({
    transform(chunk, _, next) {
      this.push(chunk.toString().toUpperCase());
      next();
    },
  });
};

const stream1 = fs.createReadStream(inputFileName);
const stream2 = createUpperCaseTransformStream();
const stream3 = fs.createWriteStream(outputFileName);

const useOption1 = true;

if (useOption1) {
  // Option 1
  stream1.pipe(stream2).pipe(stream3);
} else {
  // Option 2: better with error handling
  pipeline(stream1, stream2, stream3, (error) => {
    !!error ? console.log(`Error processing: ${error}`) : console.log("OK");
  });
}
