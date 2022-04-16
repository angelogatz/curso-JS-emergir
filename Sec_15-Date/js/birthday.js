function quantoFaltaPara(m, d) {

    const dataAtual = new Date()
    dataAtual.setHours(0)
    dataAtual.setMinutes(0)
    dataAtual.setSeconds(0)
    dataAtual.setMilliseconds(0)

    let anoAtual = dataAtual.getFullYear()

    const dataNiver = new Date(anoAtual, m - 1, d)

    const dataAtualTs = +dataAtual
    const dataNiverTs = +dataNiver

    if(dataNiverTs < dataAtualTs){
        dataNiver.setFullYear(++anoAtual)
        dataNiverTs = +dataNiver
    }

    const UM_DIA = 24 * 60 * 60 * 1000
    const diferenca = dataNiverTs - dataAtualTs
    return (diferenca / UM_DIA)

    
}


