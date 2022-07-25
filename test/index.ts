const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("VotingPollFactory.sol", () => {
  let contractFactory;
  let contract: { createVotingPoll: (arg0: string, arg1: any, arg2: string) => any; vote: (arg0: string | number, arg1: number, arg2: string) => any; votingPollCount: () => any; };
  let owner: { address: any; };
  let voter: { address: string | number; };
  let countVote=0;
  let ownerAddress: any;
  let voterAddress: string | number;
  let receptTx;
beforeEach(async () => {
  [owner,voter]=await ethers.getSigners();
  contractFactory = await ethers.getContractFactory('VotingFactory');
  contract = await contractFactory.deploy();
    // await vf.deployed();
  ownerAddress=  owner.address;
  voterAddress = voter.address;
});
describe("Core", function () {

  it("Creating a votingpoll", async () => {

    // ContractFactory in ethers.js is an abstraction used to deploy new smart contracts, so Token here is a factory for instances of our token contract.
   

   
    // deploy votingPoll factory
    

    // Create one votingPoll selecting one options with first address

    // Check if the creator can vote

    // Vote with another address

    // Check if the account that voted can vote

    // call function with (address owner, uint256 number) parameters
    // let arrayVotingPollF = new Array<any>()
    
     receptTx = await contract.createVotingPoll("Hola",ownerAddress,'Good');
     countVote++;
     
    console.log(receptTx);
    
  //  const votingPoll=await  contract.getVotingPollF(countVote)
    // const numVotesInDifferentOptionsByVotingPoll=   await contract.getVotingPollOptions(countVote,'Good')
    // console.log(numVotesInDifferentOptionsByVotingPoll);
    // console.log(owner.address);
    // console.log(votingPoll);
    // const count = await contract.votingPollCount();
    // for(let i=1;i <= Number(count);i++){
    //   arrayVotingPollF.push(contract.getVotingPollF(i))
    // }
    // expect(arrayVotingPollF).to.be.a('array');
    // expect(arrayVotingPollF).to.have.lengthOf.above(0);
    // const tx2_receipt = await vf.createVotingPoll("que tal","0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199",'Bad');
    // const tx3_receipt = await vf.createVotingPoll("estamos","0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199",'Very good');

    // console.log("VotingPollFactory address at: ", tx1_receipt.to);


 
    console.log("\n")



  })
  it("Vote a votingPoll that it was created", async () => {
    receptTx = await contract.createVotingPoll("Hola",ownerAddress,'Good');
    await contract.vote(voterAddress,1,'Good')
    const count = await contract.votingPollCount();
    console.log(count)
  })
});
});