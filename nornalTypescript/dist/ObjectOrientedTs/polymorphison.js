"use strict";
// class Person1 {
//     takeNap(): void {
//         console.log(' I am sleeping eight hours')
//     }
// }
// class Student1 extends Person1 {
//   takeNap(): void {
//     console.log(' I am sleeping ten hours')
//   }
// }
// class Developer extends Person1{
//     takeNap(): void {
//         console.log('I am sleeping five hours')
//     }
// }
// function getNap(param:Person1) {
//     param.takeNap();
// }
// const person1 = new Person1();
// const person2 = new Student1();
// const person3 = new Developer();
// getNap(person1);
// getNap(person2);
// getNap(person3);
// class Shape {
//     getArea(): number {
//         return 0
//     }
// }
// class Circle extends Shape { 
//      radius: number;
//     constructor(radius: number) { 
//         super()
//         this.radius = radius;
//     }
//     getArea(): number { 
//         return Math.PI * this.radius * this.radius
//     }
// }
// class Rectangle extends Shape { 
//     height: number;
//     width: number;
//     constructor(height: number, width: number) {
//         super()
//         this.height = height;
//         this.width = width
//     }
//     getArea(): number {
//         return this.width* this.height
//     }
// }
// function getAreaOfShape(param:Shape) {
//     console.log(param.getArea());
// }
// getAreaOfShape(new Circle(10));
// getAreaOfShape(new Rectangle(3, 4))
