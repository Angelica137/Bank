import moment from 'moment';

//An account holds a balance and a transacion history
//an account can print statements

export class Account {
  constructor(balance = 0) {
    this.balance = balance;
    this.transactionHistory = [];
  }
}