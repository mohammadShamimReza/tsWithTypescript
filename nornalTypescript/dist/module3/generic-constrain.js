"use strict";
const myInfo = {
    name: 'shamim',
    age: 24,
    salary: 0,
    learn: false
};
// const newData = { ...myInfo, crush }
const addMeToMyCrush = (myInfo) => {
    const crush = "Allah";
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
};
const result6 = addMeToMyCrush(myInfo);
