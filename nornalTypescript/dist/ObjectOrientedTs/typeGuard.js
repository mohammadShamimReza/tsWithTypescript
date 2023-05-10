"use strict";
// // key of guard
// type alphanumeric = string | number;
// function add(param1:alphanumeric, param2:alphanumeric): alphanumeric {
//     if (typeof param1 === 'string' && typeof param2 === 'string') {
//         return param1 + param2;
//     }
//     else {
//         return param1.toString() + param2.toString();
//     }
// }
// add('1', '3');
// add(5, 2)
// // in guard 
// interface INormalTYpe {
//     name: string;
// }
// interface IAdminUserType {
//     name: string;
//     role: 'admin'
// }
// function getUser(user: INormalTYpe | IAdminUserType) {
//     if ('role' in user) { 
//         return `I am a admin and my role is ${user.role}`;
//     }
//     else {
//         return "I am a normal user and my role is none"
//     }
// }
// const normalUser: INormalTYpe = {name: 'Mr.shaim'}
// const adminUser: IAdminUserType = { name: 'Mr.sam', role: 'admin' }
// console.log(normalUser);
// console.log(adminUser)
// // instanceof guard
// class Animal1 {
//     name: string;
//     species: string;
//     constructor(name: string, species: string) {
//         this.name = name;
//         this.species = species;
//     }
//     makeSound() {
//         console.log('I am making sound')
//     }
// }
// class Dog extends Animal1 { 
//     constructor(name: string, species: string) {
//         super(name, species);
//     }
//     makeBark() {
//         console.log('I am barking')
//     }
// }
// class Cat extends Animal1 {
//   constructor(name: string, species: string) {
//     super(name, species);
//   }
//     makeMeaw(){
//         console.log('I am meawing')
//     }
// }
// function isDog(animal: Animal1): animal is Dog {
//     return animal instanceof Dog
// }
// function isCat(animal: Animal1): animal is Cat {
//   return animal instanceof Cat;
// }
// function getAnimal(animal: Animal1) {
//     if (isDog(animal)) {
//       animal.makeBark();
//     }
//    else if (isCat(animal)) {
//       animal.makeMeaw();
//     }
//     else {
//         animal.makeSound();
//     }
// }
// const animal1 = new Dog('tommy', 'dog'); // instance of Dog
// const animal2 = new Cat('pussh', 'cat'); // instance of Cat
// getAnimal(animal2)
