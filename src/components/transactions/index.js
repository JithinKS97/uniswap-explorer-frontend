import React, { useEffect, useState } from "react";
import { getTransactions } from "../../api/transactions";
import { Box } from "@chakra-ui/react";
import TransactionTable from "./TransactionTable";
import Loading from "../layout/loading";
import Filters from "./Filters";

export default function Index() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTime, setSelectedTime] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetchTransactions(selectedTime);
  }, []);

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
    fetchTransactions(e.target.value);
  };

  const fetchTransactions = (time) => {
    setLoading(true);
    getTransactions(time).then((transactions) => {
      setTransactions(transactions);
      setLoading(false);
    });
  };

  const refresh = () => {
    fetchTransactions(selectedTime);
  };

  return (
    <Box padding={"0rem 4rem"}>
      <Filters
        onRefreshClick={refresh}
        selectedTime={selectedTime}
        onTimeChange={handleTimeChange}
      />
      {loading ? <Loading /> : <TransactionTable transactions={transactions} />}
    </Box>
  );
}
