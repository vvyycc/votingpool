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

   
    
     receptTx = await contract.createVotingPoll("Hola",ownerAddress,'Good');
     countVote++;
     
    console.log(receptTx);
    


 
    console.log("\n")



  })
  it("The Voter can´t create another VotingPoll", async () => {

   
    
    await contract.createVotingPoll("Hola",ownerAddress,'Good');
  
    await expect(contract.createVotingPoll("Hola",ownerAddress,'Good')).to.be.revertedWith(
      "Voter has no votes left."
    );
    

   



   console.log("\n")



 })
  it("Vote a votingPoll that it was created", async () => {
    receptTx = await contract.createVotingPoll("Hola",ownerAddress,'Good');
    await contract.vote(voterAddress,1,'Good')
    const count = await contract.votingPollCount();
    console.log(count)
  })
  it("Voter has no votes left", async () => {
    receptTx = await contract.createVotingPoll("Hola",ownerAddress,'Good');
    await contract.vote(voterAddress,1,'Good')
    await expect( contract.vote(voterAddress,1,'Good')).to.be.revertedWith(
      "Voter has no votes left.");
    
    const count = await contract.votingPollCount();
    console.log(count)
  })
});
});