//  Notes:
//    * new Buffer is no longer recommended (use Buffer.alloc, Buffer.allocUnsafe, Buffer.from)
//
//  Ways to create a buffer

const helloStr = "A string that will be a buffer later";

const helloBuffer = Buffer.from(helloStr);
console.log(helloBuffer); // bytes
console.log(helloBuffer.toString()); // str

const bufferWithCeroes = Buffer.alloc(10);
console.log(bufferWithCeroes); // 00 00 00 00 00 00 00 00 00 00

