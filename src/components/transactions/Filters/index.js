import React from "react";
import { Box, Button } from "@chakra-ui/react";
import Menu from "./Menu";

export default function index() {
  return (
    <Box
      display={"flex"}
      justifyContent='right'
      padding-bottom={"0"}
      padding='1.5rem 0'>
      <Box>
        <Button marginRight='1rem'>Refresh</Button>
        <Menu />
      </Box>
    </Box>
  );
}
