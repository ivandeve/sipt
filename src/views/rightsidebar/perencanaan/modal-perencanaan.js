import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  FormErrorMessage,
  Text,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";

const ModalPerencanaan = ({ isOpen, onClose, handleCreateDocument }) => {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const watchFileName = watch("file", null)?.[0]?.name;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl" isCentered motionPreset="slideInBottom">
      {/* <ModalOverlay /> */}

      <Box onSubmit={handleSubmit(handleCreateDocument)} as="form">
        <ModalContent mt="32" height="80vh">
          <ModalHeader
            mt="10px"
            textAlign="center"
            fontWeight={400}
            fontSize="1rem"
            mb="25px"
          >
            DOKUMEN PERENCANAAN PENGADAAN TANAH
          </ModalHeader>

          <ModalBody height="500px" overflow="auto">
            <Box p="10" as={PerfectScrollbar}>
              <FormControl isInvalid={errors?.maksud_dan_tujuan}>
                <FormLabel fontWeight={400} fontSize="sm">
                  Maksud dan Tujuan
                </FormLabel>

                <Textarea
                  h="162px"
                  fontSize="sm"
                  colorScheme="primary"
                  {...register("maksud_dan_tujuan", { required: true })}
                />

                {errors?.maksud_dan_tujuan && (
                  <FormErrorMessage>Masukan Maksud dan Tujuan</FormErrorMessage>
                )}
              </FormControl>

              <Box mt="3">
                <Text fontWeight={400} fontSize="sm" mb="3">
                  Kesesuaian Kegiatan Pemanfaatan Ruang:
                </Text>

                <Box>
                  <FormControl mb="3" isInvalid={errors?.file}>
                    <FormLabel px="3" fontWeight={400} fontSize="sm">
                      Unggah Peta Kesesuaian Kegiatan Pemanfaatan Ruang
                    </FormLabel>

                    <Input
                      hidden
                      type="file"
                      id="fileMapRuang"
                      accept=".json,.geojson,.topojson"
                      {...register("file", { required: true })}
                    />

                    <InputGroup>
                      <InputLeftAddon bg="transparent" borderRight="0">
                        <Button
                          size="sm"
                          colorScheme="primary"
                          onClick={() =>
                            document.getElementById("fileMapRuang").click()
                          }
                        >
                          Unggah
                        </Button>
                      </InputLeftAddon>

                      <Input
                        borderLeft="0"
                        fontSize="sm"
                        value={watchFileName}
                        readOnly
                      />
                    </InputGroup>

                    {errors?.file && (
                      <FormErrorMessage>
                        Masukan Peta Kesesuaian Kegiatan Pemanfaatan Ruang
                      </FormErrorMessage>
                    )}
                  </FormControl>

                  <FormControl isInvalid={errors?.prioritas_pembangunan}>
                    <FormLabel px="3" fontWeight={400} fontSize="sm">
                      Prioritas Pembangunan Nasional/Daerah
                    </FormLabel>

                    <Textarea
                      h="162px"
                      fontSize="sm"
                      colorScheme="primary"
                      {...register("prioritas_pembangunan", {
                        required: true,
                      })}
                    />

                    {errors?.prioritas_pembangunan && (
                      <FormErrorMessage>
                        Masukan Prioritas Pembangunan Nasional/Daerah
                      </FormErrorMessage>
                    )}
                  </FormControl>
                </Box>
              </Box>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              type="button"
              onClick={onClose}
              w="143px"
              h="45px"
              mr="3"
              colorScheme="danger"
            >
              Batal
            </Button>
            <Button type="submit" w="143px" h="45px" colorScheme="primary">
              Buat
            </Button>
          </ModalFooter>
        </ModalContent>
      </Box>
    </Modal>
  );
};

ModalPerencanaan.defaultProps = {
  handleCreateDocument: () => {},
};

ModalPerencanaan.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  handleCreateDocument: PropTypes.func.isRequired,
};

export default ModalPerencanaan;
