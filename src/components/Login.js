import React from 'react';
import { useState } from "react";
import {
  Flex,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Image,
  FormControl,
  InputRightElement
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import logo from "../logo.png";
const Login = props => {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowClick = () => setShowPassword(!showPassword);
    return (
        <Flex
        flexDirection="column"
        width="100wh"
        height="100vh"
        backgroundColor="base.900"
        justifyContent="center"
        alignItems="center"
        
      >
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
          borderWidth="1px" borderRadius="lg" overflow="hidden"
        >
         
          <Box minW={{ base: "90%", md: "468px" }}>
            <form>
              <Stack
                spacing={4}
                p="1rem"
                backgroundColor="whiteAlpha.900"
                boxShadow="md"
              >
                  <Box minW={{ base: "90%", md: "468px" }} align="center">
                  <Image height="70px" src={logo} />
                  </Box>
                
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<FaUserAlt color="primary" />}
                    />
                    <Input type="email" placeholder="email address" />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="primary"
                      children={<FaLock color="primary" />}
                    />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Button
                  borderRadius={0}
                  type="submit"
                  variant="ghost"
                  color="white"
                  bg="primary.800"
                  width="full"
                >
                  Login
                </Button>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    )
}

Login.propTypes = {

}

export default Login