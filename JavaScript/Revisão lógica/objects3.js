const produto = {
    nome: "caneta",
    qntd: 56,
    comprar(n){
        console.log(this)
        if (n > this.qntd){
            return "quantidade não disponível"
        }
        this.qntd -= n
    },
    teste1: function(){
        console.log("teste1")
        console.log(this)
    },
    teste2: () => {
        console.log("teste2")
        console.log(this)
    }
}

produto.comprar(5)
//console.log(produto)

produto.comprar(34)
//console.log(produto)

produto.teste1()
produto.teste2()