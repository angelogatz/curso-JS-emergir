function getRandomNumber(inicio = 1, fim = 5, integer = true){
    let r = Math.random() * (fim - inicio + 1)
    return integer ? parseInt(r) : r
 

    
}

console.log(getRandomNumber())