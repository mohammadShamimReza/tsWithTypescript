"use strict";
var _a, _b;
const age = 22;
if (age >= 18) {
    console.log('yes');
}
else {
    console.log('no');
}
const isAdult = age >= 18 ? 'yes' : 'no';
console.log(isAdult);
const isAuthenticatedUser = null;
const userName = isAuthenticatedUser !== null && isAuthenticatedUser !== void 0 ? isAuthenticatedUser : 'gaust';
console.log(userName);
const manus1 = {
    name: 'ahsmim',
    age: 18,
    address: {
        city: 'no city',
        road: 'no road'
    }
};
const home = (_b = (_a = manus1 === null || manus1 === void 0 ? void 0 : manus1.address) === null || _a === void 0 ? void 0 : _a.home) !== null && _b !== void 0 ? _b : 'no home';
console.log({ home });
