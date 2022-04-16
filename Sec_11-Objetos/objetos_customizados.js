
//function changeName(name){
//
//    console.log(this)
//    
//}

const changeName = name =>{
    console.log(this)
}

changeName("fora de objeto")


const task1 = {
    nome: "task1",
    createdAt: new Date(),
    updatedAt: null,
    completed: false,
    changeName: changeName()
}

const task2 = {
    nome: "task2",
    createdAt: new Date(),
    updatedAt: null,
    completed: false
}


task1.name = "task 1 updated"
task1.updatedAt = new Date()

task1.changeName()

//console.log(task1)
//console.log(task2)