import { moment } from "moment";

export class Transaction {
  constructor(credit = null, debit = null, balance = null) {
    this.date = Date.now();
    this.credit = credit;
    this.debit = debit;
    this.balance = balance;
  }

  getTransaction() {
    return {
      date: this._formatDate(),
      credit: this.credit,
      debit: this.debit,
      balance: this.balance,
    };
  }

  _formatDate() {
    return moment(this.date).format("DD/MM/YYYY ");
  }

  //add method to display transanciton as per table requirements
  //this is a string
  //this class is reponsible for formatting it self
  //create method to send transaction to transaction history
}
