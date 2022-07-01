import React from "react";
import { Box, Button } from "@chakra-ui/react";
import Menu from "./Menu";
import Link from "next/link";

export default function index(props) {
  const { selectedTime, onTimeChange, onRefreshClick } = props;

  return (
    <Box
      display={"flex"}
      justifyContent='space-between'
      padding-bottom={"0"}
      padding='1.5rem 0'>
      <Box>
        <a
          rel='noreferrer'
          target={"_blank"}
          href='https://ropsten.etherscan.io/address/0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'>
          <Button>Uniswap contract</Button>
        </a>
      </Box>
      <Box>
        <Button onClick={onRefreshClick} marginRight='1rem'>
          Refresh
        </Button>
        <Menu onTimeChange={onTimeChange} selectedTime={selectedTime} />
      </Box>
    </Box>
  );
}
