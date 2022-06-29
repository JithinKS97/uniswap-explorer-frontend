import React from "react";
import { Tooltip, Box } from "@chakra-ui/react";
import { getLettersAtTheEnds } from "../../utils";

export default function hash(props) {
  const { hash, baseUrl } = props;
  return (
    <Tooltip label={hash}>
      <a target='_black' href={`${baseUrl}/${hash}`}>
        <Box _hover={{ color: "#90CDF4" }} cursor='pointer'>
          {getLettersAtTheEnds(hash, 5, 3)}
        </Box>
      </a>
    </Tooltip>
  );
}
