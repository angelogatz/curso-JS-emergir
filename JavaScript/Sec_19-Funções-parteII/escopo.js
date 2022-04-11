const str = "global string"

function teste(str){
    console.log("------------------------------------------- this de teste")
    console.log(this)
    console.log(str)

    console.log("-------------------------------------------")
    setTimeout(() => {
        console.log("-------------------------------------------")
        console.log(this)
    }, 5000);
}

const teste2 = () => {
    console.log("arrow fn")
    console.log(this)
}

teste2()

//teste("parametro")
const obj = {
    foo: "bar",
    teste,
    teste2
}

obj.teste()
//obj.teste2()