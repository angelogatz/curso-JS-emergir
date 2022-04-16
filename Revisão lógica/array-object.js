const nomes = ["daniel", "maria", ""]
const pessoa = {nome:"", idade: 12, email: ""}



const pessoas = [{
    nome: "angelo",
    idade: 26
}, {
    nome: "maria",
    idade: 54

}, {
    nome: "carlos",
    idade: 33

}, {
    nome: "miguel",
    idade: 12

}]

for (let i = 0; i < pessoas.length; i++){
    console.log(`${pessoas[i].nome} tem ${pessoas[i].idade} anos`)
}

