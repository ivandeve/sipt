import {
  Icon,
  Modal,
  ModalBody,
  ModalContent,
  Text,
  Stack,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import SuccessIcon from "icons/success";

const AlertDialog = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
      isCentered
      motionPreset="slideInBottom"
    >
      <ModalContent h="351px" borderRadius="3xl">
        <ModalBody
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={10}
          as={Stack}
        >
          <Text px="5" fontSize="lg" color="secondary.500" textAlign="center">
            Dokumen Perencanaan Pengadaan Tanah Telah Berhasil Dibuat
          </Text>

          <Icon as={SuccessIcon} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

AlertDialog.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default AlertDialog;
