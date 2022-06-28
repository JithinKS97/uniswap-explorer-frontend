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
      <Center>
        <VStack position={"absolute"} left='1rem' top='1rem'>
          <Box>Logged in with account</Box>
          <Tooltip label={account}>
            <Box cursor={"pointer"} fontSize={"12"}>
              {trimmedAccount}
            </Box>
          </Tooltip>
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
