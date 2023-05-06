// // Mocking API

// // JSON placeholder

// interface Itodo {
//     userId: number,
//     id: number,
//     title: string,
//     completed: boolean
// }

// const getTodo = async (): Promise<Itodo> => {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/todos/1"
//     );
//     const data: Itodo = await response.json();
//     return data;
// }

// const getTodoData = async ():Promise<void> => {
//     const result = await getTodo()
//     console.log(result)
// }

// getTodoData();


// const makePromise = (): Promise<string> => {
//   return new Promise<string>((resolve, reject) => {
//     const data: string = "Data is feched";
//     if (data) {
//       resolve(data);
//     } else {
//       reject("Failed to fetch data");
//     }
//   });
// };


// const getPromiseData = async (): Promise<string> => {
//     const data = await makePromise();
//     console.log(data)
//     return data;
// }




// const makePromiseBoll = (): Promise<boolean> => {
//   return new Promise<boolean>((resolve, reject) => {
//     const data: string = "Data is feched";
//     if (data) {
//       resolve(true);
//     } else {
//       reject(false);
//     }
//   });
// };

// const getPromiseDataBoll = async (): Promise<boolean> => {
//   const data = await makePromiseBoll();
//   console.log(data);
//   return data;
// };


// interface IDataType {
//     data: string,
//     type: string
// }

// const makePromiseObj = (): Promise<IDataType> => {
//   return new Promise<IDataType>((resolve, reject) => {
//     const data: IDataType = { data: "data not found", type: "object" };
//     if (data) {
//       resolve(data);
//     } else {
//       reject({ data: "data found", type: "object" });
//     }
//   });
// };

// const getPromiseDataObj = async (): Promise<IDataType> => {
//   const data = await makePromiseObj();
//   console.log(data);
//   return data;
// };



// //Promise<string>, Promise<number>, Promise<boolean>