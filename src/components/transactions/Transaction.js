import React from "react";
import { Box } from "@chakra-ui/react";

export default function Transaction(props) {
  const { transaction } = props;

  return (
    <Box mt='1.5rem' w='50vw' p='2rem' border='1px solid #555'>
      {transaction.hash}
    </Box>
  );
}
