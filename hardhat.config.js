require("@nomiclabs/hardhat-waffle");
const { task } = require('hardhat/config');

// Import the OpenZeppelin contracts via GitHub
task('import-openzeppelin', 'Imports OpenZeppelin contracts from GitHub', async () => {
  // Your import statements for OpenZeppelin contracts
  console.log('Importing OpenZeppelin contracts...');
});

module.exports = {
  solidity: "0.8.20",
  networks: {
    hardhat: {
      chainId: 1337
    },
    // mumbai: {
    //   url: "https://rpc-mumbai.matic.today",
    //   accounts: [process.env.pk]
    // },
    // polygon: {
    //   url: "https://polygon-rpc.com/",
    //   accounts: [process.env.pk]
    // }
  }
};