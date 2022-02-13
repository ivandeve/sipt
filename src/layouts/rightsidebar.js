import { Box } from "@chakra-ui/react";
import PerfectScrollBar from "react-perfect-scrollbar";

const RightSidebar = ({ children, flex }) => {
  return (
    <Box ml="0 !important" overflowX="hidden" overflowY="auto" flex={flex}>
      <PerfectScrollBar>{children}</PerfectScrollBar>
    </Box>
  );
};

export default RightSidebar;
