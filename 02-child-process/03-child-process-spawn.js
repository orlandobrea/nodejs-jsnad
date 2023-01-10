const { spawn, spawnSync } = require("node:child_process");

// Sync
const output = spawnSync(process.execPath, [
  "-e",
  'console.log("Hi from spawned Sync")',
]);
console.log(output.stdout.toString());

const stream = spawn(process.execPath, [
  "-e",
  'console.log("Hi from spawn Callback")',
]);

stream.on("close", (status) => {
  console.log("--end--");
});
stream.stdout.on("data", (data) => {
  console.log("--");
  console.log(data.toString());
});

// Use parent (main process) stdin, stdout, stderr
spawn(
  process.execPath,
  ["-e", 'console.log("Hi from spawn Callback - using parent")'],
  { stdio: ["inherit", "inherit", "inherit"] }
);
