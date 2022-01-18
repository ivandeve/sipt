import { Box } from "@chakra-ui/react";

const RightSidebar = ({ children, flex }) => {
  return (
    <Box overflowX="hidden" overflowY="auto" flex={flex}>
      {children}
    </Box>
  );
};

export default RightSidebar;
