(function(){
    const nomeUsuario = prompt("Digite seu nome")

    if(nomeUsuario){
        const addElement = document.createElement("div")
        const parentElement = document.querySelector(".hero")
        addElement.className = "top-bar"
        addElement.innerHTML = `<p>Bem-vindo(a), ${nomeUsuario}</p>`
        parentElement.insertBefore(addElement, parentElement.firstElementChild)
    }
})()