import React, { useEffect, useState } from "react";
import { getTransactions } from "../../api/transactions";
import { Box } from "@chakra-ui/react";
import TransactionTable from "./TransactionTable";
import Loading from "../layout/loading";
import Filters from "./Filters";

export default function Index() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getTransactions().then((transactions) => {
      setTransactions(transactions);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Box padding={"0rem 4rem"}>
      <Filters />
      <TransactionTable transactions={transactions} />
    </Box>
  );
}
