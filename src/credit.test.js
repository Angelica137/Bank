import { expect } from 'chai';
import { TransactionCredit } from './credit';
import moment from 'moment';

describe('TransactionCredit', () => {

  describe('#amount', () => {
    it('stores the amount the user enters', () => {
      let transaction = new TransactionCredit(0);
      expect(transaction.credit).to.equal(0.00);
    })
  })

  describe('#date', () => {
    it('stores the date when the deposit was made', () => {
      let transaction = new TransactionCredit(5.16);
      expect(transaction.date).to.equal(moment().format('L'));
    })
  })

  describe('#debit', () => {
    it('stores a value of null when a credit is created', () => {
      let transaction = new TransactionCredit(5.26);
      expect(transaction.debit).to.equal(null);
    })
  })
})


