const buff1 = Buffer.from("One");
const buff2 = Buffer.from("Two");
const concatenated = Buffer.concat([buff1, buff2]);
console.log(concatenated.toString());
