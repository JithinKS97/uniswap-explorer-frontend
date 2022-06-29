import React from "react";
import { VStack, Box } from "@chakra-ui/react";

export default function InputDetailsTable(props) {
  const { input } = props;

  const inputNames = Object.keys(input);

  return (
    <Box>
      {inputNames.map((inputName) => (
        <Box
          marginBottom='1rem'
          display={"flex"}
          flexDirection='row'
          justifyContent={"left"}
          key={inputName}>
          <Box flex='3'>{inputName}</Box>
          <Box
            maxWidth={"40rem"}
            flex='7'
            alignItems={"left"}
            marginLeft='3rem'
            float='left'>
            <Box>{JSON.stringify(input[inputName])}</Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
