
type MyInFoType = {
    name: string,
    age: number,
    salary: number
}

const myInfo = {
    name: 'shamim',
    age: 24,
    salary: 0,
    learn: false
}

// const newData = { ...myInfo, crush }

const addMeToMyCrush = <T extends MyInFoType>(myInfo: T) => {
    const crush = "Allah";
    const newData = { ...myInfo, crush };
    return newData;
}

const result6 = addMeToMyCrush(myInfo);
