const fs = require("node:fs");
const { EventEmitter } = require("node:events");
const { Writable } = require("node:stream");

const emitter = new EventEmitter();

emitter.on("start", () => {
  console.log("--STARTING--");
});
emitter.on("end", () => {
  console.log("--ENDING--");
});
emitter.on("data", (data) => {
  console.log(data);
});

const createStreamToEmitter = (em) => {
  em.emit("start", "");
  return new Writable({
    write(chunk, _, next) {
      em.emit("data", chunk.toString().toUpperCase());
      next();
    },
    final() {
      em.emit("end", "");
    },
  });
};

/* fs.readFile("lorem-ipsum.txt", (err, data) => {
  emitter.emit("start", "");
  emitter.emit("data", data.toString());
  emitter.emit("end", "");
}); */

const input = fs.createReadStream("lorem-ipsum.txt");
const stream = createStreamToEmitter(emitter);
input.pipe(stream);
