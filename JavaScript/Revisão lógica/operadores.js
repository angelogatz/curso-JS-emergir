// + - * / % **

let n1 = 10;
let n2 = 5;

//OPERADORES ARITMÉTICOS
console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
console.log(n1 % n2);
console.log(2 ** 3);

//OPERADORES DE ATRIBUÇÃO
let n3 = 20;

//n3 = n3 + 15;

n3 += 15;
//n3 -= 15;
//n3 *= 15;
//n3 %= 15;
//n3 **= 15;
//n3 /= 15;
console.log(n3)

//OPERADORES DE DECREMENTO
let i = 0;
//i++;
//++i; (resultados iguais prorém:)

console.log(++i);
console.log(i);

//COMPARAÇÃO
/*
igualdade de valor (==)
igualdade de vakir e tipo (===)
comparando <, >, <=, >=
!= valores diferentes
!== valores e tipos diferentes
*/

console.log(n1, n2, n3);

console.log(n1 == "10");
console.log(n1 === "10");
console.log(n1 > "10");
console.log(n1 < "10");
console.log(n1 >= "10");
console.log(n1 <= "10");
console.log(n1 != "10");
console.log(n1 !== "10");


// OPERADORES LÓGICOS

/*
para uma pessoa viajar para o exterior:
   -  precisa ser maior de 18 anos
OU
acompanhado com os pais
E
te comprado a passagem
*/

let idade = 22;
let paisPresentes = true;
let comprouPassagem = false;
const podeViajar = (idade >= 18 || paisPresentes) && comprouPassagem;

console.log(`Pode Viajar: ${podeViajar}`);

console.log(n1, n2, n3);

n1 = 6;
n2 = 8;
let media = (n1 + n2) / 2;

console.log(media);
console.log((3 * 2) ** 2);