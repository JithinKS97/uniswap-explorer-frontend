import React from "react";
import { Center, Button } from "@chakra-ui/react";
import Link from "next/link";

export default function index() {
  return (
    <Center h='100vh'>
      <Link href='/transactions'>
        <Button>Enter the app</Button>
      </Link>
    </Center>
  );
}
