import moment from 'moment';

export class Credit {
  constructor(amount) {
    this.amount = amount;
    this.date = moment().format('L');
  }
}


//add method increaseBalance