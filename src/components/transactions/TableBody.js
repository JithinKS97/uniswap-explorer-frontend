import React from "react";
import { Tbody, Tr, Td, Box } from "@chakra-ui/react";
import { getTimeElapsed, getLettersAtTheBeginning } from "../../utils";
import { Tooltip } from "@chakra-ui/react";
import Hash from "./hash";
import config from "../../config";

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
            <Tooltip label={transaction.method}>
              <Box cursor={"pointer"}>
                {getLettersAtTheBeginning(transaction.method, 15, 3)}
              </Box>
            </Tooltip>
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
