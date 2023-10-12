// SPDX-License-Identifier: MIT

 pragma solidity ^0.8.8; // With the symbol ^ we're defining the code can use any version over 0.8.8

// /*
// **Exercise 10: Basic Smart Contract**
//     - Write a smart contract named **`SimpleStorage`** that stores a number and allows functions to get and set that number.
//     - Deploy the contract using the Remix Ethereum IDE.
// */



contract SimpleStorage {
uint256 number;

function set(uint256 value) public {    // In every call the number value will increment by the "value" input by the user
    number += value;
}

function get() public view returns (uint256 num){   //return the value of number incremented in set function
    return number;
}

}