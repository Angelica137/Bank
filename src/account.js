import { TransactionCredit } from './credit';
import { TransactionDebit } from './debit';

//An account holds a balance and a transacion history
//an account can print statements

export class Account {
  constructor(transactionCreditClass = TransactionCredit, transactionDebitClass = TransactionDebit) {
    this.balance = 0;
    this.transactionHistory = [];
    this.transactionCreditClass = TransactionCredit;
    this.transactionDebitClass = TransactionDebit;
  }

  deposit(amount) {
    this.balance += amount;
    const credit = new TransactionCredit(amount, this.balance);
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
    return this.transactionHistory;
  }

}