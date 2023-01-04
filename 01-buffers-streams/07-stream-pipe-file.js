const fs = require("node:fs");

const inputFileName = "01-buffer-alloc.js";
const outputFileName = "07-stream-pipe-file.txt";

const readStream = fs.createReadStream(inputFileName);
const writeStream = fs.createWriteStream(outputFileName);

readStream.pipe(writeStream);
console.log(`File ${inputFileName} copied into ${outputFileName}`);
