const arrayOfNumbers = [1, 2, 3, 4, 5];

const arrayOfStrings = arrayOfNumbers.map(number => {
    number.toString()
});

type Volume = {
    height: number;
    width: string;
    depth: string;
}

type A = Volume["height"]; // look up types
type B = keyof Volume; // 'width' | 'height'


type Area<T> = {
//   [key in keyof Volume]: Volume[key];
 readonly [key in keyof T]: T[key];
};


const Area1: Area<{ name: string }> = {
    name: 'shamim'
}

const Name2: Area<{ name2: boolean, gf: string }> = {
    name2: true,
    gf: 'shamim'
}

type AreaString = {
    height: string;
    width: string;
}

type AreaReadOnly = {
   readonly height: number;
   readonly width: number;
}

const rectangularArea: AreaReadOnly = {
  height: 20,
  width: 50,
};

// const obj = {
//     name: 'shamim'
// }

// obj.name 



interface Person {

  firstName: string;

  lastName: string;

}



function fullName<T extends Person>(person: T): string {

  return `${person.firstName} ${person.lastName}`;

}