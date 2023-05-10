"use strict";
const typeExtenduser = {
    name: "extend user",
    age: 23,
    role: "extend user"
};
const extendUser = {
    name: 'extended user',
    age: 5555,
    role: 'this is role'
};
const rollNumbers = [1, 4, 5, 6];
const addNumbers = (num1, num2) => num1 + num2;
function getArrayItem(arr, index, key) {
    const item = arr[index];
    return item[key];
}
const users = [
    { name: "John", age: 30 },
    { name: "Mary", age: 25 },
];
const res = users[0]['name'];
console.log(getArrayItem(users, 0, "name"));
