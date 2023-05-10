const getNum = function (fn:(x: string) => void) {
    fn('shamim')
}

function print(x: string) { 

    console.log(x)
}

getNum(print)


function add(num1: number, num2: string) {
    return num1 + num2
}

add(2, '2')

const arr = [1, 2, 3, 4, 5]

const newArr = arr.map((elem: number) => elem * elem)

const person: {
    name: string,
    balance: number,
    addBalance(money: number) : string
} = {
    name: 'shamim',
    balance: 400,
    addBalance(money: number): string {
        return `My new balance is ${this.balance + money}`; 
    }
}

person.addBalance(500)


type DescribableFunction = {
    description: string,
    (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
    console.log(fn.description + 'returned' + fn(6))
}

function myFunc(someArg: number) {
    return someArg > 3
}

myFunc.description = 'default description'

doSomething(myFunc)



type callSignature = {
    res: string;
    // (perm1: number, perm2: number): number;
    (perm3: string, perm4: string): string;

}

function returnSomething(fn: callSignature): void {
    console.log(`this is ${fn.res} with ${fn("45", "346")}`)
}

// function postFunction(perm1: number, perm2: number): number { 
//     return perm1 + perm2;
// }

function postFunction2(perm3: string, perm4: string): string {
  return perm3 + perm4;
}

// 
// postFunction.res = 'this is res'
postFunction2.res = "this is res2";



// returnSomething(postFunction)
returnSomething(postFunction2);
