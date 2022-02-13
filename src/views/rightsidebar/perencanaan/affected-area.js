import { useContext } from "react";
import { Box, Flex } from "@chakra-ui/react";
import EmptyData from "components/empty-data";
import { SIPTContext } from "context/context";
import Legend from "components/legend";
import CollapseArea from "components/collapse-area";

const AffectedArea = () => {
  const { state } = useContext(SIPTContext);

  return (
    <Box h="380px">
      {state?.affectedArea ? (
        <Box>
          <Flex flexWrap="wrap" p="3" direction="row">
            <Legend type="kabupaten" text="1 Kabupaten" />
            <Legend
              type="kecamatan"
              text={`${
                state?.affectedArea?.kecamatan?.length ?? "0"
              } Kecamatan`}
            />
            <Legend
              type="desa"
              text={`${state?.affectedArea?.village?.length ?? "0"} Desa`}
            />
            <Legend
              type="bidang"
              text={`${state?.layers?.features?.length ?? "0"} Bidang`}
            />
          </Flex>

          <CollapseArea />
        </Box>
      ) : (
        <EmptyData text="Anda belum memilih wilayah terdampak" />
      )}
    </Box>
  );
};

export default AffectedArea;
