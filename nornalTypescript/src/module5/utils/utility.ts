// Pick

interface Person55 {
    name: string,
    email?: string,
    contactNo: string
}

type Email = Pick<Person55, "email">

type Contact = Pick<Person55, "contactNo" | 'email'>

// Omit

type Name = Omit<Person, "email">

// Partial and Required

// To make all the properties be optional

type Optional = Partial<Person>

type Required2 = Partial<Person>

// Readonly properties

const person66: Readonly<Person55> = {
    name: "John",
    email: "john@example.com",
    contactNo: "example"
}

// type myObj = {
//     a: string;
//     b: string;
//     c: string;
// }

// using index signature

// type myObj = {
//     [key: "a" |"b"| "c"]: string | number
// }

// record utility

type myObj = Record<'a'|'b'|'c'|'d', string>

const obj: myObj = {
    a: "1",
    b: "2",
    c: "3",
    d: "4"
}