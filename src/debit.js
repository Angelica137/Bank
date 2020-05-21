import moment from 'moment';

export class TransactionDebit {
  constructor(amount) {
    this.amount = amount;
    this.date = moment().format('L');
  }
}


// add method reduceBalance