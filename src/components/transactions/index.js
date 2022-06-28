import React, { useEffect, useState } from "react";
import { getTransactions } from "../../api";
import { Center, Box, VStack, Heading } from "@chakra-ui/react";
import Transaction from "./Transaction";

export default function Index() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions().then((transactions) => {
      setTransactions(transactions);
    });
  }, []);

  return (
    <Center>
      <Box>
        <Box mb='2rem'>
          <Heading mt='2rem'>Uniswap transactions</Heading>
        </Box>
        {transactions.map((transaction) => (
          <Transaction key={transaction.hash} transaction={transaction} />
        ))}
      </Box>
    </Center>
  );
}
