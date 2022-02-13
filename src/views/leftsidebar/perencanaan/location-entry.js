import { useContext } from "react";
import {
  ScaleFade,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { SIPTContext } from "context/context";
import EmptyData from "components/empty-data";
import { setAffectedArea, setLayers } from "context/action";
import { uniqueArray } from "utils/helper";

const LocationEntry = () => {
  const { state, dispatch } = useContext(SIPTContext);

  const payload = {
    province: "Jawa Tengah",
    city: "Kabupaten Semarang",
    kecamatan: uniqueArray(
      state.layers?.features?.map((feature) => feature?.properties?.KECAMATAN)
    ),
    village: uniqueArray(
      state.layers?.features?.map((feature) => feature?.properties?.KELURAHAN)
    ),
    hierarki_list: uniqueArray(
      state.layers?.features?.map((feature) => ({
        kecamatan_name: feature?.properties?.KECAMATAN,
        village: uniqueArray(
          state.layers?.features
            ?.filter(
              (feature2) =>
                feature2.properties.KECAMATAN === feature?.properties?.KECAMATAN
            )
            ?.map((feature) => feature?.properties?.KELURAHAN)
        ),
      }))
    ),
  };

  const kecAffectedArea = uniqueArray(
    state.layers?.features?.map((feature) => feature?.properties?.KECAMATAN)
  );

  const villageAffectedArea = uniqueArray(
    state.layers?.features?.map((feature) => feature?.properties?.KELURAHAN)
  );

  return (
    <Box pb="10">
      {!state.layers && <EmptyData text="Anda belum mengunggah peta" />}
      <ScaleFade in={state?.layers}>
        <Box px="3">
          <FormControl mb="5">
            <FormLabel>Pilih Provinsi</FormLabel>
            <Input value="Jawa Tengah" readOnly />
          </FormControl>

          <FormControl mb="5">
            <FormLabel>Pilih Kabupaten</FormLabel>
            <Input value="Kabupaten Semarang" readOnly />
          </FormControl>

          <FormControl mb="5">
            <FormLabel>Pilih Kecamatan</FormLabel>
            <Input value={kecAffectedArea?.join(",\n")} readOnly />
          </FormControl>

          <FormControl mb="5">
            <FormLabel>Pilih Desa</FormLabel>
            <Input value={villageAffectedArea?.join(",\n")} readOnly />
          </FormControl>

          <FormControl>
            <Button
              w="45%"
              h="45px"
              type="button"
              colorScheme="danger"
              mr="2"
              onClick={() => {
                dispatch(setLayers(null));
                dispatch(setAffectedArea(null));
              }}
            >
              Batal
            </Button>

            <Button
              w="45%"
              h="45px"
              type="button"
              colorScheme="primary"
              onClick={() => dispatch(setAffectedArea(payload))}
            >
              Pilih
            </Button>
          </FormControl>
        </Box>
      </ScaleFade>
    </Box>
  );
};

export default LocationEntry;
