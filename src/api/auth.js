import axios from "axios";
import config from "../config";

export const getNonce = async (address) => {
  await axios.post(`${config.BASE_URL}/auth/nonce`, {
    address,
  });
};
