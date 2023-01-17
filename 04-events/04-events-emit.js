const { EventEmitter } = require("node:events");

const emitter = new EventEmitter();

emitter.on("something", (param) => {
  console.log("Emitter 1 received " + param);
});

emitter.addListener("something", (param) => {
  console.log("Emitter 2 received " + param);
}); // is another option

emitter.prependListener("something", (param) => {
  console.log("Emitter 0 received " + param);
});

emitter.emit("something", "hi!");
emitter.emit("something", "I'm a NodeJS app");
