const testEvent1 = document.querySelector("#testEvent") as HTMLElement
const testEvent2 = document.querySelector("#testEvent2") as HTMLElement
const testEvent3 = document.querySelector("#testEvent3") as HTMLElement

type EventFire = (this: HTMLElement | Document, e: MouseEvent) => void

const eventFire: EventFire = function (evt: MouseEvent){
    // console.log("eventFire")
    // console.log(evt)
    // console.log(this)
    const currentTarget = evt.currentTarget as HTMLElement
    const qntd = this.querySelector("span") as HTMLSpanElement
    const n = parseInt(qntd.textContent || "0")
    qntd.textContent = (n + 1).toString()

    if(this !== testEvent2 && this !== document){
        const event = new Event("customclick")
        testEvent2.dispatchEvent(event)

        const event2 = new CustomEvent("customClick", { detail: n + 1 })
        testEvent3.dispatchEvent(event)
    }

    
}

testEvent1.addEventListener("click", eventFire)
testEvent2.addEventListener("customClick", eventFire as EventListener)
testEvent3.addEventListener("click", function(e){
    console.log(e)
})
// document.addEventListener("click", eventFire)