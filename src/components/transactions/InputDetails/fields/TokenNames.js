import React, { useEffect, useState } from "react";
import { Spinner } from "@chakra-ui/react";
import { getTokenNames } from "../contract";

export default function TokenNames(props) {
  const { addresses } = props;
  const [tokenNames, setTokenNames] = useState([]);

  useEffect(() => {
    getTokenNames(addresses).then((tokenNames) => {
      setTokenNames(tokenNames);
    });
  }, [addresses]);

  if (tokenNames.length > 0) {
    return JSON.stringify(tokenNames);
  } else {
    return <Spinner ml='2rem' size='sm' />;
  }
}
