import axios from "axios";
import config from "../config";

export const getNonce = async (address) => {
  const res = await axios.post(`${config.BASE_URL}/auth/nonce`, {
    address,
  });
  return res.data;
};
