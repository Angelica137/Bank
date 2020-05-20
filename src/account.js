import moment from 'moment';
import { TransactionCredit } from './credit';

//An account holds a balance and a transacion history
//an account can print statements

export class Account {
  constructor(balance = 0, transactionCreditClass = TransactionCredit) {
    this.balance = balance;
    this.transactionHistory = [];
    this.transactionCreditClass = TransactionCredit;
  }

  deposit(amount) {
    //add dependency from Credit calss
    const credit = new this.transactionCreditClass(amount);
    //update balance
    //push this transaction to transaction history

  }

}