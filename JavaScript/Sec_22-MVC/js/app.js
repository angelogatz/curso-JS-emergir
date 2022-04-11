
//calcula média por materia de cada aluno e cria uma propriedade chamada media
alunos.forEach( aluno => {
    aluno.media = {}

    for(let materia in aluno.notas){
        aluno.media[materia] = avarege(...aluno.notas[materia])
        
    }
})


//inserir no thead "nome" e cada uma das materias
const htmlHeader = document.createElement("tr")
htmlHeader.innerHTML = "<td>Nome</td>"


let htmlHeaderMaterias = Object.keys(alunos[0].notas).map(materia => {
    console.log(materia)
    return "<td>" + materia + "</td>"
}).join("")
htmlHeader.innerHTML += htmlHeaderMaterias

document.querySelector("[data-table-alunos] thead").appendChild(htmlHeader)




console.log(htmlHeaderMaterias)