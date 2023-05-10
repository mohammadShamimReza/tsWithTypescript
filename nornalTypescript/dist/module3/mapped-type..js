"use strict";
const arrayOfNumbers = [1, 2, 3, 4, 5];
const arrayOfStrings = arrayOfNumbers.map(number => {
    number.toString();
});
const Area1 = {
    name: 'shamim'
};
const Name2 = {
    name2: true,
    gf: 'shamim'
};
const rectangularArea = {
    height: 20,
    width: 50,
};
function fullName(person) {
    return `${person.firstName} ${person.lastName}`;
}
