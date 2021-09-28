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

interface SavingsAccount {
    calculateInterest(): number
}

class SavingsAccountModuleA extends BackAccount implements SavingsAccount {
    calculateInterest() {
        return 150;
    }
}

class SavingsAccountModuleB extends BackAccount implements SavingsAccount {
    calculateInterest() {
        return this.balance * 0.01;
    }
}

const moduleA = new SavingsAccountModuleA();
moduleA.deposit(1000);
const interestModuleA = moduleA.calculateInterest();
console.log("interestModuleA :: ", interestModuleA);

const moduleB = new SavingsAccountModuleB();
moduleB.deposit(1000);
const interestModuleB = moduleB.calculateInterest();
console.log("interestModuleB :: ", interestModuleB);

