(function () {
    const dateEventDom = document.querySelector(".hero-content h1 span").innerText
    getDate(dateEventDom)
    const dateEvent = getDate(dateEventDom)
    console.log(dateEvent)

    const toDay = new Date()

    function getDate(str){
        const [date, hours] = str.split(" ")
        const [day, month, year] = date.split("/")
        const [h, m] = hours.split("H")
        return new Date(year, month - 1, day, h, m)
    }

    let left = dateEvent.getTime() - toDay.getTime()

    const ONE_MINUTE = 60 * 1000
    const ONE_HOUR = 60 * ONE_MINUTE
    const ONE_DAY = 24 * ONE_HOUR

    const daysLeft = parseInt(left / ONE_DAY)
    left = left - daysLeft * ONE_DAY

    const hoursLeft = parseInt(left / ONE_HOUR)
    left = left - hoursLeft * ONE_HOUR

    const minutesLeft = parseInt(left / ONE_MINUTE)
    left = left - minutesLeft * ONE_MINUTE

    const secondsLeft = parseInt(left / 1000)

    addLeftTime(daysLeft, hoursLeft, minutesLeft, secondsLeft)

    function addLeftTime(d, h, m, s){
        const p = document.createElement("p")
        p.textContent = `contagem regressiva: ${d} Dias, ${h} Horas, ${m} Minutos, ${s} Segundos`
        const div = document.querySelector(".hero-content")
        div.appendChild(p)
    }
    

    

})()