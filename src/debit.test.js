import { expect } from 'chai';
import { TransactionDebit } from './debit';
import moment from 'moment';

describe('TransactionDebit', () => {

  describe('#amount', () => {
    it('stores the amount the user enters', () => {
      let debit = new TransactionDebit(10);
      expect(debit.amount).to.equal(10.00);
    })
  })

  describe('#date', () => {
    it('stores the date when the withdrawal was made', () => {
      let debit = new TransactionDebit(10.20, moment().format('L'));
      expect(debit.date).to.deep.equal(Date.now());
    })
  })
})