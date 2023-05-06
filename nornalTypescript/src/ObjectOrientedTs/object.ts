class Animal {
    name: string;
    species: string;
    sound: string;
    constructor(name: string, species: string, sound: string) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound() { 
        console.log(`The${this.name} say ${this.sound}`)
    }
}

const dog = new Animal('German Shepared', "Dog", "Ghew Ghew");
const cat = new Animal('Persian', "Cat", "mew mew");

dog.makeSound();
cat.makeSound();