import { useContext } from "react";
import {
  Slide,
  Box,
  Text,
  IconButton,
  Icon,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { SIPTContext } from "context/context";
import { setTableBottomData } from "context/action";
import CloseIcon from "icons/close";

const TableMap = ({ isOpen }) => {
  const { state, dispatch } = useContext(SIPTContext);

  const filterMapsDataExisting = state.layers?.features?.filter(
    (feature) => feature.properties.KELURAHAN === state?.tableBottomData
  );

  return (
    <Slide className="chakra-slide-custom" direction="bottom" in={isOpen}>
      <Box p="5" bg="white">
        <Box display="flex" alignItems="center">
          <Text
            mx="auto"
            left="13%"
            fontSize="sm"
            position="relative"
            textAlign="center"
          >
            Tabel Bidang Tanah
          </Text>

          <IconButton
            size="sm"
            ml="auto"
            variant="ghost"
            icon={<Icon w="15px" as={CloseIcon} />}
            onClick={() => dispatch(setTableBottomData(null))}
          />
        </Box>
      </Box>
      <Box p="5" h="250px" overflow="auto" bg="white">
        <PerfectScrollbar>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>No</Th>
                <Th>Nama Kantah</Th>
                <Th>Kecamatan</Th>
                <Th>Desa</Th>
                <Th>NIB</Th>
                <Th>Pemilik Terakhir</Th>
                <Th>Status Hak</Th>
                <Th>Estimasi Luas Terdampak</Th>
                <Th>Luas Total</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filterMapsDataExisting?.map((filterMap, idx) => (
                <Tr>
                  <Td>{idx + 1}.</Td>
                  <Td>Semarang</Td>
                  <Td>{filterMap?.properties?.KECAMATAN}</Td>
                  <Td>{filterMap?.properties?.KELURAHAN}</Td>
                  <Td>{filterMap?.properties?.NIB}</Td>
                  <Td>-</Td>
                  <Td>{filterMap?.properties?.TIPEHAK}</Td>
                  <Td>{filterMap?.properties?.LUASTERTUL}</Td>
                  <Td>{filterMap?.properties?.LUASTERTUL}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </PerfectScrollbar>
      </Box>
    </Slide>
  );
};

export default TableMap;
