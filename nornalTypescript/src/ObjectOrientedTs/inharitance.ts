
class Person {
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

class Student extends Person {
   
    constructor(name: string, age: number, address: string) {
        super(name, age, address);
     
    }

}

const student1 = new Student('Mr.X', 22, 'Uganda');


class Teacher extends Person {
 
    designation: string; // different properties


    constructor(name: string, age: number, address: string, desigantion: string) {
       super(name, age, address,);
        this.designation = desigantion;
    }
    takeClassed(classNumber: number): string {         // different methods
        return `This is ${this.name} will take ${classNumber}`
    }
    
}

const teacher1 = new Teacher('sajib', 34, 'bosnia', 'sargent');
const techRes = teacher1.takeClassed(30)