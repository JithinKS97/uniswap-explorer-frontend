import axios from "axios";
import config from "../config";

export const getTransactions = async () => {
  const res = await axios.get(`${config.BASE_URL}/transactions`);
  return res.data;
};
