type Square = {
    x: number,
    y: number,
    width: number,
    heith: number
}

type PartialSquare = {
    x?: number,
    y?: number,
    width?: number,
    heith?: number
}



type UpdateSquare = (a: Square, b: Partial<Square>) => Square

const square: Square = {
    x: 12,
    y: 20,
    width: 100,
    heith: 200
}

// const square2: PartialSquare = {x: 30}
// square.x = 30

const updateSquare: UpdateSquare = (a, b) => {
    return Object.assign({}, a, b)
}


const square3 = updateSquare(square, {x: 70})
console.log(square)
// console.log(square2)
console.log(square3)

//pick
type Position = Pick<Square, "x" | "y">
const position: Position = {
    x: 20,
    y: 50
}

//omit
type Size = Omit<Square, "x" | "y">
const size: Size = {
    width: 200,
    heith: 300
}

//exclude<T, U>
type SquareColor = "red" | "blue" | "green" | "black" | "white"

type SaturatedColor = Exclude<SquareColor, "black" | "white">

//extract
type SadColor = "black" | "white" | "grey"
type sadSquareColor = Extract<SquareColor, SadColor>
type happySquareColor = Exclude<SquareColor, SadColor>

type User = {
    name: string,
    enail: string,
    id?: number
}

type UserGet = Required<User> 

type UserPatch = Partial<User>

type UserRead = Readonly<User>

//nonNullble
type Cpf = {cpf:string}
type Cnpj = {cnpj:string}

type User2 =  Cpf | Cnpj | null | undefined

const user : NonNullable<User2> = {
    cnpj: "111.222"
}

//Record<T, U>
type Url = {
    url: string
}

type MidiasSociais = "Facebook" | "Instagram" | "Youtube"

const midias: Record<MidiasSociais, Url> = {
    Facebook: {url: "facebook.com"},
    Instagram: {url: "instagram.com"},
    Youtube: {url: "youtube.com"}
}

console.log(midias)

//Conditional Types

type MyString = string
type MyType = MyString extends string ? string : boolean

function MyFunc<T>(param: T extends string ? string : number){

}

MyFunc<boolean>(20)

function MyFunc2<T>(param: T){
    return function(param2: T extends number ? number : MyString){

    }
}

const minhaFunc = MyFunc2("string")


//never:

type NumberOrNever<T> = T extends number ? number : never

const teste : NumberOrNever<number> = 120

//keyOF:

//type OnePropertyOfSquare = "x" | "y" | "width" | "height" 
type OnePropertyOfSquare = keyof Square
let onePropertyOfSquare: OnePropertyOfSquare = "x"

//Mapped Types:
type Props = "x" | "y" | "z"
// type MappedFromProps = {
//     "x": number,
//     "y": number,
//     "z": number,
//     "a": number
// }

type MappedFromProps<T extends string | number | symbol> = {
    [P in T]: number
}

type MyMappedTypes = MappedFromProps<Props>

type MappedFromProps2<T> = {
    readonly [P in keyof T]: T[P] | "eu nao sei"
} 

type teste = MappedFromProps2<{a: boolean, b: "b"}>


//lookup Types

type BankAcount = {
    id: number,
    name: string,
    count: {
        agency: number,
        code: number,
        digit: number
    }
}

type Id = BankAcount["id"]

type Count = BankAcount["count"]

type Digit =  BankAcount["count"]["digit"]

//TypeOf

const MyCount : BankAcount = {
    id: 1,
    name: "angelo",
    count: {
        agency: 111,
        code: 222,
        digit: 333
    }
}

type TypeOfMyCount = typeof MyCount
type TypeOfMyCountId = typeof MyCount.id

let minhaString2 = "olá mundo"
let string2: typeof minhaString2
