// class BackAccoutnt {
//   public id: number;
//   private name: string;
//   private _balance: number;
//   protected transition: number = 0;

//   constructor(id: number, name: string, balance: number) {
//     this.id = id;
//     this.name = name;
//     this._balance = balance;
//   }
//     // getter 
//     get balance() { return this._balance; }


//     // setter
//     set deposit(amount: number) { this._balance = this._balance + amount }

//   getBalance(): number {
//     return this._balance;
//   }
// //   addBalance(amount: number) {
// //     this._balance += amount;
// //   }
// }

// const shaamimAccount = new BackAccoutnt(1, "shamim", 10000000);

// class StudentAccoutnt extends BackAccoutnt {
//   test() {

//   }
// }



// console.log(shaamimAccount.deposit = 4000);
// console.log(shaamimAccount.balance)