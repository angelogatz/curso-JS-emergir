function fn(cb){
    console.log("executar ação de call back")
    console.log(typeof cb)
    typeof cb === "function" && cb()
}

function callBack() {
    console.log("função passada por parâmetro")
}
fn(callBack)

const obj = {
    callBack
}

obj.callBack()

function fn2(n1){
    return function(n2){
        return n1 * n2
    }
    
}


const funcao2 = fn2(10)
const mult = funcao2(2)

console.log(mult)

function fn3(){
    fn3.count++
    return function _fn3(){
        console.log("função retornada por parâmetro")
    }
}
fn3.count = 0

const funcao3 = fn3()
const funcao3a = fn3()
const funcao3b = fn3()
const funcao3c = fn3()
funcao3()
console.log(fn3.count)


