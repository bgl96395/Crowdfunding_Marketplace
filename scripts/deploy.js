async function main() {
  const [deployer] = await ethers.getSigners() 

  const Token = await ethers.getContractFactory("Reward_Tokens")
  const token = await Token.deploy()
  await token.waitForDeployment()

  const Crowd = await ethers.getContractFactory("CrowdFunding")
  const crowd = await Crowd.deploy(token.target)
  await crowd.waitForDeployment()

  const tx = await token.transferOwnership(crowd.target)
  await tx.wait()

  console.log("CrowdFunding deployed to:", crowd.target)
  console.log("Token deployed to:", token.target)
}

main()