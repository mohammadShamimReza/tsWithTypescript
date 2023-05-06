const crush1: {
    name: string,
    age: number,
    profession: string,
    address: string
} = {
    name: 'koive',
    age: 36,
    profession: 'dev',
    address: 'nahi'
}

type CrushMarriedType = boolean;

const isCrushMarried: CrushMarriedType = false;

type CourseNameType = string;

const courseName: CourseNameType = 'next lavel web developer'

type CalculateType = {
    name: number,
    age: number,
}

const calculate = (numbers: CalculateType) =>{
    return numbers.age + numbers.name;
}

calculate({name:12,age:5})