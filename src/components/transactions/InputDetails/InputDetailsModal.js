import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import InputDetailsTable from "./InputDetailsTable";
function InputDetailsModal(props) {
  const { isOpen, onClose, transaction } = props;
  return (
    <>
      <Modal size={"5xl"} isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{transaction.method}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <InputDetailsTable input={transaction.input} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default InputDetailsModal;
