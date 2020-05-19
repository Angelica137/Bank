import { expect } from 'chai';
import { Deposit } from './deposit';
import moment from 'moment';

describe('Deposit', () => {

  describe('#amount', () => {
    it('stores the amount the user enters', () => {
      let deposit = new Deposit(0);
      expect(deposit.amount).to.equal(0.00);
    })
  })

  describe('#date', () => {
    it('stores the date when the deposit was made', () => {
      let deposit = new Deposit(5.16, moment().format('L'));
      expect(deposit.date).to.equal(moment().format('L'));
    })
  })
})


