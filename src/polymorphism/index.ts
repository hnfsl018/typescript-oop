export class BackAccount {
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

class SavingAccount extends BackAccount {
    // override
    withdraw(amount: number) {
        return amount;
    }
}

class FixedAccount extends BackAccount {
    // override
    withdraw(amount: number) {
        return amount - 50;
    }
}

const savingAcc = new SavingAccount();
console.log("money saving:: ", savingAcc.withdraw(100));

const fixedAcc = new FixedAccount();
console.log("money fixed :: ", fixedAcc.withdraw(100))