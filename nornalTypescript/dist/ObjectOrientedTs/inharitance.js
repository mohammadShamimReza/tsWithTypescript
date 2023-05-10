"use strict";
class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    makeSleep(hours, minutes) {
        return `This is ${this.name} sleep ${hours}, ${minutes}`;
    }
}
class Student extends Person {
    constructor(name, age, address) {
        super(name, age, address);
    }
}
const student1 = new Student('Mr.X', 22, 'Uganda');
class Teacher extends Person {
    constructor(name, age, address, desigantion) {
        super(name, age, address);
        this.designation = desigantion;
    }
    takeClassed(classNumber) {
        return `This is ${this.name} will take ${classNumber}`;
    }
}
const teacher1 = new Teacher('sajib', 34, 'bosnia', 'sargent');
const techRes = teacher1.takeClassed(30);
