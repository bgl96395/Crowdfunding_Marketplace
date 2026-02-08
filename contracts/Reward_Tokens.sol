// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Reward_Tokens is ERC20,Ownable{

    constructor() ERC20("Reward Tokens","RWD") Ownable(msg.sender){}

    function mint(address to, uint256 amount) external onlyOwner{
        _mint(to,amount);
    }
}
