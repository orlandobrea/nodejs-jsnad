const { exec, spawn, fork } = require("node:child_process");

/* exec("ps -aux", (err, stdout, stderr) => {
  console.log(stdout)
}) */

stream = spawn("ls");
stream.on("close", () => console.log("end"));
stream.stdout.on("data", (data) => console.log(data.toString().toUpperCase()));
