// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {MyToken} from "../src/MyToken.sol";



contract DeployerScript is Script {
    function setUp() public {}

     function run() public returns(MyToken)  {
        vm.startBroadcast();
        MyToken token = new MyToken(1000000);

        vm.stopBroadcast();
        return token;
    }
}

// To run the script:
// source .env
// forge script script/Deployer.s.sol --rpc-url $RPC_URL --broadcast --legacy --private-key $PRIVATE_KEY