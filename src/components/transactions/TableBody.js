import React from "react";
import { Tbody, Tr, Td, Box } from "@chakra-ui/react";
import { getTimeElapsed } from "../../utils";
import { Tooltip } from "@chakra-ui/react";
import Hash from "./Hash";
import config from "../../config";
import InputDetails from "./InputDetails";

export default function TableBody(props) {
  const { transactions } = props;

  return (
    <Tbody>
      {transactions.map((transaction) => (
        <Tr key={transaction.hash}>
          <Td>
            <Hash
              baseUrl={config.ETHERSCAN_TX_BASE_URL}
              hash={transaction.hash}
            />
          </Td>
          <Td>
            <InputDetails transaction={transaction} />
          </Td>
          <Td>
            <Tooltip label={transaction.value}>
              <Box cursor={"pointer"}>
                {Number(transaction.value).toFixed(2)} Ether
              </Box>
            </Tooltip>
          </Td>
          <Td>{transaction.blockNo}</Td>
          <Td>
            <Hash
              hash={transaction.from}
              baseUrl={config.ETHERSCAN_ADDRESS_BASE_URL}
            />
          </Td>
          <Td>{getTimeElapsed(transaction.timestamp)}</Td>
        </Tr>
      ))}
    </Tbody>
  );
}
