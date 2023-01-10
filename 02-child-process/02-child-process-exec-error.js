const { execSync, exec } = require("node:child_process");
const { exit } = require("process");

// Execute shell commands 
//
// Sync

const commandWithError = "ls -P";
try {
  console.log("Sync");
  execSync(commandWithError);
} catch (e) {
  console.log("This is the expected flow");
  console.log(e.message);
}

// Callback
exec(commandWithError, (err, stdout, stderr) => {
  console.log("Callback:");
  if (err) {
    console.log("This is the expected flow");
    console.log("stderr:\n" + stderr.toString());
    console.error("Error", err.message);
    exit(1);
  }
  console.log("Stdout:\n" + stdout.toString());
});
