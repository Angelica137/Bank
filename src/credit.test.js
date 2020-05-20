import { expect } from 'chai';
import { Credit } from './credit';
import moment from 'moment';

describe('Credit', () => {

  describe('#amount', () => {
    it('stores the amount the user enters', () => {
      let credit = new Credit(0);
      expect(credit.amount).to.equal(0.00);
    })
  })

  describe('#date', () => {
    it('stores the date when the deposit was made', () => {
      let credit = new Credit(5.16, moment().format('L'));
      expect(credit.date).to.equal(moment().format('L'));
    })
  })
})


