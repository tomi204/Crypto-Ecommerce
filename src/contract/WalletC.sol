// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract WalletC {
    address public owner;
    mapping(address => uint256) public balances;
    constructor() {
        owner = msg.sender;
    }
    function deposit() public payable {
        balances[msg.sender] += msg.value;
    }
    function withdraw(uint256 _amount) public {
        require(balances[msg.sender] >= _amount);
        balances[msg.sender] -= _amount;
        payable(msg.sender).transfer(_amount);
    }
    function transfer(address _to, uint256 _amount) public {
        require(balances[msg.sender] >= _amount);
        balances[msg.sender] -= _amount;
        balances[_to] += _amount;
    }
}
