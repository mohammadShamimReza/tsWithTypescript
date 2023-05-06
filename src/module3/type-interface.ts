type User = {
    name: string;
    age: number;
}

interface IUser {
    name: string;
    age: number;
}

// const userWithTypeAlias: User = {
//     name: 'type alias',
//     age: 155
// }

// userWithTypeAlias.name

// const userWithInterfaces: IUser = {
//     name: "interface",
//     age: 155
// }

// userWithInterfaces.age


type TypeExtendedUser = User & {
    role: string;
}


const typeExtenduser: TypeExtendedUser = {
    name: "extend user",
    age: 23,
    role: "extend user"
}

interface IextendedUser extends IUser {
    role: string;
}


const extendUser: IextendedUser = {
    name: 'extended user',
    age: 5555,
    role: 'this is role'
};


type RollNumberType = number[]

interface IRollNumber {
    [index: number]: number;
}

const rollNumbers: IRollNumber = [1, 4, 5, 6];


type addNumbersType = (num1: number, num2: number) => number;
interface IaddNumbers {
    (num1: number, num2: number) : number
}


const addNumbers: IaddNumbers = (num1, num2) => num1 + num2



function getArrayItem<T, K extends keyof T>(
  arr: T[],
  index: number,
  key: K
): T[K] {
  const item = arr[index];

  return item[key];
}

const users = [
  { name: "John", age: 30 },
  { name: "Mary", age: 25 },
];
const res =  users[0]['name']

console.log(getArrayItem(users, 0, "name"));