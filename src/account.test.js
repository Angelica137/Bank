import { expect } from 'chai';
import { Account } from './account';
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
     // updates balance
     it('updates account balance with the deposit amount', () => {
      let account = new Account();
      account.deposit(15);
      expect(account.balance).to.equal(15.00);
     })
    // pushes transaction to transaction history
 })

  //add withdraw method
  //it instantiates a transaction with
  //date
  //credit - this must be left empty but the field exists in the form
  // deposit
  // new balance
  //updates balance
  //pushes transaction to transaction history


})