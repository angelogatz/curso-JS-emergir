const fs = require("fs")
const emoji = require("node-emoji")
const teste = require("./Modules/modi1")
console.log(teste)
fs.writeFile("teste.txt", "ola mundo", err => {
    if(err) throw err
    console.log("Saved", emoji.get("coffee"))
})