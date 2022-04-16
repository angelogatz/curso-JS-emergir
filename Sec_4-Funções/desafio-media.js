(function(){
    function calcularMedia(){
        let total = 0;
        let qtd = arguments.length;

        for (let i = 0; i < qtd; i++){
            if(typeof arguments[i] !== "number"){
                throw Error("Digite um numero válido")
            }
            total += arguments[i]
        }
        return (total / qtd) || 0
    }

    const media = calcularMedia()
    console.log(media)
})()
    