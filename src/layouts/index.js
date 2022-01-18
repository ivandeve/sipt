import { Box, Stack } from "@chakra-ui/react";
import LeftSidebar from "./leftsidebar";
import Navbar from "./navbar";
import RightSidebar from "./rightsidebar";

const Layouts = ({children, childrenLeftSidebar, childrenRightSidebar}) => {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" height="calc(100vh - 80px)">
          <LeftSidebar children={childrenLeftSidebar} flex={0.3}/>
          <Box flex={1} borderWidth="1px">
              {children}
          </Box>
          {childrenRightSidebar && <RightSidebar children={childrenRightSidebar} flex={0.3}/>}
      </Stack>
    </Box>
  );
};

export default Layouts;
