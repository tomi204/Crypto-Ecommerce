// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Test{
    string public id;
    string public name;
    string public description;
    address payable public owner;
    string public state = 'opened';
    uint public founds;
    uint public foundraisingGoal;

    constructor(string memory _id, string memory _name, string memory _description, uint _foundraisingGoal){
        id = _id;
        name = _name;
        description = _description;
        foundraisingGoal = _foundraisingGoal;
        owner = payable(msg.sender);
    }
    function foundProject() public payable{
        owner.transfer(msg.value);
        founds += msg.value;
    }
    function changeProjectState(string calldata newSate) public{
        state = newSate;
    }
}
