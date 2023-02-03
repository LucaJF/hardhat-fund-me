async function main() {
  const { deployer } = getNamedAccounts();
  const fundMe = await ethers.getContract("FundMe", deployer);
  console.log("Funding Contract...");

  const transcationResponse = await fundMe.fund({
    value: ethers.utils.parseEther("0.1"),
  });
  await transcationResponse.wait(1);
  console.log("Funded!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
