;(function(){
    let _quantidade = 0
    let _contador = 0

    this.produto = {
        get quantidade(){
            console.log(`quantidade foi consultada ${++_contador} vez${_contador > 1 ? 'es' : ''}`)
            return _quantidade
        },
        set quantidade(valor){
            if(valor > 0){
                _quantidade = valor
            }
        }
    }
})()

produto.quantidade = 200
console.log(produto.quantidade)

produto.quantidade = 210
console.log(produto.quantidade)

produto.quantidade = 235
console.log(produto.quantidade)