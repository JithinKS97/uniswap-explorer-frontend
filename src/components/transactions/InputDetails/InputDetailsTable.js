import React from "react";
import { Box } from "@chakra-ui/react";
import TokenNames from "./fields/TokenNames";
import TokenName from "./fields/TokenName";
import Hash from "../Hash";
import config from "../../../config";

export default function InputDetailsTable(props) {
  const { input } = props;

  const inputNames = Object.keys(input);

  const getValue = (inputName) => {
    if (inputName === "path") {
      return <TokenNames addresses={input["path"]} />;
    } else if (inputName.includes("token")) {
      return <TokenName address={input[inputName]} />;
    } else if (inputName === "to") {
      return (
        <Hash
          baseUrl={config.ETHERSCAN_ADDRESS_BASE_URL}
          hash={input[inputName]}
        />
      );
    } else {
      return input[inputName];
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
