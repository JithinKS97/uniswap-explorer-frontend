import React from "react";
import { Box } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import TableHeaders from "./TableHeaders";
import TableBody from "./Tablebody";

export default function Transaction(props) {
  const { transactions } = props;

  return (
    <TableContainer mt='2rem'>
      <Table variant='simple'>
        <TableHeaders />
        <TableBody transactions={transactions} />
      </Table>
    </TableContainer>
  );
}
