import { expect } from 'chai';
import { Account } from './account';
import moment from 'moment';

describe('Account', () => {

  describe('#balance', () => {
    it('starts with value of 0', () => {
      let pot = new Account();
      expect(pot.balance).to.equal(0);
    })
  })

  // describe('#balance', () => {
  //   it('stores the date when balance was updated', () => {
  //     let account = new Account();
  //     expect(accountt.balance).to.equal(0, (moment().format('L')));
  //   })
  // })
})