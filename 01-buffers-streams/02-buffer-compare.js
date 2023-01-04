const str1 = "Hello A";
const str2 = "Hello A1";
const str3 = "Hello A";

const buff1 = Buffer.from(str1);
const buff2 = Buffer.from(str2);
const buff3 = Buffer.from(str3);

const comp1_2 = Buffer.compare(buff1, buff2);
const comp1_3 = Buffer.compare(buff1, buff3);
const comp2_3 = Buffer.compare(buff2, buff3);

console.log(`Buff1(${str1}) < Buff 2 (${str2}) Result: ${comp1_2}`);
console.log(`Buff1(${str1}) = Buff3(${str3}) Result: ${comp1_3}`);
console.log(`Buff2(${str2}) > Buff3(${str3})  Result: ${comp2_3}`);
