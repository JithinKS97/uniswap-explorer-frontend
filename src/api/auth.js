import axios from "axios";
import config from "../config";
import { ethers } from "ethers";

export const getNonce = async (address) => {
  const res = await axios.post(`${config.BASE_URL}/auth/nonce`, {
    address,
  });
  return res.data.message;
};

export const verify = async (nonce) => {
  const message = `Signing this message with nonce:${nonce}`;
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const signature = await signer.signMessage(message);
  const res = await axios.post(`${config.BASE_URL}/auth/verify`, {
    signature,
    nonce,
  });
  return res.data.message;
};
