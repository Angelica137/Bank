import moment from 'moment';

export class TransactionCredit {
  constructor(amount, balance = null) {
    this.date = Date.now();
    this.credit = amount;
    this.debit = null; 
    this.balance = balance;
  }

//add method to format date as moment is unknowns
//use moment().format('L');
//add method increaseBalance - add this in account
//a deposit tells account to update balance
//or tells balance to update?
//add method to display trasanciton as per table requirement
//this class is reponsible for formatting it self
//account pulls it ready to use

}
