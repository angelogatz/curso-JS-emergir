let tipo = ""
//const tiposPermitidos = {"mamifero": true, "anfibeo": true, "viviparo": true}
const tiposPermitidos = ["mamifero", "anfibeo", "viviparo"]

const cachorro = {
    name: "rex",
    get tipo(){
        return tipo
    },
    set tipo(_tipo){
        //if(tiposPermitidos[_tipo]){ //padrão objeto
        if(tiposPermitidos.indexOf(_tipo) >= 0){  //padrão array
            tipo = _tipo
        }
            
        
        
    }
}

//IFE PARA EVITAR SUJAR ESCOPO GLOBAL

(function(){
    let tipo = ""
    //const tiposPermitidos = {"mamifero": true, "anfibeo": true, "viviparo": true}
    const tiposPermitidos = ["mamifero", "anfibeo", "viviparo"]

    const gato = {
    name: "rex",
        get tipo(){
            return tipo
        },
        set tipo(_tipo){
            //if(tiposPermitidos[_tipo]){ //padrão objeto
            if(tiposPermitidos.indexOf(_tipo) >= 0){  //padrão array
                tipo = _tipo
            }
                
            
            
        }
    }
    window.gato = gato
})()
