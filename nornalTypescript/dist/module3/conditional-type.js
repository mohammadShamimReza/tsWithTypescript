"use strict";
// // a type is dependent on another type
// type a1 = string;
// type a2 = undefined;
// type a3 = number;
// type a4 = a1 extends string ? string : null;
// type a5 = a1 extends number
//   ? null
//   : a2 extends string
//   ? string
//   : a3 extends boolean
//   ? number
//   : a4 extends object
//   ? object
//   : Array<string>;
// // nested conditional type
// // check wife1 is exixt or not
// type Shikh = {
//     wife: string;
//     wife1: string;
// }
// type CheckWife<T, K> = K extends keyof T ? true : false;
// type CheckProperty = CheckWife<Shikh, 'wife5'>
// type Bandori = 'monira' | "racheal" | 'caee';
// type RemoveBandori<T, K> = T extends K ? never : T;
// type CurrentBandori = RemoveBandori<Bandori, 'moniraasdf'>
