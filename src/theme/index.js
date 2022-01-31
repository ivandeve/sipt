import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { overrides } from "./overrides";

const theme = extendTheme(overrides);

export const SIPTTheme = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

SIPTTheme.propTypes = {
  children: PropTypes.node,
};
