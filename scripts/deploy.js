// run allows us to run hardhat command
const { ethers, run, network } = require("hardhat");

async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("Deploying, please wait..");
  const simpleStorage = await SimpleStorageFactory.deploy();
  await simpleStorage.deployed();
  // what is the private key?
  // what is rpc url?
  console.log(`Deployed contract to: ${simpleStorage.address}`);

  // Don't want to verify code when it runs on hardhat
  // console.log(network.config);
  if (network.config.chainId === 4 && process.env.ETHERSCAN_API) {
    console.log("Waiting for block confirmation..");
    await simpleStorage.deployTransaction.wait(6);
    await verify(simpleStorage.address, []);
  }

  // Working with contracts
  const currentValue = await simpleStorage.retrieve();
  console.log(`Current Favorite Number: ${currentValue}`);
  const transactionResponse = await simpleStorage.store(12);
  await transactionResponse.wait(1);
  const updatedValue = await simpleStorage.retrieve();
  console.log(`New Favorite Number: ${updatedValue}`);
}

async function verify(contractAddress, args) {
  console.log("Verifying contract..");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (error) {
    if (error.message.toLowerCase().includes("already verified")) {
      console.log("Already verified!");
    } else {
      console.error(error);
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
