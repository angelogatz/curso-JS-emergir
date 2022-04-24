"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(categoria) {
        this.categoria = categoria;
    }
    mostrarCategoria() {
        console.log(`A categoria é: ${this.categoria}`);
    }
}
exports.Animal = Animal;
const laica = {
    categoria: "mamífero",
    mostrarDetalhes() {
        console.log("qualquer coisa");
    }
};
console.log(laica);
class Gato extends Animal {
    constructor(nome, idade) {
        super("mamífero");
        this.nome = nome;
        this.idade = idade;
    }
    mostrarDetalhes() {
        console.log("mostrar detalhe chamado");
    }
}
class cachorro {
    constructor(categoria, nome, idade) {
        this.categoria = categoria;
        this.nome = nome;
        this.idade = idade;
    }
    mostrarDetalhes() {
        console.log("mostrar detalhes de cachorro");
        console.log(this.nome, this.categoria, (this.idade) ? this.idade + 1 : "");
    }
    latir() {
        console.log(this.nome, "Está latindo");
    }
}
const mingau = new Gato("mingau", 5);
console.log(mingau);
const toto = new cachorro("mamífero", "toto");
toto.latir();
