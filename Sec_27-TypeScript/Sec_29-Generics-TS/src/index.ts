console.log("__________________________")

// function somaOuConcatena(x:number , y:number){
//     return x + y
// }

function somaOuConcatena(x:number | string , y:number | string){
    return (typeof x ===  "number" && typeof y === "number") ? x + y : x + "" + y
}

somaOuConcatena(1, 2)
somaOuConcatena("1", "2")
somaOuConcatena("1", 2)

type numberOrString = number | string

function somaOuConcatenaG<T extends numberOrString>(x: T , y: T){
    return (typeof x ===  "number" && typeof y === "number") ? x + y : x + "" + y
}

somaOuConcatenaG(1,2)
somaOuConcatenaG("1","2")
somaOuConcatenaG("1",2)
somaOuConcatenaG(false, true)