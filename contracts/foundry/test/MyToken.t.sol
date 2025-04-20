// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Test.sol";
import "../src/MyToken.sol";

contract MyTokenTest is Test {
    MyToken public token;
    address public owner;
    address public user;
    uint256 public constant INITIAL_SUPPLY = 1000000 * 10**18; // 1 million tokens

    function setUp() public {
        owner = address(this);
        user = address(0x1);
        token = new MyToken(INITIAL_SUPPLY);
    }

    function testInitialSupply() public {
        assertEq(token.totalSupply(), INITIAL_SUPPLY);
        assertEq(token.balanceOf(owner), INITIAL_SUPPLY);
    }

    function testMint() public {
        uint256 amount = 1000 * 10**18;
        token.mint(user, amount);
        assertEq(token.balanceOf(user), amount);
    }

    function testTransfer() public {
        uint256 amount = 1000 * 10**18;
        token.transfer(user, amount);
        assertEq(token.balanceOf(user), amount);
        assertEq(token.balanceOf(owner), INITIAL_SUPPLY - amount);
    }
} 