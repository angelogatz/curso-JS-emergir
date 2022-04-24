import axios, { AxiosResponse } from 'axios'

export type responseUser = { name: string, id: number, email: string }

axios.get <Array<responseUser>>("http://localhost:3001/users/").then( (response) => {
    console.log("-----------responde data-----------")
    const resposta = response.data
    console.log(resposta)
})

const maria: responseUser = {name: "maria", id: 2, email: "mariaa@gmail.com"}

axios.post<responseUser>("http://localhost:3001/users", {name:"gatz", "email": "gatzc@gmail.com"}).then((response)=>{
    console.log(response.data.id)
})

const getUser = (id: number):Promise<AxiosResponse<responseUser>> => {
    return axios.get("http://localhost:3001/users/" + id)
}
console.log("getUser(1)")
getUser(1).then(({data}) => console.log(data.name))