import React from "react";
import { Center, Button, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../../context/WithAuth";
import { getNonce } from "../../api/auth";
import { useMetaMask } from "metamask-react";
import { verify } from "../../api/auth";

export default function Index() {
  const { status, connect, account } = useMetaMask();
  const { login } = useContext(AuthContext);

  const isConnectedToMetamask = status === "notConnected";

  const handleClick = async () => {
    let selectedAccount;
    if (isConnectedToMetamask) {
      const accounts = await connect();
      selectedAccount = accounts[0];
    } else {
      selectedAccount = account;
    }
    const nonce = await getNonce(selectedAccount);
    const authToken = await verify(nonce);
    login(authToken);
  };

  return (
    <Center h='100vh'>
      <Center display={"flex"} flexDirection='column'>
        <Heading>Uniswap explorer</Heading>
        <Button onClick={handleClick} mt='2rem'>
          Login with metamask
        </Button>
      </Center>
    </Center>
  );
}
