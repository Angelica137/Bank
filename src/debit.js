import moment from 'moment';

export class TransactionDebit {
  constructor(amount) {
    this.date = Date.now();
    this.debit = amount;
    this.credit = null; 
  }

// add method reduceBalance here ?
  getTransaction() {
    return {
      date: this._formatDate(),
      credit: this.credit,
      debit: this.debit
      }
  }

//add method to format date
  _formatDate() {
    return moment(this.date).format("DD/MM/YYYY ");
  }
}
