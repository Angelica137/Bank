import { Transaction } from "./transaction";

export class Account {
  constructor(balance = 0) {
    this.balance = balance;
    this.transactionHistory = [];
  }

  deposit(amount) {
    this.balance += amount;
    const credit = new Transaction(amount, this.balance);
    this.transactionHistory.push(credit.getTransaction());
  }

  withdraw(amount) {
    this.balance -= amount;
    const debit = new TransactionDebit(amount, this.balance);
    this.transactionHistory.push(debit.getTransaction());
  }

  //add method for statement
  //iterate through each object and turn to formatted string
  statement() {
    for (var j = 0; j < this.transactionHistory.length; j++) {
      return [this.date, this.credit, this.debit, this.balance].join("|| ");
    }
  }
}
