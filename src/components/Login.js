import React from "react";
import { useState, useEffect } from "react";
import {
  Flex,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  Box,
  Image,
  FormControl,
  InputRightElement,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";
import { BsPersonFill, BsFillShieldLockFill } from "react-icons/bs";
import logo from "../logo.png";
import { login as loginUser } from "../APIServices";
import {useNavigate} from "react-router-dom";
const Login = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [emailId, setEmailId] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showAlert, setShowAlert] = React.useState(false);
  const [showEmailWarning, setShowEmailWarning] = React.useState(false);
  const [showPasswordWarning, setShowPasswordWarning] = React.useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);
  let navigate = useNavigate();
  const checkEmailFormat = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const checkPasswordLength = (password) => {
    return String(password).length>4;
  };

  const submit = async () => {
    let user = {
      emailId,
      password,
    };
    let response = await loginUser(user);
    if (response && response.accessToken) {
      localStorage.setItem("accessToken", response.accessToken);
      // Redirect to dashboard
      navigate('/dashboard');
    } else {
      setShowAlert(true);
      console.log("error");
      navigate('/');
      // Redirect to login
    }
  };
  useEffect(() => {
    const validateEmailId = (email) => {
      if (!checkEmailFormat(email) && emailId) {
        setShowEmailWarning(true);
      } else {
        setShowEmailWarning(false);
      }
    };

    validateEmailId(emailId);
  }, [emailId]);
  useEffect(() => {
    const validatePassword = (password) => {
      if (!checkPasswordLength(password) && password) {
        setShowPasswordWarning(true);
      } else {
        setShowPasswordWarning(false);
      }
    };
    validatePassword(password);
  }, [password]);
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
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
      >
        <Box maxW={{ base: "90%", md: "468px" }}>
          {showAlert ? (
            <Alert status="error">
              <AlertIcon />
              <Box flex="1">
                <AlertTitle>Please try again...</AlertTitle>
                <AlertDescription display="block">
                  The email and password you entered did not match our records.
                  Please double-check and try again.
                </AlertDescription>
              </Box>
              <CloseButton position="absolute" right="8px" top="8px" />
            </Alert>
          ) : null}
          {(showEmailWarning || showPasswordWarning) ? (
            <Alert status="warning">
              <AlertIcon />
              <Box flex="1">
                <AlertDescription display="block">
                  {`Please enter a valid ${showEmailWarning && showPasswordWarning?' email id & password':showEmailWarning?' email id.':' password.'}`}
                </AlertDescription>
              </Box>
              <CloseButton position="absolute" right="8px" top="8px" />
            </Alert>
          ) : null}
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

              <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<BsPersonFill color="primary" />}
                  />
                  <Input
                    type="email"
                    placeholder="Email address"
                    value={emailId}
                    onChange={(e) => setEmailId(e.currentTarget.value)}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="primary"
                    children={<BsFillShieldLockFill color="primary" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              {/*    type="submit" */}
              <Button
                colorScheme="primary.900"
                variant="outline"
                onClick={submit}
                isDisabled={showEmailWarning || showPasswordWarning}
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

Login.propTypes = {};

export default Login;
