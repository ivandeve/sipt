import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import Imagelogin from "../../assets/login.png";
import Imagesipt from "../../assets/sipt.png";
export default function Login() {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack>
        <Box
          display="flex"
          flexDirection="row"
          width="850px"
          height="550px"
          rounded={"2xl"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
        >
          <Stack flex={1}>
            <Image
              src={Imagelogin}
              alt="gambarlogin"
              objectFit="cover"
              width="100%"
              height="100%"
              borderTopLeftRadius="2xl"
              borderBottomLeftRadius="2xl"
            />
          </Stack>
          <Stack flex={1} justifyContent="center">
            <Stack spacing={4} p={8}>
              <Stack alignItems="center">
                <Image mb={2} src={Imagesipt} alt="gambarsipt" width="235px" />
                <Text>Silakan Login</Text>
              </Stack>
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Button
                  bg={"green.400"}
                  color={"white"}
                  _hover={{
                    bg: "green.500",
                  }}
                >
                  Login
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
