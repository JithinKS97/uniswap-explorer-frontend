import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

const times = [1, 6, 12, 24, 48, 64];

export default function index(props) {
  const { selectedTime, onTimeChange } = props;

  return (
    <Menu>
      <MenuButton as={Button}>Last {selectedTime} hour</MenuButton>
      <MenuList>
        {times.map((time) => (
          <MenuItem onClick={onTimeChange} value={time} key={time}>
            Last {time} hour
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
