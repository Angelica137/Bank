import moment from 'moment';

export class TransactionDebit {
  constructor(amount, balance = 0) {
    this.date = Date.now();
    this.debit = amount;
    this.credit = null; 
    this.balance = balance; 
  }

  getTransaction() {
    return {
      date: this._formatDate(),
      credit: this.credit,
      debit: this.debit, 
      balance: this.balance
      }
  }

  _formatDate() {
    return moment(this.date).format("DD/MM/YYYY ");
  }
}
