import React from "react";
import {
  Box,
  Image,
  Stack,
  Text,
  Icon,
  Divider,
  Tooltip,
  Spacer,
  Flex,
} from "@chakra-ui/react";
import { BsChevronRight } from "react-icons/bs";
import PropTypes from "prop-types";
const CourseCard = ({ id,name, thumbnail, totalHours }) => {
  return (
    <Flex
      direction="column"
      p="3"
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      data-testid={`course-${id}`}
    >
      <Box display="inline-block" ml="3" align="space-between">
        <Stack direction="row" justify="flex-end">
          <Box display="flex">
            {/* <Tooltip label="Coming soon!!" aria-label="A tooltip">
              <Icon color="red.300" as={BsX} w={6} h={6} />
            </Tooltip> */}
          </Box>
        </Stack>
      </Box>
      <Stack direction="column" py="1" align="stretch" justify="space-between">
        <Box display="inline-block" mr="3">
          <Image
            borderRadius="lg"
            boxSize="50px"
            src={thumbnail}
            alt={"Course Image"}
          />
        </Box>
        <Box display="inline-block">
          <Text
            color="primary"
            letterSpacing="wide"
            fontSize="lg"
            fontWeight="bold"
            textAlign="left"
            data-testid={`name`}
          >
            {name}
          </Text>
        </Box>
        <Box display="inline-block">
          <Text
            color="primary"
            letterSpacing="wide"
            fontSize="sm"
            fontWeight="semi-bold"
            textAlign="left"
            data-testid={`totalHours`}
          >
            {`${totalHours} videos`}
          </Text>
        </Box>
      </Stack>
      <Spacer />
      <Divider />
      <Tooltip label="Coming soon!!" aria-label="A tooltip">
        <Box
          display="inline-block"
          color="primary.900"
          ml="3"
          align="space-between"
          data-testid={`learnmorebtn`}
        >
          <Stack direction="row" mt="3" justify="space-between">
            <Box display="flex" mr="3">
              <Text>Learn More</Text>
            </Box>
            <Box display="flex">
              <Icon as={BsChevronRight} w={6} h={6} />
            </Box>
          </Stack>
        </Box>
      </Tooltip>
    </Flex>
  );
};
CourseCard.defaultProps = {
  id: null,
  name: "",
  totalHours: null,
  thumbnail: "",
};
CourseCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  totalHours: PropTypes.number,
  thumbnail: PropTypes.string,
};
export default CourseCard;
