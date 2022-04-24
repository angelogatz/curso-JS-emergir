function showFeedBack(mesage: string, type: string): void{
    alert(type.toUpperCase() + " - " + mesage)
}


const feedBack = showFeedBack("ola", "info")

function showError(message: string): never{
    throw new Error("função marcada com never nunca retorna nada")
}

const error = showError("mensagem de erro")