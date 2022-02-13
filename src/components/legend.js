import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { LEGEND_TYPE } from "utils";

const Legend = ({ type, text }) => {
  const legend = LEGEND_TYPE.find((lgn) => lgn.name === type);

  return (
    <Flex mr="3" pb="3" direction="row" alignItems="center">
      <Box borderRadius="full" mr="2" w="14px" h="14px" bg={legend.color} />

      <Text fontSize=".80rem" color="secondary.500">
        {text}
      </Text>
    </Flex>
  );
};

Legend.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
};

export default Legend;
