import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "@nomiclabs/hardhat-ethers";
import "solidity-coverage";

dotenv.config();
const privateKey= process.env.PRIVATE_KEY
const url= process.env.DEPLOY_KEY_RINKEBY

let deployRinkeby: Array<string>= new  Array<string>();
process.env.DEPLOY_ACC_RINKEBY!=null? deployRinkeby.push(process.env.DEPLOY_ACC_RINKEBY) : deployRinkeby;
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337,
    },
   
    rinkeby: {
      url: url,
      accounts:[`0x${privateKey}`],
    },
      localhost: {
      accounts:process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      url: "http://127.0.0.1:8545"
    }
  },

  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },

};

export default config;
