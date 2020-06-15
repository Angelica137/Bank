import { expect } from "chai";
import { Transaction } from "../src/transaction";
import moment from "moment";
import { set, reset } from "mockdate";

describe("Transaction", () => {
  describe("#credit", () => {
    it("stores the amount the user enters when creating a credit", () => {
      let transaction = new Transaction();
      transaction.credit = 14.34;
      expect(transaction.credit).to.equal(14.34);
    });
  });

  describe("#debit", () => {
    it("stores the amount the user enters when creating a debit", () => {
      let transaction = new Transaction();
      transaction.debit = 5.26;
      expect(transaction.debit).to.equal(5.26);
    });
  });

  //use mock to test date
  describe("#date", () => {
    it("stores the date when the deposit was made", () => {
      set("3/30/2020");
      let transaction = new Transaction();
      expect(transaction.date).to.equal(Date.now());
      reset();
    });
  });

  describe("#balance", () => {
    it("stores a value of null when a credit is created", () => {
      let transaction = new Transaction();
      expect(transaction.balance).to.equal(null);
    });
  });

  describe("#getTransaction", () => {
    it("returns the transaction data", () => {
      let transaction = new Transaction();
      transaction.credit = 200;
      let formatDate = moment(transaction.date).format("DD/MM/YYYY ");
      expect(transaction.getTransaction()).to.deep.equal({
        date: formatDate,
        credit: 200,
        debit: null,
        balance: null,
      });
    });
  });
});
