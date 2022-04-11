;(function(){

    let strs = []
    

    this.Pessoa = {

        get usuarios(){
            return [...strs]
        },
        get usuario(){
            if(strs.length){
                return strs[strs.length -1]
            }
        },
        set usuarios(_strs){
            if(strs.indexOf(_strs) < 0){  //padrão array
                strs.push(_strs)
            }
        }
    }
})()

