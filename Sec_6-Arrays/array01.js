//every retorna false se pelomenos uma variavel da array for false
//some retonra true se pelomenos uma variaveis da array for true


const arr = [1, 5, 10, "olá", true]

let soNumeros = arr.some( function(el) {
    return typeof el === "number" && el > 20
})

let arr1 = arr.filter(function(elemento, indice, _propria_arr){
    return typeof elemento === "number" && elemento < 8
})

arr.forEach(function(elemento, indice, _propria_arr){
    console.log(elemento)
    
})

arr1 = arr1.map(function(elemento, indice, _propria_arr){
    return elemento * elemento
})

console.log(arr)
console.log(arr1)
