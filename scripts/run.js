
const main = async () =>{
  const AhmedLamlihCollection = await hre.ethers.getContractFactory("AhmedLamlihCollection");
  const ahmedNFT = await AhmedLamlihCollection.deploy();

  await ahmedNFT.deployed();

  console.log("Ahmed Lamlih NFT deployed to:", ahmedNFT.address);

  let txn = await ahmedNFT.mintNFT();
  await txn.wait();
  
}

const runMain = async () =>{
  try{
    await main();
    process.exit(0);
  }catch(error){
    console.error(error);
    process.exit(1);
  }
}

runMain(); 