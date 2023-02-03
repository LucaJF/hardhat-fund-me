async function main() {
  const { deployer } = getNamedAccounts();
  const fundMe = await ethers.getContract("FundMe", deployer);
  console.log("Funding Contract...");

  const transcationResponse = await fundMe.withdraw();
  await transcationResponse.wait(1);
  console.log("Got it back!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
