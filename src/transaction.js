import moment from "moment";

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

  formatTransaction() {
    if (typeof this.credit == "number") {
      return `${this._formatDate()}|| ${this.credit.toFixed(
        2
      )} || || ${this.balance.toFixed(2)}`;
    } else if (typeof this.debit === "number") {
      return `${this._formatDate()}|| || ${this.debit.toFixed(
        2
      )} || ${this.balance.toFixed(2)}`;
    }
  }

  _formatDate() {
    return moment(this.date).format("DD/MM/YYYY ");
  }
}
