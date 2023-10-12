// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract Fakecoin is ERC20 {
    address public owner;
    constructor() ERC20('Fakecoin', 'FAKE') {
        owner = msg.sender;
        _mint(owner, 70000* (10 ** decimals()));
    }

  mapping(address => uint256) balances;

    function burn(uint256 token_count) public {
        _burn(owner, token_count);
    }

    function transfertoken(uint256 token_count, address receiver ) external{
        require(balances[owner] >= token_count);
            balances[owner] -= token_count;
            balances[receiver] += token_count;
    }

    function check_balance(address account) view public returns(uint256 amount) {
        return balances[account];
    }

}



