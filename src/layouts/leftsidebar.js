import { Box } from "@chakra-ui/react";
import PerfectScrollBar from "react-perfect-scrollbar";

const LeftSidebar = ({ children, flex }) => {
  return (
    <Box overflowX="hidden" w="full" p="0" overflowY="auto" flex={flex}>
      <PerfectScrollBar>{children}</PerfectScrollBar>
    </Box>
  );
};

export default LeftSidebar;
