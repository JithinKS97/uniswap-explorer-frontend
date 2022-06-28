import React from "react";
import { Box, Button, Center, Heading, HStack, VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../../context/WithAuth";
import { useMetaMask } from "metamask-react";

export default function Topbar(props) {
  const { heading } = props;
  const { logout } = useContext(AuthContext);
  let { account } = useMetaMask();

  account = getTrimmedAccount(account, 3);

  return (
    <Box
      position='relative'
      height='9vh'
      backgroundColor='gray.900'
      padding={"1rem"}>
      <Center>
        <VStack position={"absolute"} left='1rem' top='1rem'>
          <Box>Logged in with account</Box>
          <Box fontSize={"12"}>{account}</Box>
        </VStack>
      </Center>
      <Center>
        <Heading>{heading}</Heading>
      </Center>
      <Box>
        <Button onClick={logout} position={"absolute"} right='1rem' top='1rem'>
          Logout
        </Button>
      </Box>
    </Box>
  );
}

function getTrimmedAccount(account, noOfChars) {
  if (!account) {
    return "";
  }
  const starting = account.split("").slice(0, noOfChars).join("");
  const ending = account
    .split("")
    .slice(account.length - noOfChars, account.length)
    .join("");
  return starting + "..." + ending;
}
