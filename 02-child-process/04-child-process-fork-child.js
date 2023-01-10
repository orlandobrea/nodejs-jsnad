console.log("I am the child process");

process.on("message", (message) => {
  if (message === "exit") {
    console.log("--Closing child--");
    process.exit(0);
  }
  console.log(`I've received... "${message}"`);
});
