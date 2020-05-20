import { expect } from 'chai';
import { Account } from './account';
import moment from 'moment';

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
})