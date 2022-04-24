export abstract class Animal{
    constructor(protected readonly categoria: string){}

    mostrarCategoria(): void{
        console.log(`A categoria é: ${this.categoria}`)
    }

    abstract mostrarDetalhes():void
    abstract idade: number
}

interface AnimalInterface{
    categoria: string;
    mostrarDetalhes():void;
    idade?: number;
}

const laica: AnimalInterface = {
    categoria: "mamífero",
    mostrarDetalhes(){
        console.log("qualquer coisa")
    }
    
}

console.log(laica)

class Gato extends Animal{
    constructor(public nome: string, public idade: number){
        super("mamífero")
    }
    mostrarDetalhes(): void {
        console.log("mostrar detalhe chamado")
    }
}

interface CachorroInterface {
    latir(): void
}

class cachorro implements AnimalInterface, CachorroInterface{
    constructor(public categoria: string, public readonly nome: string, public idade?: number){}

    mostrarDetalhes(){
        console.log("mostrar detalhes de cachorro")
        console.log(this.nome, this.categoria, (this.idade) ? this.idade + 1: "")
    }

    latir(){
        console.log(this.nome, "Está latindo")
    }
}

const mingau = new Gato("mingau", 5)
console.log(mingau)

const toto = new cachorro("mamífero", "toto")
toto.latir()

interface pessoa {
    name:string
}

interface pessoa {
    idade:number
}

const angelo : pessoa = {
    name: "angelo",
    idade: 25
}

console.log(angelo)

type testeT = number | {qntd: number}

const idade : testeT = {qntd: 1}

type Cores = "red" | "green" | "blue"

const cor : Cores = "green"

type Soma = (x: number, y: number) => number

interface SomaI {
    (x: number, y: number): number
}

const somar: SomaI = (x, y) => x + y
console.log(somar(8, 3))


