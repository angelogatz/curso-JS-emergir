function Animal(tipo){
    if(tipo) this.tipo = tipo
}

let dog = new Animal("mamífero")
let cat = new Animal("mamífero")
let snake = new Animal("réptil")
let fish = new Animal()

let arr = new Array(1, 2, 3)

Animal.prototype.obterTipo = function(){
    return this.tipo
}

Animal.prototype.tipo = "desconhecido"

console.log(fish.tipo)

