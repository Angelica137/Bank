import { expect } from 'chai';
import { TransactionCredit } from '../src/credit';
import moment from 'moment';

describe('TransactionCredit', () => {
  describe('#credit', () => {
    it('stores the amount the user enters', () => {
      let transaction = new TransactionCredit(14.34);
      expect(transaction.credit).to.equal(14.34);
    })
  })
  //use mock to test date
  describe('#date', () => {
    xit('stores the date when the deposit was made', () => {
      let transaction = new TransactionCredit(5.16);
      expect(transaction.date).to.equal(Date.now());
    })
  })

  describe('#debit', () => {
    it('stores a value of null when a credit is created', () => {
      let transaction = new TransactionCredit(5.26);
      expect(transaction.debit).to.equal(null);
    })
  })

  describe('#balance', () => {
    it('stores a value of 0 when a credit is created', () => {
      let transaction = new TransactionCredit(5.26);
      expect(transaction.balance).to.equal(0);
    })
  })

  describe('#getTransactionCredit', () => {
    it('returns the transaction data', () => {
      let transaction = new TransactionCredit(2.34, 300);
      let formatDate = moment(transaction.date).format("DD/MM/YYYY ");
      expect(transaction.getTransactionCredit()).to.deep.equal({date: formatDate, 
        credit: 2.34, debit: null, balance: 300.00})

    })
  })
})


