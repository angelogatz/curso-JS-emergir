let idade = 22;
let paisPresentes = false;
let comprouPassagem = true;
const podeViajar = (idade >= 18 || paisPresentes) && comprouPassagem;

console.log(`Pode Viajar: ${podeViajar}`);

//let msgMaiorIdade = ""
//if(idade >= 18){
//    msgMaiorIdade = "É maior de idade"
//} else {
//    msgMaiorIdade = "É maior de idade"
//}

let msgMaiorIdade = (idade >= 18) ? "É maior de idade" : "É menor de idade"

let n1 = 6;
let n2 = 0;
let media = (n1 + n2) / 2;

console.log(media);

//ESTRUTURA CONDICIONAL IF - ELSE

if(!comprouPassagem){
    console.log("sim comprou a passagem");
} else {
    console.log(msgMaiorIdade);
}  


if(n1 === 0 || n2 === 0){
    console.log("Reprovado!")
} else if(media < 7) {
    console.log("Recuperação")
} else {
    console.log("APROVADO!")
}
