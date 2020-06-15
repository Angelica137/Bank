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

  describe("#formatTransaction", () => {
    it("formats the credit transaction into a string", () => {
      set("3/30/2020");
      let transaction = new Transaction();
      transaction.credit = 100;
      transaction.balance = 4000;
      expect(transaction.formatTransaction()).to.equal(
        "30/03/2020 || 100.00 || || 4000.00"
      );
      let transaction2 = new Transaction();
      transaction2.debit = 30;
      transaction2.balance = 3970;
      expect(transaction2.formatTransaction()).to.equal(
        "30/03/2020 || || 30.00 || 3970.00"
      );

      reset();
    });
  });
});
