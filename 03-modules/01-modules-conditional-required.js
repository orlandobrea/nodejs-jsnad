// is main module?
if (require.main === module) {
  console.log("This is the main module");
} else {
  module.exports = {
    test: () => {
      console.log("This is NOT the main module");
    },
  };
}
