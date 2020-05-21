import moment from 'moment';

export class TransactionDebit {
  constructor(amount) {
    this.date = Date.now();
    this.debit = amount;
    this.credit = null; 
  }
}


// add method reduceBalance