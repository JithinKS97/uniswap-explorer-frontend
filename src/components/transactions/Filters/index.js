import React from "react";
import { Box, Button } from "@chakra-ui/react";
import Menu from "./Menu";

export default function index(props) {
  const { selectedTime, onTimeChange, onRefreshClick } = props;

  return (
    <Box
      display={"flex"}
      justifyContent='right'
      padding-bottom={"0"}
      padding='1.5rem 0'>
      <Box>
        <Button onClick={onRefreshClick} marginRight='1rem'>
          Refresh
        </Button>
        <Menu onTimeChange={onTimeChange} selectedTime={selectedTime} />
      </Box>
    </Box>
  );
}
