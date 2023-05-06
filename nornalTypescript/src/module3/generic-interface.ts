// // Generic Interface

// interface CrushInterface<T, U=object> {
//   name: string;
//   husband: T;
//   wife: U;
// }

// const crush2: CrushInterface<boolean, string> = {
//   name: 'allah',
//   husband: false,
//   wife: 'asdf'
// }

// const crush3: CrushInterface<string, boolean> = {
//   name: 'allah',
//   husband: 'foo',
//   wife: false
// }

// interface HusbandInterface {
//   name: string;
//   me: boolean;
// }

// interface WifeInterface {
//   name: string;
//   age: string;
// }

// const crush4: CrushInterface<HusbandInterface, WifeInterface> = {
//   name: 'allha',
//   husband:{
//     name: "none",
//     me: false
//   }, 
//   wife: {
//     name: 'none',
//     age: 'alse none'
//   }
// } 


// type GenericTuple<X, Y> = [X, Y];

// const relation: GenericTuple<string, string> = ["Allah", "shamim"];

// // type relationWithSalaryType = {
// // name: string,
// // salary: number
// // }

// interface IrelationWithSalaryType {
//   name: string;
//   salary: number;
// }

// const relationWithSalary: GenericTuple<IrelationWithSalaryType, string> = [
//   { name: "shamim", salary: 122 },
//   "allah",
// ];

// type GenericArray<T> = Array<T>;

// const rollNumber: GenericArray<number> = [1, 2, 3, 4, 5];
// const rollNumbers2: GenericArray<string> = ["33", "33", "55"];
// const rollNumbers3: GenericArray<boolean> = [true, false, false, true, false];

// type NameRollType = {
//   name: string;
//   roll: number;
// };

// const userNameAndRollNumber: GenericArray<NameRollType> = [
//   {
//     name: "John",
//     roll: 1,
//   },
//   {
//     name: "sumit",
//     roll: 7,
//   },
// ];
