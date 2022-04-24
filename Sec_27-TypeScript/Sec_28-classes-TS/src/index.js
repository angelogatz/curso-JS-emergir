"use strict";
console.log("__________________________");
// class Animal {
//     categoria: string
//     constructor(categoria: string){
//         this.categoria = categoria
//     }
// }
//mais curta
class Animal {
    constructor(categoria) {
        this.categoria = categoria;
    }
    mostrarCategoria() {
        console.log(`A categoria é: ${this.categoria}`);
    }
}
class gato extends Animal {
    constructor(nome) {
        super("mamífero");
        this.nome = nome;
    }
    mostrarDetalhes() {
        console.log(this.nome, this.categoria);
    }
}
class cachorro extends Animal {
    constructor(_nome) {
        super("mamífero");
        this._nome = _nome;
    }
    get nome() {
        console.log("get chamado");
        return this._nome;
    }
    set nome(n) {
        console.log("set chamado");
        this._nome = n;
    }
    mostrarDetalhe() {
        console.log(this._nome + " é um " + this.categoria);
    }
}
// const animal = new Animal("mamífero")
// console.log(animal)
// animal.mostrarCategoria()
//animal.categoria = "categoria editada fora da classe"
// console.log(animal)
const mingau = new gato("mingau");
mingau.mostrarDetalhes();
//mingau.nome = "nome alterado"
const toto = new cachorro("toto");
toto.nome = "novo nome do toto";
console.log("toto.nome: ", toto.nome);
toto.mostrarDetalhe();
toto.mostrarCategoria();
class Cliente {
    constructor() {
        this._listaAnimais = [];
        this._tempListaAnimais = [];
    }
    addAnimais(...animais) {
        this._listaAnimais.push(...animais);
        this._tempListaAnimais.length = 0;
    }
    get listaAnimais() {
        return [...this._listaAnimais];
    }
}
const angelo = new Cliente();
angelo.addAnimais(toto, mingau);
angelo.listaAnimais.length = 0;
console.log(angelo);
