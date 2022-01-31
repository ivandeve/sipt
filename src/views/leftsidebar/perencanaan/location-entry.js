import { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  SlideFade,
} from "@chakra-ui/react";
import { AsyncSelect } from "chakra-react-select";
import { SIPTContext } from "context/context";
import EmptyData from "components/empty-data";

const LocationEntry = () => {
  const {
    watch,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { state } = useContext(SIPTContext);

  const watchProvince = watch("province", null);
  const watchCity = watch("city", null);
  const watchKecamatan = watch("kecamatan", null);

  const handleChooseArea = (values) => {
    console.log(values, "HERE");
  };

  const handleReqProvince = async (values) => {
    const { data: req } = await fetch(
      `https://api-development.istudios.id/v1/provinsi?filter{nama_provinsi.icontains}=${values}`
    ).then((res) => res.json());

    return req.map((province) => ({
      label: province.nama_provinsi,
      value: province.nama_provinsi,
      id: province.id,
    }));
  };

  const handleReqCity = async (values) => {
    const { data: req } = await fetch(
      `https://api-development.istudios.id/v1/kabkota?provinsi=${watchProvince?.id}&filter{nama_kab_kota.icontains}=${values}`
    ).then((res) => res.json());

    return req.map((city) => ({
      label: city.nama_kab_kota,
      value: city.nama_kab_kota,
      id: city.id,
    }));
  };

  const handleReqKecamatan = async (values) => {
    const { data: req } = await fetch(
      `https://api-development.istudios.id/v1/kecamatan?kabkota=${watchCity?.id}&filter{nama_kecamatan.icontains}=${values}`
    ).then((res) => res.json());

    return req.map((kecamatan) => ({
      label: kecamatan.nama_kecamatan,
      value: kecamatan.nama_kecamatan,
      id: kecamatan.id,
    }));
  };

  const handleReqVillage = async (values) => {
    const { data: req } = await fetch(
      `https://api-development.istudios.id/v1/desa?kecamatan=${watchKecamatan?.id}&filter{nama_desa.icontains}=${values}`
    ).then((res) => res.json());

    return req.map((village) => ({
      label: village.nama_desa,
      value: village.nama_desa,
      id: village.id,
    }));
  };

  return (
    <Box pb="10">
      {!state.layers && <EmptyData text="Anda belum mengunggah peta" />}

      <SlideFade in={state.layers}>
        <Box px="3" onSubmit={handleSubmit(handleChooseArea)} as="form">
          <FormControl mb="5" isInvalid={errors?.province}>
            <FormLabel>Pilih Provinsi</FormLabel>
            <Controller
              name="province"
              control={control}
              defaultValue={null}
              rules={{ required: true }}
              render={({ field: { onChange } }) => (
                <AsyncSelect
                  defaultOptions
                  cacheOptions
                  loadOptions={handleReqProvince}
                  onChange={(val) => onChange(val)}
                />
              )}
            />

            {errors?.province && (
              <FormErrorMessage>Pilih Provinsi !</FormErrorMessage>
            )}
          </FormControl>

          <FormControl mb="5" isInvalid={errors?.city}>
            <FormLabel>Pilih Kabupaten</FormLabel>
            <Controller
              name="city"
              control={control}
              defaultValue={null}
              rules={{ required: true }}
              key={!!watchProvince ? watchProvince : null}
              render={({ field: { onChange } }) => (
                <AsyncSelect
                  cacheOptions
                  defaultOptions
                  loadOptions={handleReqCity}
                  onChange={(val) => onChange(val)}
                />
              )}
            />
            {errors?.city && (
              <FormErrorMessage>Pilih Labupaten !</FormErrorMessage>
            )}
          </FormControl>

          <FormControl mb="5" isInvalid={errors?.kecamatan}>
            <FormLabel>Pilih Kecamatan</FormLabel>
            <Controller
              name="kecamatan"
              control={control}
              defaultValue={null}
              rules={{ required: true }}
              key={!!watchCity ? watchCity : null}
              render={({ field: { onChange } }) => (
                <AsyncSelect
                  cacheOptions
                  defaultOptions
                  loadOptions={handleReqKecamatan}
                  onChange={(val) => onChange(val)}
                />
              )}
            />
            {errors?.kecamatan && (
              <FormErrorMessage>Pilih Kecamatan !</FormErrorMessage>
            )}
          </FormControl>

          <FormControl mb="5" isInvalid={errors?.village}>
            <FormLabel>Pilih Desa</FormLabel>
            <Controller
              name="village"
              control={control}
              defaultValue={null}
              rules={{ required: true }}
              key={!!watchKecamatan ? watchKecamatan : null}
              render={({ field: { onChange } }) => (
                <AsyncSelect
                  cacheOptions
                  defaultOptions
                  loadOptions={handleReqVillage}
                  onChange={(val) => onChange(val)}
                />
              )}
            />

            {errors?.village && (
              <FormErrorMessage>Pilih Desa !</FormErrorMessage>
            )}
          </FormControl>

          <FormControl>
            <Button w="45%" h="45px" type="button" colorScheme="danger" mr="2">
              Batal
            </Button>

            <Button w="45%" h="45px" type="submit" colorScheme="primary">
              Pilih
            </Button>
          </FormControl>
        </Box>
      </SlideFade>
    </Box>
  );
};

export default LocationEntry;
