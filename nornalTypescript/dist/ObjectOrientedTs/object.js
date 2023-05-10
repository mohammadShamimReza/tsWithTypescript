"use strict";
class Animal {
    //    public name: string;
    //    public species: string;
    //    public sound: string;
    // peramiter properties
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
        // this.name = name;
        // this.species = species;
        // this.sound = sound;
    }
    makeSound() {
        console.log(`The${this.name} say ${this.sound}`);
    }
}
const dog = new Animal('German Shepared', "Dog", "Ghew Ghew");
const cat = new Animal('Persian', "Cat", "mew mew");
dog.makeSound();
cat.makeSound();
