
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  defaultNetwork: 'polygon',
  networks: {
    polygon: {
      url: "https://polygon-mainnet.g.alchemy.com/v2/5zv2OYeXlmORNp0LvneJdB2BSn2zgOvQ",
      accounts: ["SECRET PHASE"]
    }
  }
};
