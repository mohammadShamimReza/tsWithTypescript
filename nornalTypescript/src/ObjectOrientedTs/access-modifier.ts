class BackAccoutnt {
   public id: number;
   private name: string;
    private _balance: number;
   protected transition: number = 0;
    
    constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    getBalance() {
        console.log(`my current balance: ${this._balance}`)
    }
    addBalance(amount: number) { 
        this._balance += amount;
    }
}

const shaamimAccount = new BackAccoutnt(1, 'shamim', 10000000) 

class StudentAccoutnt extends BackAccoutnt {
    test() {
        this.addBalance
    }
}