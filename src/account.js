import moment from 'moment';
import { TransactionCredit } from './credit';

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
    //push this transaction to transaction history
    this.transactionHistory.push(credit.getTransaction());
    //with updated balance

  }

}