import axios from "./middleware";
import config from "../config";

export const getTransactions = async (time) => {
  const res = await axios.post(`${config.BASE_URL}/transactions`, {
    time: time,
  });
  return res.data;
};
