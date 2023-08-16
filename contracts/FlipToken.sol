// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v4.9.0) (token/ERC20/ERC20.sol)
pragma solidity ^0.8.0;


import {Ownable} from "./utils/Ownable.sol";
import {ERC20} from "./ERC20.sol";

contract FlipToken is ERC20, Ownable {

    constructor(string memory _name, string memory _symbol, address _owner) ERC20(_name, _symbol) Ownable(_owner) {

    }

    function mintToken(address _to, uint256 _value) external onlyOwner() {
        _mint(_to, _value);
    }
}