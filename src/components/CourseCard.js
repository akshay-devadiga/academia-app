import React from "react";
import {
  Box,
  Image,
  Stack,
  Text,
  Icon,
  Divider,
  Tooltip,
} from "@chakra-ui/react";
import { BsChevronRight, BsX } from "react-icons/bs";
const CourseCard = ({ title, image, hours }) => {
  return (
    <Box
      display="inline-block"
      p="3"
      maxWidth="20vw"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Stack direction="column" py="1" align="stretch" justify="stretch">
        <Box display="inline-block" ml="3" align="space-between">
          <Stack direction="row" justify="flex-end">
            <Box display="flex">
              <Icon color="red.300" as={BsX} w={6} h={6} />
            </Box>
          </Stack>
        </Box>
        <Stack
          direction="column"
          py="1"
          align="stretch"
          justify="space-between"
        >
          <Box display="inline-block" mr="3">
            <Image
              borderRadius="full"
              boxSize="50px"
              src={image}
              alt={"Course Picture"}
            />
          </Box>
          <Box display="inline-block">
            <Text
              color="primary"
              letterSpacing="wide"
              fontSize="lg"
              fontWeight="bold"
              textAlign="left"
            >
              {title}
            </Text>
          </Box>
          <Box display="inline-block">
            <Text
              color="primary"
              letterSpacing="wide"
              fontSize="sm"
              fontWeight="semi-bold"
              textAlign="left"
            >
              {`${hours} videos`}
            </Text>
          </Box>
        </Stack>
        <Divider />
        <Tooltip label="Coming soon!!" aria-label="A tooltip">
          <Box
            display="inline-block"
            color="primary.900"
            ml="3"
            align="space-between"
          >
            <Stack direction="row" justify="space-between">
              <Box display="flex" mr="3">
                <Text>Learn More</Text>
              </Box>
              <Box display="flex">
                <Icon as={BsChevronRight} w={6} h={6} />
              </Box>
            </Stack>
          </Box>
        </Tooltip>
      </Stack>
    </Box>
  );
};

export default CourseCard;
