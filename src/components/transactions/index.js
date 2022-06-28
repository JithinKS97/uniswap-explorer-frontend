import React, { useEffect, useState } from "react";
import { getTransactions } from "../../api/transactions";
import { Center, Box } from "@chakra-ui/react";
import Transaction from "./Transaction";
import Loading from "../layout/loading";

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
    <Center>
      <Box>
        {transactions.map((transaction) => (
          <Transaction key={transaction.hash} transaction={transaction} />
        ))}
      </Box>
    </Center>
  );
}
