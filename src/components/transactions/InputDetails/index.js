import React from "react";
import { Tooltip, Box } from "@chakra-ui/react";
import { getLettersAtTheBeginning } from "../../../utils";
import InputDetailsModal from "./InputDetailsModal";
import { useState } from "react";

export default function InputDetails(props) {
  const { transaction } = props;
  const [showInputDetails, setShowInputDetails] = useState(false);

  const handleShowClick = () => {
    setShowInputDetails(true);
  };

  const handleClose = () => {
    setShowInputDetails(false);
  };

  return (
    <>
      <InputDetailsModal
        transaction={transaction}
        onClose={handleClose}
        isOpen={showInputDetails}
      />
      <Tooltip label={transaction.method}>
        <Box
          onClick={handleShowClick}
          _hover={{ color: "#90CDF4" }}
          cursor={"pointer"}>
          {getLettersAtTheBeginning(transaction.method, 15, 3)}
        </Box>
      </Tooltip>
    </>
  );
}
