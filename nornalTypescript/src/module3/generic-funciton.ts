// Arrow Function
const createArray = (param: string): Array<string> => {
    return [param]
}

function createArray1<T>(param: T): Array<T> {
  return [param];
};

const createArray2 = <X, Y> (parem1: X, parem2: Y): [X, Y] => {
    return [parem1, parem2];
}



const result1 = createArray('hi');

const result2 = createArray1<string>('bye')

interface IBD<T, U> {
  name: T;
  value: U;
}

const result3 = createArray1<IBD<string, boolean>>({ name: 'bangladesh', value: true })

interface Imine<X, Y, Z>{
    name: X,
    age: Y,
    home: Z
}

const result4 = createArray2<string, Array<string>>('shamim', ['reza','miii']);

const result5 = createArray2<IBD<string, boolean>, Imine<string, number, boolean>>({ name: 'none', value: true }, { name: 'shamim', age: 22, home: false });




// Spread Operator

// const myInfo = {
//     name: 'shamim',
//     age: 24,
//     salary: 0
// }

// // const newData = { ...myInfo, crush }

// const addMeToMyCrush = <T>(myInfo: T) => { 
//     const crush = "Allah";
//     const newData = { ...myInfo, crush };
//     return newData;
// }


// const result6 = addMeToMyCrush(myInfo)