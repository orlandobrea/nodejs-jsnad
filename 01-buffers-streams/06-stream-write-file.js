const fs = require("node:fs");

const fileName = "06-stream-write-file.txt";

const writeStream = fs.createWriteStream(fileName);

writeStream.write("A chunk to write\n");
writeStream.write("Second line\n");
writeStream.write("Third line\n");
writeStream.end();

console.log(`Check ${fileName} contents`)

