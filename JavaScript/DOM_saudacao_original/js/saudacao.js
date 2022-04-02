(function(){
    const nomeUsuario = prompt("Digite seu nome")
    //document.querySelector("p").textContent += nomeUsuario
    const trocaNome = document.querySelector(".top-bar p")
    
    if(nomeUsuario){
        trocaNome.textContent += nomeUsuario
    } else {
        //trocaNome.parentElement.style.display = "none"
        //trocaNome.parentElement.remove()      - // NAO FUNCIONA EM INTERNET EXPLORER
        const removendoElemento = trocaNome.parentElement
        removendoElemento.parentElement.removeChild(removendoElemento)
    }

    
    
})()