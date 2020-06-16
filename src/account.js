import { Transaction } from "./transaction";

export class Account {
  constructor(balance = 0) {
    this.balance = balance;
    this.transactionHistory = [];
  }

  deposit(amount) {
    this.balance += amount;
    const credit = new Transaction(amount, 0, this.balance);
    this.transactionHistory.push(credit.formatTransaction());
  }

  withdraw(amount) {
    this.balance -= amount;
    const debit = new Transaction(null, amount, this.balance);
    this.transactionHistory.push(debit.formatTransaction());
  }

  statement() {
    for (var j = 0; j < this.transactionHistory.length; j++) {
      return [this.date, this.credit, this.debit, this.balance].join("|| ");
    }
  }
}
