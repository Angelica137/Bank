import { expect } from 'chai';
import { Transaction } from './transaction';

describe('Transaction', () => {

  describe('#amount', () => {
    it('is instantiated with a value of 0', () => {
      let transaction = new Transaction;
      expect(transaction.amount).to.equal(0.00);
    })
  })




  
//   describe('#deposit()', () => {
//     it ('accpets an amount and records the event with the date when it happened', () => {
//       let transaction = new Transaction;
//       expect(transaction.deposit(5.16)).to.equal(5.16);
//     });
//   })
 })