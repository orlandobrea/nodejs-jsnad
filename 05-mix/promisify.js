const { promisify } = require("node:util");
const fs = require("node:fs");

const myCb = (err, data) => {
  console.log("myCB", err, data);
};

const fnThatReceivesCB = (cb) => {
  console.log("Main");
  cb(null, "called from fnThatReceivesCB");
};

fnThatReceivesCB(myCb);

(async () => {
  const asyncFn = promisify(fnThatReceivesCB);
  const response = await asyncFn();
  console.log("-FIN-", response);
})();

(async () => {
  const readPromise = promisify(fs.readFile);
  const data = await readPromise("./lorem-ipsum.txt");
  console.log(data.toString());
})();
