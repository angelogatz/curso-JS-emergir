//var name = "daniel"
//let name2 = "daniel 2"

function teste(str, n){
    console.log(this.name)
    //console.log(this.name2)
    console.log(str, n)
}

teste.call({name: "maria"}, "string", 20)
teste.apply({name: "joao"}, ["da silva", 30])
teste.call({name: "joao"}, ...["da silva", 30])

const teste2 = teste.bind({name: "joana"})

teste2("joaquina", 40)
teste("manuela", 12)

document.addEventListener("click", teste2)