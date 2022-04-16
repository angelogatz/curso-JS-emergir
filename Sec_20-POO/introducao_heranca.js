function Animal(tipo){
    if(tipo) this.tipo = tipo
}


Animal.prototype.obterTipo = function(){
    return this.tipo
}

Animal.prototype.tipo = "desconhecido"

function Cachorro(nome, tipo){
    this.nome = nome
    Animal.call(this, tipo)
    this.constructor = Cachorro
}

Cachorro.prototype = new Animal()

let rex = new Cachorro("rex", "mamífero")
console.log(rex)

for (let prop in rex){
    if(rex.hasOwnProperty(prop))
    console.log(prop)
}
