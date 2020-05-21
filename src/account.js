import { TransactionCredit } from './credit';
import { TransactionDebit } from './debit';

//An account holds a balance and a transacion history
//an account can print statements

export class Account {
  constructor(balance = 0, transactionCreditClass = TransactionCredit) {
    this.balance = 0;
    this.transactionHistory = [];
    this.transactionCreditClass = TransactionCredit;
  }

  deposit(amount) {
    this.balance += amount;
    const credit = new TransactionCredit(amount);
    this.transactionHistory.push(credit.getTransaction());
  }

  withdraw(amount) {
    this.balance -= amount;
    const debit = new TransactionDebit(amount);
    this.transactionHistory.push(debit.getTransaction());
  }

}