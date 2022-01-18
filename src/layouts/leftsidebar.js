import { Box } from "@chakra-ui/react";

const LeftSidebar = ({ children, flex }) => {
  return (
    <Box overflowX="hidden" overflowY="auto" flex={flex}>
      {children}
    </Box>
  );
};

export default LeftSidebar;
