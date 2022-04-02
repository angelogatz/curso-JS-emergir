const emailText = document.getElementById("txtEmail")
const feedBack = document.querySelector("#newsletterFeedback")



function envio(){
    let email = emailText.value

    feedBack.innerHTML = `Obrigado por inscrever ${email}`
        
}


