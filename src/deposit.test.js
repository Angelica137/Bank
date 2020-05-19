import { expect } from 'chai';
import { Deposit } from './deposit';

describe('Deposit', () => {

  describe('#amount', () => {
    it('stores the amount the user enters', () => {
      let deposit = new Deposit(0);
      expect(deposit.amount).to.equal(0.00);
    })
  })




  
//   describe('#deposit()', () => {
//     it ('accpets an amount and records the event with the date when it happened', () => {
//       let transaction = new Transaction;
//       expect(transaction.deposit(5.16)).to.equal(5.16);
//     });
//   })
 })