function sum(){

    const numbers = [...arguments]
    return numbers.reduce(function(sum, atual){
        return sum + atual
    })
}

function average(){
    return sum(...arguments) / arguments.length
}

let soma = sum(1, 2, 3, 4, 5)
console.log(soma)

let media = average(1, 2, 3, 4, 5)
console.log(media)