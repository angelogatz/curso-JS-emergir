function Cachorro(name){
    let posicao = 0
    this.name = name
    this.latir = function(){
        console.log(this.name, "esta latindo")
    }

    this.andar = function(distancia){
        posicao += distancia
        console.log(this.name, " andou ", distancia, "m")
        console.log("a posição atual é: ", posicao, "m")
    }
}
const rex = new Cachorro("rex")
const toto = new Cachorro("totó")
console.log(rex)
rex.latir()
rex.andar(5)
rex.andar(15)
toto.andar(3)

const laica = new Cachorro("laica")

laica.andar(6)