import React, { useEffect, useState } from "react";
import { Box, Center } from "@chakra-ui/react";
import { getTokenNames } from "./contract";
import { Spinner } from "@chakra-ui/react";

export default function InputDetailsTable(props) {
  const { input } = props;
  const [tokenNames, setTokenNames] = useState([]);

  const inputNames = Object.keys(input);

  useEffect(() => {
    const path = input["path"];
    if (path) {
      console.log(path);
      getTokenNames(path).then((tokenNames) => {
        setTokenNames(tokenNames);
      });
    }
  }, [input]);

  const getValue = (inputName) => {
    if (inputName === "path") {
      if (tokenNames.length > 0) {
        return JSON.stringify(tokenNames);
      } else {
        return (
          <Center pt='0.5rem' w='10rem'>
            <Spinner size={"sm"} />
          </Center>
        );
      }
    } else {
      return JSON.stringify(input[inputName]);
    }
  };

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
            <Box>{getValue(inputName)}</Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
