// strungs, numbers (int, floats, booleam)
//undefined, null, symbol


let minhavar = "minha String";
let minhavar2 = 'minha "string" com aspas duplas';
let minhavar3 = 'minha template literal';

let idade = 25;
//let msg = "eu tenho "+ idade +" anos";
let msg = `eu tenho ${idade} anos`;
console.log(msg);
console.log(typeof msg, typeof idade, typeof minhavar, "string qualquer", 56);

const n1 = 10;
const n2 = 1.1;
console.log(`o tipo de n1 é ${typeof n1} e seu valor é ${n1}`);
console.log(`o tipo de n2 é ${typeof n2} e seu valor é ${n2}`);

const isValid = true;
console.log(`isValid: ${isValid}`);

let varTest = null
console.log(varTest);
console.log(typeof varTest);
varTest = 10;
console.log(typeof varTest, varTest);