//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
 import "./VotingPoll.sol";

 contract VotingFactory{
       uint public constant MAX_VOTES_PER_VOTER = 1;
         event Voted ();
        event NewVotingPoll();

    VotingPoll votingPoll;
  
    mapping(uint => VotingPoll) public votingPolls;
    mapping(address => uint) public votes_by_address;
    uint public votingPollCount;
    constructor(){
        votingPollCount=0;
    }
  mapping(address => uint) public votes;
    function createVotingPoll(string memory title,address voter) external {
        votingPollCount++;
        votingPoll = new VotingPoll(title,voter,votingPollCount);
        votingPolls[votingPollCount]=votingPoll;
        emit NewVotingPoll();

    }

      function vote(uint _votingPollID) public {
    require(votes[msg.sender] < MAX_VOTES_PER_VOTER, "Voter has no votes left.");
    require(_votingPollID > 0 && _votingPollID <= votingPollCount, "Movie ID is out of range.");

    votes_by_address[msg.sender]++;
    votingPolls[_votingPollID].setVote(votes_by_address[msg.sender]);

    emit Voted();
  }
  
}