function some(n1, n2){
    if(typeof n1 !== "number" || typeof n2 !== "number"){
        throw Error("Type only numbers")
    }
    return n1 + n2
}

let soma = ""

        try{
            soma = some(3, "a")
        }catch(e){
            console.log("numero inválido")
            console.log(e.message)
        } finally{
            console.log("bloco finally")
        }

        console.log(soma)
        console.log("fim do programa")