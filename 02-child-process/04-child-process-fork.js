const { fork } = require("node:child_process");

const optionToTest = 3;

// Option 1: killing with special message
if (optionToTest === 1) {
  const child = fork("04-child-process-fork-child", [], {});
  child.send("Parent message 1");
  child.send("Parent message 2");
  child.send("Parent message 3");
  child.send("exit");
}

// Option 2: killing with kill command
if (optionToTest === 2) {
  const child = fork("04-child-process-fork-child", [], {});
  child.send("Parent message 1");
  child.send("Parent message 2");
  child.send("Parent message 3");
  setTimeout(() => child.kill(), 1000);
}

// Option 3: killing abort signal
if (optionToTest === 3) {
  const controller = new AbortController();
  const { signal } = controller;
  const child = fork("04-child-process-fork-child", [], { signal });
  child.on("error", (err) => {
    // Just show error
    if (err.code == "ABORT_ERR") {
      console.log("Expected abort received");
      return;
    }
    console.log("ERROR: \n\t" + err.message);
  });
  child.send("Parent message 1");
  child.send("Parent message 2");
  child.send("Parent message 3");
  setTimeout(() => controller.abort(), 1000);
}
