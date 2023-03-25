import React from "react";
import {
  Text,
  Modal,
  ModalOverlay,
  Button,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  CircularProgress,
} from "@chakra-ui/react";

const KeywordsModal = ({ keywords, loading, isOpen, closeModal }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" alignItems="center" justifyContent="center">
            {" "}
            {loading ? (
              <CircularProgress isIndeterminate color="blue.300" />
            ) : (
              <Text>{keywords}</Text>
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={closeModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default KeywordsModal;