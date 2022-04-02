const teste = function(cb){
    console.log("função teste")
    console.log(cb)
    if(typeof cb === "function"){
        cb(50)
    }
    
}

const fn = function(param) {
    console.log("função anonima de callback")
    console.log(param)
}
//fn(30)

teste()
    
