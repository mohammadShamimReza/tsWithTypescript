const age: number = 22;

if (age >= 18) {
    console.log('yes')
} else {
    console.log('no')
}

const isAdult = age >= 18 ? 'yes' : 'no';

console.log(isAdult);

const isAuthenticatedUser = null;
const userName = isAuthenticatedUser ?? 'gaust'

console.log(userName);

type Manus = {
    name: string;
    age: number;
    address: {
        city: 'no city',
        road: 'no road'
        home?: 'no home'
    }
}

const manus1: Manus = {
    name: 'ahsmim',
    age: 18,
    address: {
        city: 'no city',
        road: 'no road'
    }
}

const home = manus1?.address?.home ?? 'no home'
console.log({home});