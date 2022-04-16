function Task(name){

    let _name = name
    this.createdAt = new Date()
    this.updatedAt = null,
    this.changeName = function(newName){
        if(newName){
            _name = newName
            this.updatedAt = new Date()
        }
        
    }
    this.getName = function(){
        return _name
    }
}

const task1 = new Task("minha tarefa")
task1.changeName("minha tarefa atualizada")
console.log(task1)
console.log(task1.getName())

task1.changeName()
console.log(task1.getName())

const task2 = new Task("minha segunda tarefa")

console.log(task2)