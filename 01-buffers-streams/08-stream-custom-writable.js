const fs = require("node:fs");
const { Writable } = require("node:stream");

const fileName = "01-buffer-alloc.js";

const createConsolelogStream = () => {
  return new Writable({
    write(chunk, encoding, next) {
      console.log(`Received: ${chunk.toString()} (encoding: ${encoding})`);
      next();
    },
  });
};

const readStream = fs.createReadStream(fileName);

readStream.pipe(createConsolelogStream());
