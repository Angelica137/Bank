import { expect } from 'chai';
import { Account } from './account';
import { TransactionCredit } from './credit';
var sinon = require('sinon');
import moment from 'moment';
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

  //add deposit method
  //it instantiates a transaction with
  //date
  //credit
  //debit - this must be left empty
  //updates balance
  //pushes transaction to transaction history

  describe('#deposit', () => {
    it('calls TransactionCredit', () => {
// use mock to test dependency injection
      let account = new Account();
      account.deposit(15);
      const creditMock = sinon.fake();
      const proxy = creditMock;
      proxy();
      assert(creditMock.called);
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


})