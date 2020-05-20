import moment from 'moment';
import { Deposit } from './deposit';

//An account holds a balance and a transacion history
//an account can print statements

export class Account {
  constructor(balance = 0, depositClass = Deposit) {
    this.balance = balance;
    this.transactionHistory = [];
    this.deposit = depositClass;
  }

  deposit() {

  }

}