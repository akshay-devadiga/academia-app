import React from "react";
import { Box, Image, Button, Spacer, Text } from "@chakra-ui/react";
import NotFoundImage from "../assets/images/404.png";
import { BsChevronLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const NotFound = (props) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/login");
  };
  return (
    <Box align="center" p="4" justify="center">
      <Image boxSize="40vh" src={NotFoundImage} />
      <Box display="inline-block">
        <Text>Page not found</Text>
        <Button
          p="4"
          leftIcon={<BsChevronLeft />}
          colorScheme="primary.900"
          variant="ghost"
          onClick={goBack}
        >
          Back
        </Button>
        <Spacer />
      </Box>
    </Box>
  );
};

NotFound.propTypes = {};

export default NotFound;
