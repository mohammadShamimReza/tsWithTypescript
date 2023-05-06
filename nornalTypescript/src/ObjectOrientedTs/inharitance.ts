
class Parent {
  name: string;
  age: number;
  address: string;
  constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
  }
  makeSleep(hours: number, minutes: number): string {
    return `This is ${this.name} sleep ${hours}, ${minutes}`;
  }
}

class Student {
    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    makeSleep(hours: number, minutes: number): string {
        return   `This is ${this.name} sleep ${hours}, ${minutes}`
    }
}

class Teacher {
    name: string;
    age: number;
    address: string;
    designation: string; // different properties


    constructor(name: string, age: number, address: string, desigantion: string) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.designation = desigantion;
    }
    takeClassed(classNumber: number): string {         // different methods
        return `This is ${this.name} will take ${classNumber}`
    }
    makeSleep(hours: number, minutes: number): string { 
        return `This is ${this.name} sleep ${hours}, ${minutes}`
    }
}