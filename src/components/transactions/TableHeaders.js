import React from "react";
import { Thead, Tr, Th } from "@chakra-ui/react";

export default function TableHeaders() {
  return (
    <Thead top='0' position={"sticky"}>
      <Tr>
        <Th>Txn hash</Th>
        <Th>Value</Th>
        <Th>Block number</Th>
        <Th>From</Th>
        <Th>Time elapsed</Th>
      </Tr>
    </Thead>
  );
}
