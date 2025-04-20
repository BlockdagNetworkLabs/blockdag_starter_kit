import { expect } from "chai";
import { ethers } from "hardhat";
import { Greeter } from "../typechain-types";

describe("Greeter", function () {
  let greeter: Greeter;
  const initialGreeting = "Hello, BlockDAG!";

  beforeEach(async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    greeter = await Greeter.deploy(initialGreeting);
    await greeter.waitForDeployment();
  });

  it("Should return the initial greeting", async function () {
    expect(await greeter.greet()).to.equal(initialGreeting);
  });

  it("Should set a new greeting", async function () {
    const newGreeting = "Hello, Primordial!";
    await greeter.setGreeting(newGreeting);
    expect(await greeter.greet()).to.equal(newGreeting);
  });
}); 