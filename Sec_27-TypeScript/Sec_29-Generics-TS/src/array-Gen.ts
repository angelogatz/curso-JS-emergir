type arrayUniqueTypes<T> = T[]

const teste : arrayUniqueTypes<string> = ["ola", "mundo"]
const teste2 : arrayUniqueTypes<number | boolean> = [22, 56, true]

const arrNumber : number[] = [1, 2, 3, 4]
const arrNumber2 : Array<number> = [1, 2, 3, 4, "5"]