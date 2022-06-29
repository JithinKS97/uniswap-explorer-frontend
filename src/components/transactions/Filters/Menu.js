import React from "react";
import { Box } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

export default function index() {
  return (
    <Menu>
      <MenuButton as={Button}>Actions</MenuButton>
      <MenuList>
        <MenuItem>1 hour ago</MenuItem>
        <MenuItem>6 hours ago</MenuItem>
        <MenuItem>12 hours ago</MenuItem>
        <MenuItem>1 day ago</MenuItem>
      </MenuList>
    </Menu>
  );
}
