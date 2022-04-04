(function(){
    'use strict';


    //validando a entrada de dados no titulo do formulário
    //impedindo que um formulário vazio seja enviado ao servidor/banco de dados
    //fazendo o envio do formulario via listener do tipo "submit", para melhor atender outros navegadores

    const txtTitulo = document.getElementById("txtTitulo")
    const formCad = document.querySelector(".formCadastro")
    

    formCad.addEventListener("submit", function(e){
        console.log(txtTitulo.value)
        if(!txtTitulo.value){
            alert("preencha todos os campos")
            e.preventDefault()
            txtTitulo.focus()
        }
    })

    //validando numero maximo de caracteres da descrição e mostrando no contador
    //utilizando o metodo de eventlistener "input", pois armazena somente oque for escrito no input

    const formDesc = document.getElementById("txtDescricao")
    const contadorContainer = document.getElementById("contador")
    const nrestante = document.getElementsByTagName("span")[0]
    const maxima = formDesc.maxLength
    mostrarNumeros(maxima)

    //contadorContainer.removeAttribute("style")
    contadorContainer.style.display = "block"

    function checkLength(){
        let numeroLetrasDigitadas = this.value.length
        let caracteresRestante = parseInt(maxima) - parseInt(numeroLetrasDigitadas)
        mostrarNumeros(caracteresRestante)
    }
    
    function mostrarNumeros(n){
        nrestante.textContent = n
    }

    formDesc.addEventListener("input", checkLength)
 

    //validando a checkbox e liberando o acesso ao botão em caso de checkbox = "checked"
    
    const checkbox = document.getElementById("chkAceito").checked
    const btnSub = document.getElementById("btn")

    function liberaBtn(){
        btnSub.disabled = !checkbox
    }
    

})()