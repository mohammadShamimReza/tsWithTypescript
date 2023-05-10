"use strict";
class BackAccoutnt {
    constructor(id, name, balance) {
        this.transition = 0;
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    getBalance() {
        console.log(`my current balance: ${this._balance}`);
    }
    addBalance(amount) {
        this._balance += amount;
    }
}
const shaamimAccount = new BackAccoutnt(1, 'shamim', 10000000);
class StudentAccoutnt extends BackAccoutnt {
    test() {
        this.addBalance;
    }
}
