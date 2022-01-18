import {
    Box,
    Flex,
    Button,
    Stack,
    Menu,
    MenuButton,
    Avatar,
    MenuList,
    MenuItem,
    useColorModeValue,
    Icon,
    Text,
  } from "@chakra-ui/react";
  import Logo from "../icons/logo";
  
  const Navbar = () => {
    return (
      <Box>
        <Flex
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={"80px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
          height="80px"
        >
          <Flex flex={ 0.1 } justify={{ base: "center", md: "start" }}>
            <Icon as={Logo} />
          </Flex>
          <Stack flex={{ base: 1 }} direction="row" justifyContent="center" spacing={"75px"} fontSize="16px">
              <Text color="#1F8FE5">
                  Perencanaan
              </Text>
              <Text>
                  Persiapan
              </Text>
              <Text>
                  Pelaksanaan
              </Text>
              <Text>
                  Penyerahan Hasil
              </Text>
          </Stack>
          <Stack
            flex={ 0.1 }
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <Flex alignItems={"center"}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"md"}
                    src={
                      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                    }
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Stack>
        </Flex>
      </Box>
    );
  };
  
  export default Navbar;
  