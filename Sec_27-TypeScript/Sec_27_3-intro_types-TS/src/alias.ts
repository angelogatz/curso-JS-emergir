function add2(x: number, y?: number){
    if(y === undefined){
        return null
    }
    return x + y
}

const teste2 = add2(10)


type testeAlias = number | string | boolean

let teste3: testeAlias
teste3 = 10
teste3 = "teste 3"

teste3 = true

let teste4: testeAlias
teste4 = 10

type userAttributes = {
    nome: string,
    idade?: number | null
} 

const angelo: userAttributes = {
    nome: "Angelo",
    idade: 25
}

const maria: userAttributes = {
    nome: "maria",
    idade: 40
}


type Sizes = "12" | "16" | "24"

const small: Sizes = "12"

export default 1