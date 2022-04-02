(function(){
    function calcularImc(peso, altura){


        if(peso === undefined || altura === undefined){
            throw Error("Digite um numero válido")
        }


        return ( peso / (altura ** 2)) || 0

        
    }

    const media = parseFloat(calcularImc(75, 1.75))

    const total = media.toFixed(1)

    if(media >= 16 && media <= 16.9){
        console.log(`Seu IMC é ${total} vc está muito abaixo de peso`)

    } else if (total >= 17 && total <= 18.4){
        console.log(`Seu IMC é ${total} vc está abaixo de peso`)

    } else if (total >= 18.5 && total <= 24.9){
        console.log(`Seu IMC é ${total} seu peso é ideal`)

    } else if (total >= 25 && total <= 29.9){
        console.log(`Seu IMC é ${total} acima do peso`)

    } else if (total >= 30 && total <= 34.9){
        console.log(`Seu IMC é ${total} Obesidade Grau I`)

    } else if (total >= 35 && total <= 40){
        console.log(`Seu IMC é ${total} Obesidade Grau II`)

    } else if (total >= 40){
        console.log(`Seu IMC é ${total} Obesidade Grau III`)
        
    } else {
        console.log(`Seu IMC é ${total} Obesidade Grau III`)
    }
})()
    