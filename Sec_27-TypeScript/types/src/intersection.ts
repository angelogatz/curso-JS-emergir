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

export default 1