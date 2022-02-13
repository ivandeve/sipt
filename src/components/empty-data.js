import { Image, Stack, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import EmptyImage from "assets/png/empty.png";

const EmptyData = ({ text }) => {
  return (
    <Stack p="4" spacing={4}>
      <Text px="3" textAlign="center" color="#5E6F7A">{text}</Text>

      <Image src={EmptyImage} alt="EmptyData" />
    </Stack>
  );
};

EmptyData.propTypes = {
  text: PropTypes.string,
};

export default EmptyData;
