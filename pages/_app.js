import "../styles/globals.css";
import * as React from "react";
import theme from "../src/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "../src/context/WithAuth";
import { MetaMaskProvider } from "metamask-react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <MetaMaskProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </MetaMaskProvider>
    </ChakraProvider>
  );
}

export default MyApp;
