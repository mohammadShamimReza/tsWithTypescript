// // for create abstraction use interface or abstraction class 

// // interface Ivehicle{
// //     name: string;
// //     model: string;

// // }



// // const vehicle: Ivehicle = {
// //     name: 'Car',
// //     model: '2000'
// // }


interface Vehicle {
    startEngine(): void
    stopEngine(): void
    move?(): void
}

class Car implements Vehicle {
    constructor(
        public name: string,
        public brand: string,
        public model: number
    ) {
        
    }
    startEngine(): void {
        console.log('implementing')
    }
    stopEngine(): void {
        console.log('stoping')
    }
    // move(): void {
    //     console.log('moving')
    // }
   
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

