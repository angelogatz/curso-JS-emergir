class pessoa<T> {
    constructor(private nome: T){ }

    setNome(nome: T): void{
        this.nome = nome
    }
}

const angelo =  new pessoa("angelo")
angelo.setNome("angelo gatz")

class List<T>{
    private list: T[] = []

    getFromList(index: number): T | null{
        const len = this.list.length
        if(len === 0) return null
        if(index > len || index < 0) return null
        return this.list[index]
    }

    removeFromList(index: number): T | null{
        const element = this.getFromList(index)
        if(element !== null){
            this.list.splice(index, 1)
            return element
        }
        return null
    }

    addToList(element: T) : this{
        this.list.push(element)
        return this
    }
}

const listPessoas = new List()
listPessoas.addToList(angelo).addToList(new pessoa("Maria")).addToList(new pessoa("Joao"))
console.log(listPessoas)
console.log(listPessoas.removeFromList(1))
console.log(listPessoas)
