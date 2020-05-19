import { expect } from 'chai';
import { Withdraw } from './withdraw';
import moment from 'moment';

describe('Withdraw', () => {

  describe('#amount', () => {
    it('stores the amount the user enters', () => {
      let withdraw = new Withdraw(10);
      expect(withdraw.amount).to.equal(10.00);
    })
  })

  describe('#date', () => {
    it('stores the date when the withdrawal was made', () => {
      let withdraw = new Withdraw(10.20, moment().format('L'));
      expect(withdraw.date).to.equal(moment().format('L'));
    })
  })
})