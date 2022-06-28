import React from "react";
import { Box, Button, Center, Heading, HStack, VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../../context/WithAuth";
import { useMetaMask } from "metamask-react";
import { Tooltip } from "@chakra-ui/react";
import { getTrimmedWord } from "../../utils";

export default function Topbar(props) {
  const { heading } = props;
  const { logout } = useContext(AuthContext);
  const { account } = useMetaMask();

  const trimmedAccount = getTrimmedWord(account, 3, 3);

  return (
    <Box
      position='relative'
      height='9vh'
      backgroundColor='gray.900'
      padding={"1rem"}>
      <Center
        display={"flex"}
        flexDirection='column'
        h='100%'
        position={"absolute"}
        top='0'
        left='1rem'>
        <Box>Logged in with account</Box>
        <Tooltip label={account}>
          <Box cursor={"pointer"} fontSize={"12"}>
            {trimmedAccount}
          </Box>
        </Tooltip>
      </Center>
      <Center>
        <Heading>{heading}</Heading>
      </Center>
      <Center position={"absolute"} h='100%' top='0' right='1rem'>
        <Button onClick={logout}>Logout</Button>
      </Center>
    </Box>
  );
}
