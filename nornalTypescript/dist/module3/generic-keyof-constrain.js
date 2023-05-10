"use strict";
// const a: newType = "name"
// const b: newTypeUsingKeyOf="address"
function getProperty(obj, key) {
    obj[key];
}
const property = getProperty({ name: 'shamim', age: 299 }, 'name');
