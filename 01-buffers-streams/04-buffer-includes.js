
const buff1 = Buffer.from("One Two Three");
const buff2 = Buffer.from("Two");
const isBuff2IncludedInBuff1 = buff1.includes(buff2);
console.log(`${buff1} includes ${buff2}? ${isBuff2IncludedInBuff1}`)
