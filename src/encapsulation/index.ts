export class BackAccount {
    private _balance: number = 0;

    get balance() {
        return this._balance
    }

    getBalance() {
        return this._balance
    }

    deposit(amount: number) {
        this._balance = this._balance + amount;
        return this._balance;
    }
    withdraw(amount: number) {
        this._balance = this._balance - amount;
        return this._balance;
    }
}


const backAcc = new BackAccount();
backAcc.deposit(300);
console.log("balance :: ", backAcc.balance);
console.log("balance :: ", backAcc.getBalance());