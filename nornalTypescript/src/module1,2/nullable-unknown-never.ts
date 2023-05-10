// const searchName = (value: string | null) => {
//     if (value === null) {
//         console.log('there is nothing to search')
//     } else {
//         console.log('serching...')
//     }
// }

// searchName(null)


// const getSpeed = (speed: unknown) => { 
//     if (typeof speed === "number") {
//         const convertedSpeed = (speed * 1000) / 1000;
//         console.log(`My speed: ${convertedSpeed}`)
//     }
//     if(typeof speed === "string") {
//         const [value, unit] = speed.split('');
//         const convertedSpeed = (parseFloat(value) * 1000) / 1000;
//         console.log(`My speed: ${convertedSpeed}`);
//     }
//     else {
//         console.log("There is wrong type")
//     }
// }


// getSpeed(10)
// getSpeed('10 km^h')
// getSpeed(true)


// function throwError(massage: string): never {
//     throw new Error(massage)
// }

// throwError('error hoyece')