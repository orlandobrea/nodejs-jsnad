const { execSync, exec } = require("node:child_process");
const { exit } = require("process");

// Execute shell commands 
//
// Sync
try {
  console.log("Sync");
  const output = execSync("ls -lah");
  console.log(output.toString());
} catch (e) {
  console.log(e);
}

// Callback
exec("ls -lah", (err, stdout, stderr) => {
  console.log("Callback:");
  if (err) {
    console.error("Error", err);
    exit(1);
  }
  console.log("Stdout:\n" + stdout.toString());
  console.log("stderr:\n" + stderr.toString());
});
