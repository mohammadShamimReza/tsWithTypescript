"use strict";
// // for create abstraction use interface or abstraction class 
class Car {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    startEngine() {
        console.log('implementing');
    }
    stopEngine() {
        console.log('stoping');
    }
}
const vechicle1 = new Car("Car", "Toyota", 2000);
// abstract class Vechicle {
//       constructor(
//           public name: string,
//           public brand: string,
//           public model: number
//       ) {
//       }
//     abstract  startEngine(): void 
//     abstract stopEngine(): void 
//       move(): void {
//           console.log('moving')
//       }
// }
// class Car extends Vechicle {
//     startEngine(): void {
//         console.log('I am starting')
//     }
//     stopEngine(): void {
//         console.log("I am stopping")
//     }
// }
