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

// ES6

class AnimalClass{
    constructor(tipo){
        if(tipo){
            this.tipo = tipo
        }
        
    }

    obterTipo(){
        return this.tipo
    }

    
}
AnimalClass.prototype.tipo = "desconhecido"

let animal = new AnimalClass("anfibio")
let sapo = new AnimalClass()
console.log(animal)
console.log(cat)
console.log(typeof animal)
console.log(typeof cat)
console.log(typeof AnimalClass)
console.log(typeof Animal)
console.log(animal.obterTipo())
console.log(cat.obterTipo())
console.log(typeof AnimalClass.prototype)
console.log(typeof Animal.prototype)