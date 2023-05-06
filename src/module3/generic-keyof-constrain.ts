type PersonType = {
    name: string;
    age: number;
    address: string;
}

type newType = 'name' | 'age' | 'address';
type newTypeUsingKeyOf = keyof PersonType;

// const a: newType = "name"

// const b: newTypeUsingKeyOf="address"


function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
    
    obj[key]
}

const property = getProperty({name: 'shamim', age: 299}, 'name')