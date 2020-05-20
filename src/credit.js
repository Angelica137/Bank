import moment from 'moment';

export class TransactionCredit {
  constructor(amount) {
    this.credit = amount;
    this.date = moment().format('L');
    this.debit = null; 
    // this.balance = balance;
  }
//add method increaseBalance
//add method to display trasanciton as per table requirement

}


