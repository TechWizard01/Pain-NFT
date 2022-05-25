# Basic Sample NFT Project

This project demonstrates a basic NFT minting and deployment use case. It comes with a sample contract and a sample script that deploys that contract. Here I have minted an NFT out of a TendoPain Yahiko (The Deva Path of Pain) illustration I drew myself in Inkscape.

Check out my deployed NFT on Rinkeby testnet here: https://testnets.opensea.io/assets/rinkeby/0xb7a1ea0bc8484bdf64a5e9650423b83261992bf4/1

Try running some of the following tasks to deploy your own NFT locally using this guide:

```shell
npm install
npx hardhat run scripts/run.js
```

Change the Contract's name and constructor arguments along with the URI in the `_setTokenURI` field to point to the online storage where your JSON metadata is kept. Check my jsonkeeper URI for reference to create your own metadata.

To run, deploy and mint your own NFT on a Rinkeby testnet, run following command inside your project folder's shell/terminal.

```shell
npm install
npx hardhat run scripts/run.js --network rinkeby
```
