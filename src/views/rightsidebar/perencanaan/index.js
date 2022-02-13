import { useContext, useEffect, useState } from "react";
import {
  Box,
  Divider,
  Stack,
  Text,
  Button,
  Icon,
  useDisclosure,
  SlideFade,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import fileDownload from "js-file-download";
import { SIPTContext } from "context/context";
import PlusIcon from "icons/plus";
import AffectedArea from "./affected-area";
import SendIcon from "icons/send";
import ModalPerencanaan from "./modal-perencanaan";
import AlertDialog from "components/alert-dialog";

const PerencanaanView = () => {
  const navigate = useNavigate();

  const { state } = useContext(SIPTContext);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenAlert,
    onOpen: onOpenAlert,
    onClose: onCloseAlert,
  } = useDisclosure();

  const [documentResult, setDocumentResult] = useState(null);

  const handleCreateDocument = (values) => {
    onClose();
    onOpenAlert();
    setDocumentResult(values);

    setTimeout(() => {
      onCloseAlert();
    }, 1500);
  };

  const handleDownloadFile = () => {
    const file = documentResult?.file;

    const blobFile = new Blob([file?.[0]], { type: file?.[0]?.type });

    fileDownload(blobFile, file?.[0]?.name);
  };

  useEffect(() => {
    if (!state?.layers) {
      setDocumentResult(null);
    }
  }, [state.layers]);

  return (
    <Box>
      <AffectedArea />

      <Divider />

      <Stack py="5" alignItems="center" spacing={5}>
        <Text textAlign="center" color="secondary.500">
          Dokumen Perencanaan Pengadaan Tanah belum dapat dibuat
        </Text>

        <Button
          d="flex"
          h="60px"
          shadow="lg"
          w="85%"
          bg="#FF7A00"
          borderRadius="100px"
          isDisabled={!state?.affectedArea}
        >
          <Icon marginRight="auto" as={PlusIcon} />
          <Text color="white" fontSize="lg" mx="auto" onClick={onOpen}>
            Buat DPPT
          </Text>
        </Button>

        {documentResult && (
          <SlideFade in={documentResult}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="xs" color="secondary.500">
                {String(documentResult?.file?.[0]?.name).length > 9
                  ? `${String(
                      documentResult?.file?.[0]?.name.substring(0, 9)
                    )}...`
                  : String(documentResult?.file?.[0]?.name)}
                .pdf
              </Text>

              <Stack direction="row" ml="4" spacing={1} alignItems="center">
                <Box
                  color="white"
                  fontSize="xs"
                  textAlign="center"
                  w="53px"
                  h="18px"
                  bg="primary.500"
                  fontSize="11px"
                  fontWeight={400}
                  as={Button}
                  borderRadius="0"
                  onClick={onOpen}
                >
                  Edit
                </Box>
                <Box
                  fontSize="11px"
                  fontWeight={400}
                  textAlign="center"
                  w="60px"
                  h="18px"
                  color="white"
                  bg="#FF7A00"
                  as={Button}
                  borderRadius="0"
                  onClick={handleDownloadFile}
                >
                  Download
                </Box>
              </Stack>
            </Box>
          </SlideFade>
        )}

        <Button
          d="flex"
          h="60px"
          shadow="lg"
          w="85%"
          bg="white"
          borderRadius="100px"
          isDisabled={!documentResult}
          onClick={() => navigate("/persiapan", { replace: true })}
          border={!documentResult ? "1px solid #C4C4C4" : "1px solid #FD5631"}
        >
          <Icon
            as={SendIcon}
            marginRight="auto"
            fillColor={documentResult ? "#FD5631" : "#C4C4C4"}
          />
          <Text
            color={!documentResult ? "#C4C4C4" : "#FD5631"}
            fontSize="lg"
            mx="auto"
          >
            Selanjutnya
          </Text>
        </Button>
      </Stack>

      <ModalPerencanaan
        isOpen={isOpen}
        onClose={onClose}
        defaultValue={documentResult}
        handleCreateDocument={handleCreateDocument}
      />

      <AlertDialog isOpen={isOpenAlert} onClose={onCloseAlert} />
    </Box>
  );
};

export default PerencanaanView;
