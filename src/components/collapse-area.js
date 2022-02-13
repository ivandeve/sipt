import { useContext, useState } from "react";
import { Box, Text, Collapse, ScaleFade, Button } from "@chakra-ui/react";
import { SIPTContext } from "context/context";
import { setTableBottomData } from "context/action";

const BoxCollapse = ({ isOpen, title, ...rest }) => {
  return (
    <Box display="flex" alignItems="center" w="full" h="32px" {...rest}>
      <Text
        fontSize="sm"
        mx="auto"
        position="relative"
        left="35px"
        color="text.700"
      >
        {title}
      </Text>

      <Text fontSize="sm" ml="auto" mr="3" color="text.700">
        {isOpen ? "-" : "+"}
      </Text>
    </Box>
  );
};

const ListVillage = ({ name, ...rest }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb="3"
    >
      <Text color="text.700" fontSize="sm">
        {name}
      </Text>

      <Button colorScheme="primary" size="xs" {...rest}>
        Lihat Peta
      </Button>
    </Box>
  );
};

const CollapseArea = () => {
  const { state, dispatch } = useContext(SIPTContext);

  const [openKab, setOpenKab] = useState(false);
  const [activeKec, setActiveKec] = useState(null);

  return (
    <Box>
      <BoxCollapse
        bg="warning.500"
        isOpen={openKab}
        title="Kabupaten Semarang"
        onClick={() => setOpenKab(!openKab)}
      />

      <Collapse in={openKab}>
        <Box p="2">
          {state?.affectedArea?.hierarki_list?.map((hierarki) => (
            <>
              <BoxCollapse
                bg="#E3ECF9"
                title={`Kecamatan ${hierarki?.kecamatan_name}`}
                isOpen={activeKec === hierarki?.kecamatan_name}
                onClick={() => setActiveKec(hierarki?.kecamatan_name)}
              />

              <Collapse in={activeKec === hierarki?.kecamatan_name}>
                <Box px="2" py="4">
                  {activeKec === hierarki?.kecamatan_name &&
                    hierarki?.village?.map((vill) => (
                      <ListVillage
                        name={vill}
                        onClick={() => dispatch(setTableBottomData(vill))}
                      />
                    ))}
                </Box>
              </Collapse>
            </>
          ))}
        </Box>
      </Collapse>
    </Box>
  );
};

export default CollapseArea;
