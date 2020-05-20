import { expect } from 'chai';
import { Account } from './account';
import moment from 'moment';

describe('Account', () => {

  describe('#amount', () => {
    it('starts with value of 0', () => {
      let account = new Account;
      expect(balance.amount).to.equal(0);
    })
  })
})