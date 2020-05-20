import moment from 'moment';

export class Withdraw {
  constructor(amount) {
    this.amount = amount;
    this.date = moment().format('L');
  }
}


// add method reduceBalance