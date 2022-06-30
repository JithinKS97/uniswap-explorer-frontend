import React, { useEffect, useState } from "react";
import { Spinner } from "@chakra-ui/react";
import { getTokenName } from "../contract";

export default function TokenName(props) {
  const { address } = props;
  const [tokenName, setTokenName] = useState("");

  useEffect(() => {
    getTokenName(address).then((tokenName) => {
      setTokenName(tokenName);
    });
  }, [address]);

  if (tokenName) {
    return tokenName;
  } else {
    return <Spinner ml='2rem' size='sm' />;
  }
}
