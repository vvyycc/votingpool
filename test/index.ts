const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Deploying a VotingPollFactory and creating VotingPoll instances ", function () {

  it("Should instantiate the created VotingPoll and call its functions", async () => {

    // ContractFactory in ethers.js is an abstraction used to deploy new smart contracts, so Token here is a factory for instances of our token contract.
    const VF = await ethers.getContractFactory('VotingFactory');
    const VotingPoll = await ethers.getContractFactory('VotingPoll');

    const votingPoll =await VotingPoll.deploy("prueba","0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199");
    await votingPoll.deployed()
    // deploy bank factory
    const vf = await VF.deploy();
    await vf.deployed();


    // call function with (address owner, uint256 number) parameters
    const tx1_receipt = await vf.createVotingPoll("Hola","0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199");
    const tx2_receipt = await vf.createVotingPoll("que tal","0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199");
    const tx3_receipt = await vf.createVotingPoll("estamos","0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199");

    console.log("VotingPollFactory address at: ", tx1_receipt.to);
    console.log("\n")


    // Get the addresses of the deployed bank contracts 
    const voting_poll1_address = await vf.list_voting_poll(0);
    const voting_poll2_address = await vf.list_voting_poll(1);
    const voting_poll3_address = await vf.list_voting_poll(2);
    console.log("VotingPollFactory array of voting polls, address at (index 0): ", voting_poll1_address);
    console.log("VotingPollFactory array of voting polls, address at (index 1): ", voting_poll2_address);
    console.log("VotingPollFactory array of voting polls, address at (index 2): ", voting_poll3_address);
    console.log("\n")


    // Attach the created Bank instance to the address it's located at. Call functions.
    const voting_polls1 = await VotingPoll.attach(voting_poll1_address);
    const voting_polls2 = await VotingPoll.attach(voting_poll2_address);
    const voting_polls3 = await VotingPoll.attach(voting_poll3_address);
    
    
    // Get Bank 1 variables
    const voting_polls1_voting_poll_title = await voting_polls1.title();
    const voting_poll1_voter = await voting_polls1.sender()
    console.log(`VotingPoll 1 ntitle: ${voting_polls1_voting_poll_title}\nvoter: ${voting_poll1_voter}`)
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")


    // Get Bank 2 variables
    const voting_polls2_voting_poll_title = await voting_polls2.title();
    const voting_poll2_voter = await voting_polls2.sender()
    console.log(`Voting Poll 2 \ntitle: ${voting_polls2_voting_poll_title}\nvoter: ${voting_poll2_voter}`)
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

    // Get Bank 3 variables
    const voting_polls3_voting_poll_title = await voting_polls3.title();
    const voting_poll3_voter = await voting_polls3.sender()
    console.log(`Voting Poll 3 \ntitle: ${voting_polls3_voting_poll_title}\nvoter: ${voting_poll3_voter}`)
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
  })

});