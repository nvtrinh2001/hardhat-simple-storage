const { task } = require("hardhat/config");

task("block-number", "Print the current block number").setAction(
  async (taskArgs, hre) => {
    // hre: hardhat runtime environment => can access packages of hardhat
    const blockNumber = await hre.ethers.provider.getBlockNumber();
    console.log(`Current block number: ${blockNumber}`);
  }
);
