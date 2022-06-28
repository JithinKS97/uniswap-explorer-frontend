import React from "react";
import { Center, Button, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../../context/WithAuth";
import { getNonce } from "../../api/auth";

export default function Index() {
  const { isLoggedIn } = useContext(AuthContext);

  const handleClick = async () => {
    const res = await getNonce("address");
    console.log(res);
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
