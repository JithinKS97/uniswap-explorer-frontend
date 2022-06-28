import React, { useEffect, useState } from "react";
import { getTransactions } from "../../api";
import { Center, Box, VStack, Heading } from "@chakra-ui/react";

export default function Index() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions().then((transactions) => {
      setTransactions(transactions);
    });
  }, []);

  return (
    <Center>
      <VStack>
        <Heading mt='2rem'>Uniswap transactions</Heading>
        <VStack>
          {transactions.map((transaction) => (
            <Box mt='2rem' key={transaction.hash}>
              {transaction.hash}
            </Box>
          ))}
        </VStack>
      </VStack>
    </Center>
  );
}
