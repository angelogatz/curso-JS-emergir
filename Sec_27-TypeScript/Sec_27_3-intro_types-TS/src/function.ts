function add(x: number, y: number): number {
    return x + y
}


type user = {
    name: string
    id: number
}

type LevelAdmin = "teacher" | "coordenator" | "manager"

type Admin = {
    isAdmin: true,
    level: LevelAdmin
}

type userAdmin = user & Admin

let angelo: userAdmin = {
    name: "angelo",
    id: 0,
    isAdmin: true,
    level: "coordenator"
}

type IsAdmin = (user: user) => boolean

const isAdmin: IsAdmin = (user) => !!(user as userAdmin).isAdmin

console.log(isAdmin(angelo))

let maria: user = {
    name: "maria",
    id: 1
}

console.log(isAdmin(maria))

export default 2