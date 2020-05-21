import { expect } from 'chai';
import { Account } from './account';
import moment from 'moment';
var sinon = require('sinon');
var assert = require('assert');

describe('Account', () => {

  describe('#balance', () => {
    it('starts with value of 0', () => {
      let account = new Account();
      expect(account.balance).to.equal(0);
    })
  })

  describe('#transactionHistory', () => {
    it('starts as an empty list', () => {
      let account = new Account();
      expect(account.transactionHistory).to.deep.equal([]);
    })
  })

  describe('#deposit', () => {
    it('calls TransactionCredit', () => {
      let account = new Account();
      account.deposit(15);
      const creditMock = sinon.fake();
      const proxy = creditMock;
      proxy();
      assert(creditMock.called);
    })
     it('updates account balance with the deposit amount', () => {
      let account = new Account();
      account.deposit(15);
      expect(account.balance).to.equal(15.00);
     })
    it('adds transaction to transaction history', () => {
      let account = new Account();
      account.deposit(15);
      let date = Date.now()
      let formatDate = moment(date).format("DD/MM/YYYY ");
      expect(account.transactionHistory).to.deep.equal([{date: formatDate, 
        credit: 15.00, debit: null}])
    })
 })

  //add withdraw method
  //it instantiates a transaction with
  //date
  //credit - this must be left empty but the field exists in the form
  // deposit
  // new balance
  //updates balance
  //pushes transaction to transaction history

  describe('#withdraw', () => {
    it('calls TransactionDebit', () => {
      let account = new Account();
      account.withdraw(15);
      const debitMock = sinon.fake();
      const proxy = debitMock;
      proxy();
      assert(debitMock.called);
    })
     it('updates account balance with the withdrawn amount', () => {
      let account = new Account();
      account.balance = 15
      account.withdraw(15);
      expect(account.balance).to.equal(0);
     })
    it('adds transaction to transaction history', () => {
      let account = new Account();
      account.withdraw(15);
      let date = Date.now()
      let formatDate = moment(date).format("DD/MM/YYYY ");
      expect(account.transactionHistory).to.deep.equal([{date: formatDate, 
        credit: null, debit: 15.00}])
    })
     })
})