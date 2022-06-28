import React from "react";
import { Center, Button, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../../context/WithAuth";
import { getNonce } from "../../api/auth";
import { useMetaMask } from "metamask-react";

export default function Index() {
  const { status, connect, account, chainId, ethereum } = useMetaMask();

  const isConnectedToMetamask = status === "notConnected";

  const handleClick = async () => {
    let selectedAccount;
    if (isConnectedToMetamask) {
      const accounts = await connect();
      selectedAccount = accounts[0];
    } else {
      selectedAccount = account;
    }
    const res = await getNonce(selectedAccount);
  };

  return (
    <Center h='100vh'>
      <Center display={"flex"} flexDirection='column'>
        <Heading>Uniswap explorer</Heading>
        <Button onClick={handleClick} mt='1rem'>
          Login with metamask
        </Button>
      </Center>
    </Center>
  );
}
