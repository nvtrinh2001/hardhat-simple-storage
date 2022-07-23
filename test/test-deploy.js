const { ethers } = require("hardhat");
const { assert } = require("chai");

describe("SimpleStorage", () => {
  let simpleStorage, simpleStorageFactory;

  beforeEach(async () => {
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await simpleStorageFactory.deploy();
  });

  it("Should start with a favorite number of 0", async () => {
    const currentValue = await simpleStorage.retrieve();
    const expectedValue = "0";
    assert.equal(currentValue.toString(), expectedValue);
  });

  it("Store a new favorite number", async () => {
    const transactionResponse = await simpleStorage.store(12);
    await transactionResponse.wait(1);
    const updatedValue = await simpleStorage.retrieve();
    assert.equal(updatedValue.toString(), "12");
  });
});
