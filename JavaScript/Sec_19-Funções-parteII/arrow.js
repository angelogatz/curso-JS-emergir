function teste(str){
  
    return "fn expression - " + str
}




const testeArrow = (str) => "fn arrow - " + str

const testeArrow2 = () => ({
        foo: "bar"
    })

const t1 = testeArrow("parametro para arrow function")
console.log(t1)

const t2 = testeArrow2()
console.log(t2)
console.log(t2.foo)
console.log(t2["foo"])