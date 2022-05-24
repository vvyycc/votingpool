//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract VotingPoll{

    uint private id;
    string public  title;
    uint8[3] public options;
    uint  public vote;
    address public sender;

    constructor( string memory _title_f,address _sender, uint _id) {
    id=_id;
    title=_title_f;
    sender=_sender;
    }
    
   
    function setVote(uint _vote) public{
        vote=_vote;
    }
    // function getVotingPoll()public view returns( string memory, uint8[3] memory,address,bool){
    //     return (title,options,_sender,vote);
    // }

  

}