import { AlunoModel } from "./../Models/Aluno.Model.js"

export class AlunosService{
    constructor(){
        this.alunos = []
        this.upDateListAlunosFromLocalStorage()
    }

    add(aluno){
        if(!aluno instanceof AlunoModel){
            throw TypeError("aluno must be a instace of 'AlunoModel'")
        }
        this.alunos.push(aluno)
        this.upDateLocalStorage()
    }

    edit(aluno){
        aluno.generateAvarege()
        this.upDateLocalStorage()
    }

    search(name){
        return this.alunos.filter( aluno => aluno.nome.indexOf(name) >= 0)
    }

    searchById(id){
        return this.alunos.find(aluno => aluno._id === id)
    }

    upDateLocalStorage(){
        const alunos = JSON.stringify(this.alunos)
        localStorage.setItem("alunos", alunos)
    }

    upDateListAlunosFromLocalStorage(){
        const local = localStorage.getItem("alunos")
        if(local){
            const alunos = JSON.parse(local)
            alunos.forEach( aluno => {
                this.add(new AlunoModel(aluno))
            })
        }
    }
}