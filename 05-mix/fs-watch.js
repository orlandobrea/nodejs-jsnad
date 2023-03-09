const fs = require("node:fs");

const listen = (eventType, fileName) => {
  fs.lstat(fileName, (err, stat) => {
    if (stat.birthtimeMs != stat.ctimeMs) {
      console.log("Changed", fileName)
    } else {
      console.log("Created", fileName)
    }
    // console.log(stat)
  })
}

fs.watch(".", listen)
