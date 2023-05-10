"use strict";
const getNum = function (fn) {
    fn('shamim');
};
function print(x) {
    console.log(x);
}
getNum(print);
function add(num1, num2) {
    return num1 + num2;
}
add(2, '2');
const arr = [1, 2, 3, 4, 5];
const newArr = arr.map((elem) => elem * elem);
const person = {
    name: 'shamim',
    balance: 400,
    addBalance(money) {
        return `My new balance is ${this.balance + money}`;
    }
};
person.addBalance(500);
function doSomething(fn) {
    console.log(fn.description + 'returned' + fn(6, 'thii'));
}
function myFunc(someArg) {
    return someArg > 3;
}
myFunc.description = 'default description';
doSomething(myFunc);
function returnSomething(fn) {
    console.log(`this is ${fn.res} with ${fn("45", "346")}`);
}
// function postFunction(perm1: number, perm2: number): number { 
//     return perm1 + perm2;
// }
function postFunction2(perm3, perm4) {
    return perm3;
}
// 
// postFunction.res = 'this is res'
postFunction2.res = "this is res2";
// returnSomething(postFunction)
returnSomething(postFunction2);
