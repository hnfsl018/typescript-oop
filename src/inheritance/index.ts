class BackAccount {
    private _balance: number = 0;

    get balance() {
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

class SavingsAccount extends BackAccount {
    private interestRate = 0.01; // 1%

    calculateInterest() {
        return this.balance * this.interestRate;
    }
}

const savingAcc = new SavingsAccount();
savingAcc.deposit(1000);
const interest = savingAcc.calculateInterest();
console.log("interest :: ", interest);
