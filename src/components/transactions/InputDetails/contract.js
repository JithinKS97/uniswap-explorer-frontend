import { ethers } from "ethers";
import { abi } from "./erc20";

const infuraProjectId = "866cd7f20d8846169cecdd5aa0142df1";

const provider = new ethers.providers.InfuraProvider(
  "ropsten",
  infuraProjectId
);

export async function getTokenName(tokenAddress) {
  try {
    const erc721contract = new ethers.Contract(tokenAddress, abi, provider);
    const name = await erc721contract.name();
    return name;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export async function getTokenNames(paths) {
  const tokenNames = [];
  for (let path of paths) {
    const tokenName = await getTokenName(path);
    tokenNames.push(tokenName);
  }
  console.log(tokenNames);
  return tokenNames;
}
