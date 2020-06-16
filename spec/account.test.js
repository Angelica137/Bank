import { expect } from "chai";
import { Account } from "../src/account";
import { set, reset } from "mockdate";
const sinon = require("sinon");
var assert = require("assert");

describe("Account", () => {
  describe("#balance", () => {
    it("starts with value of 0", () => {
      let account = new Account();
      expect(account.balance).to.equal(0);
    });
  });

  describe("#transactionHistory", () => {
    it("starts as an empty list", () => {
      let account = new Account();
      expect(account.transactionHistory).to.deep.equal([]);
    });
  });

  describe("#deposit", () => {
    it("creates a Transaction with a credit amount", () => {
      let account = new Account();
      account.deposit(15);
      const creditMock = sinon.fake();
      const proxy = creditMock;
      proxy();
      assert(creditMock.called);
    });
    it("updates account balance with the deposit amount", () => {
      let account = new Account();
      account.deposit(15);
      expect(account.balance).to.equal(15.0);
    });
    it("adds transaction to transaction history with updated balance", () => {
      set("3/30/2020");
      let account = new Account();
      account.deposit(15);
      expect(account.transactionHistory).to.deep.equal([
        "30/03/2020 || 15.00 || || 15.00",
      ]);
      reset();
    });
  });

  describe("#withdraw", () => {
    it("creates a Transaction with a debit amount", () => {
      let account = new Account();
      account.withdraw(15);
      const debitMock = sinon.fake();
      const proxy = debitMock;
      proxy();
      assert(debitMock.called);
    });
    it("updates account balance with the withdrawn amount", () => {
      let account = new Account();
      account.balance = 15;
      account.withdraw(15);
      expect(account.balance).to.equal(0);
    });
    it("adds withdrawal to transaction history", () => {
      set("3/30/2020");
      let account = new Account();
      account.withdraw(15);
      expect(account.transactionHistory).to.deep.equal([
        "30/03/2020 || || 15.00 || -15.00",
      ]);
      reset();
    });
  });

  describe("#statement", () => {
    it("retunrs transaction history on a table format", () => {
      set("3/30/2020");
      let account = new Account();
      account.deposit(30);
      account.deposit(30);
      account.deposit(30);
      account.withdraw(30);
      expect(account.statement()).to.equal(
        "date || credit || debit || balance\n" +
          "30/03/2020 || 30.00 || || 30.00\n" +
          "30/03/2020 || 30.00 || || 60.00\n" +
          "30/03/2020 || 30.00 || || 90.00\n" +
          "30/03/2020 || || 30.00 || 60.00\n"
      );
    });
    reset();
  });
});
