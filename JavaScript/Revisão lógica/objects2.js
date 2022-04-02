const pessoa = {
    nome:"maria",
    idade: 22,
    email: "email@email.com"
}


console.log(pessoa)

for (let prop in pessoa) {
    console.log(prop)
    console.log(pessoa[prop])
}
