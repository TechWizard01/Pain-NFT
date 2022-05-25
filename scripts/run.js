const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const PainNFT = await hre.ethers.getContractFactory("PainNFT");
  const pain = await PainNFT.deploy();

  await pain.deployed();
  console.log("PainNFT deployed to:", pain.address);

  let txn = await pain.mintNFT();
  await txn.wait();

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
