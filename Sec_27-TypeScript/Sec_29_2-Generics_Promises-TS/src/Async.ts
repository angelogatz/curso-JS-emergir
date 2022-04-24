import axios from 'axios'
import {responseUser} from './index'
async function Fn(): Promise<string>{
    return "uma string qualquer"
}

const fn = Fn()
fn.then(n => console.log("valor de n: " + n))

async function getUser(id:number): Promise<responseUser> {
    try{
        const resposta = await axios.get<responseUser>("http://localhost:3001/users/" + id)
        console.log(resposta.data)
        return resposta.data
    }catch(e){
        throw new Error("Error: " + e)
    }
    
}

getUser(10).then(dado => {
    console.log("dado")
    console.log(dado)
}).catch(e => {
    console.log("deu ruim parça")
    console.log(e.message)
})