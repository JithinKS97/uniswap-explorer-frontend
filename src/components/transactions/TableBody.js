import React from "react";
import { Tbody, Tr, Td, Box } from "@chakra-ui/react";
import {
  getLettersAtTheEnds,
  getTimeElapsed,
  getLettersAtTheBeginning,
} from "../../utils";
import { Tooltip } from "@chakra-ui/react";
import Link from "next/link";
import config from "../../config";

export default function TableBody(props) {
  const { transactions } = props;

  return (
    <Tbody>
      {transactions.map((transaction) => (
        <Tr key={transaction.hash}>
          <Td>
            <Tooltip label={transaction.hash}>
              <a
                target={"_blank"}
                href={`${config.ETHERSCAN_TX_BASE_URL}/${transaction.hash}`}
                rel='noreferrer'>
                <Box _hover={{ color: "#90CDF4" }} cursor='pointer'>
                  {getLettersAtTheEnds(transaction.hash, 5, 3)}
                </Box>
              </a>
            </Tooltip>
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
            <Tooltip label={transaction.from}>
              <a
                target='_black'
                href={`${config.ETHERSCAN_ADDRESS_BASE_URL}/${transaction.from}`}>
                <Box _hover={{ color: "#90CDF4" }} cursor='pointer'>
                  {getLettersAtTheEnds(transaction.from, 5, 3)}
                </Box>
              </a>
            </Tooltip>
          </Td>
          <Td>{getTimeElapsed(transaction.timestamp)}</Td>
        </Tr>
      ))}
    </Tbody>
  );
}
