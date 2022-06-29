import React from "react";
import { Center, Spinner } from "@chakra-ui/react";

export default function loading() {
  return (
    <Center h='65vh'>
      <Spinner />
    </Center>
  );
}
