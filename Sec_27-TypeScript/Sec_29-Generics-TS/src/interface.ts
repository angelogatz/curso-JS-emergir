type Action<T = string> = {
    action: T
}

const step: Action<number> = {
    action: 0
}

step.action = 20

const step2: Action<boolean> = {
    action:true
}

console.log(step)
console.log(step2)

const step3: Action = {
    action: "string"
}

console.log(step3)

type numberOrString = number | string

interface ActionI<T extends numberOrString = string, U = number> {
    action: T,
    timestamp: U
}

const step4: ActionI = {
    action: "delete",
    timestamp: 123
}

const historyAction : Array<ActionI> = []

const addAction = <T extends ActionI & {id: number}>(obj:T) => {
    // const addAction = <T extends {action: string, timestamp: number, id: number}>(obj:T) => {
    console.log("addaction")
    console.log(obj)
    const result = {
        ...obj,
        _id: obj.id + "_" + obj.timestamp
    }
    historyAction.push(result)
}

addAction({
    action: "delete",
    timestamp: 123456,
    teste: "olá",
    id: 123
})



console.log(historyAction)
export default "teste"