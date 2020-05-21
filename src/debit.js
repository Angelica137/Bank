import moment from 'moment';

export class TransactionDebit {
  constructor(amount) {
    this.date = Date.now();
    this.amount = amount;

  }
}


// add method reduceBalance