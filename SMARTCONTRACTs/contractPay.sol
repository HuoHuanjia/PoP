// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract contractPay is Ownable(0x02e7520482045E2bA8a127C5d0D6E40a17024127),ReentrancyGuard {
    IERC20Metadata usdt;
    uint decUSD;
    mapping (address => bool) internal accesToPay;

    constructor(IERC20Metadata _usdt){
        usdt = _usdt;
        decUSD = 10 ** usdt.decimals();    
    }


    function setCreator(address _creator) public onlyOwner{
        accesToPay[_creator]=true;
    }

    function payReward(uint amount) public nonReentrant{
        accesToPay[msg.sender]=false;
        usdt.transferFrom(0x02e7520482045E2bA8a127C5d0D6E40a17024127,msg.sender, amount * decUSD);        
    }    
}