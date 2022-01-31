import { useContext, useEffect, useState } from "react";
import { Button, Text, Box, Icon, Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { SIPTContext } from "context/context";
import { setLayers } from "context/action";
import LocationEntry from "./location-entry";
import PlusIcon from "icons/plus";

const PerencanaanView = () => {
  const { register, watch } = useForm();
  const { dispatch } = useContext(SIPTContext);

  const watchMapsUploaded = watch("upload-maps", null);

  const [hasUploaded, setHasUploaded] = useState(false);

  console.log(watchMapsUploaded, "HERE");

  const handleReaderGEOJSON = (files) => {
    const geojsonData = files[0];

    const fileReader = new FileReader();

    fileReader.readAsText(geojsonData, "UTF-8");

    fileReader.onload = (event) => {
      const jsonData = JSON.parse(event.target.result);

      setHasUploaded(true);
      dispatch(setLayers(jsonData));
    };
  };

  const handleUploadSig = () => document.getElementById("upload-maps").click();

  useEffect(() => {
    if (watchMapsUploaded && watchMapsUploaded?.length > 0) {
      handleReaderGEOJSON(watchMapsUploaded);
    }
  }, [watchMapsUploaded]);

  return (
    <Box display="block" w="full">
      <Stack py="5" px="2" spacing={5}>
        <Text textAlign="center">
          Silakan Unggah Peta Perencanaan Pembangunan
        </Text>

        <Button
          d="flex"
          h="60px"
          shadow="lg"
          colorScheme="info"
          borderRadius="100px"
          isDisabled={hasUploaded}
          onClick={handleUploadSig}
        >
          <Icon marginRight="auto" as={PlusIcon} />
          <Text mx="auto">Unggah Peta</Text>
          <input
            hidden
            type="file"
            accept=".geojson"
            id="upload-maps"
            {...register("upload-maps")}
          />
        </Button>

        {watchMapsUploaded && <Text>{watchMapsUploaded?.[0]?.name}</Text>}
      </Stack>

      <Stack spacing={3}>
        <Box
          px="3"
          justifyContent="center"
          display="flex"
          alignItems="center"
          fontSize="xs"
          textAlign="center"
          bg="warning.500"
          h="91px"
        >
          Wilayah Terdampak Pengadaan Tanah Pembangunan Jalan Tol Ruas
          Bawen-Ungaran Sesi 1 Tahun Anggaran 2021-2022
        </Box>

        <LocationEntry />
      </Stack>
    </Box>
  );
};

export default PerencanaanView;
