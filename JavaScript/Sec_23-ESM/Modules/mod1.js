import {myMod2} from "./mod2.js"

function myMod1 (){
    console.log("myMod1 executado")
    return "valor retornado de mymod1"
}

export function myMod1_nomeada (){
    return "Função exportada nomeada"
}

export const PI = "Pi: " + Math.PI

export const obj = {
    foo: true,
    bar: "ola mundo"
}

const nome = "angelo"
const idade = "25"

console.log(new myMod2())

export {nome, idade}

export default myMod1
