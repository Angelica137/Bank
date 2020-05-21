import { expect } from 'chai';
import { TransactionDebit } from './debit';
import moment from 'moment';

describe('TransactionDebit', () => {

  describe('#debit', () => {
    it('stores the amount the user enters', () => {
      let transaction = new TransactionDebit(10);
      expect(transaction.debit).to.equal(10.00);
    })
  })
  describe('#date', () => {
    it('stores the date when the withdrawal was made', () => {
      let transaction = new TransactionDebit(10.20);
      expect(transaction.date).to.deep.equal(Date.now());
    })
  })

  describe('#credit', () => {
    it('stores a value of null when a debit is created', () => {
      let transaction = new TransactionDebit(5.26);
      expect(transaction.credit).to.equal(null);
    })
  })
})