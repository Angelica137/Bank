import moment from 'moment';

export class TransactionCredit {
  constructor(amount) {
    this.credit = amount;
    this.date = moment().format('L');
    this.debit = null; 
  }
//add method increaseBalance - add this in account
//a deposit tells account to update balance
//or tells balance to update?
//add method to display trasanciton as per table requirement

}

