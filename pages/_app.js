import "../styles/globals.css";
import * as React from "react";
import theme from "../src/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "../src/context/WithAuth";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
