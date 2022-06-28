import React from "react";
import { Tbody, Tr, Td, Box } from "@chakra-ui/react";
import { getTrimmedWord } from "../../utils";
import { Tooltip } from "@chakra-ui/react";

export default function TableBody(props) {
  const { transactions } = props;

  return (
    <Tbody>
      {transactions.map((transaction) => (
        <Tr key={transaction.hash}>
          <Td>
            <Tooltip label={transaction.hash}>
              <Box cursor='pointer'>
                {getTrimmedWord(transaction.hash, 5, 5)}
              </Box>
            </Tooltip>
          </Td>
          <Td>{Number(transaction.value).toFixed(2)}</Td>
          <Td>{transaction.blockNo}</Td>
          <Td>
            <Tooltip label={transaction.hash}>
              <Box cursor='pointer'>
                {getTrimmedWord(transaction.from, 5, 5)}
              </Box>
            </Tooltip>
          </Td>
          <Td>{transaction.timestamp}</Td>
        </Tr>
      ))}
    </Tbody>
  );
}
