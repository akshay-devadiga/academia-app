import React from "react";
import CourseCard from "./CourseCard";
import {
  Stack,
  Grid,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Image,
  Spacer,
  Textarea,
  Avatar,
} from "@chakra-ui/react";
import {
  BsChevronLeft,
  BsSave2Fill,
  BsPlusSquareFill,
} from "react-icons/bs";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
const StudentInformation = (props) => {
  const property = {
    rollNo: 1,
    name: "Tony Stark",
    emailId: "a@gmail.com",
    primaryPhone: 9090909090,
    secondaryPhone: 8080808080,
    gender: "Male",
    residentialAddress: "Some big street address",
    about: "asdsdsd",
    profilePicture: "https://robohash.org/39.96.1.102.png",
    courses: [
      {
        id: 1,
        name: "Introduction to js",
        hours: "25",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png",
      },
      {
        id: 2,
        name: "Introduction to js",
        hours: "21",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png",
      },
      {
        id: 3,
        name: "Introduction to js",
        hours: "21",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png",
      },
      {
        id: 4,
        name: "Introduction to js",
        hours: "21",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png",
      },
    ],
  };
  return (
    <Box align="center">
      <Stack
        my="4"
        maxWidth="80vw"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        direction="column"
      >
        <Stack direction="row" ml="4" my="4" justify="flex-start">
          <Box mx="4" display="flex" align="left">
            <Stack direction="column" align="center" justify="center">
              <Box ml="4" display="inline-block" align="center">
                <Image
                  borderRadius="full"
                  borderWidth="3px"
                  boxSize="30vh"
                  src={property.profilePicture}
                  alt={"Student Picture"}
                />
              </Box>
            </Stack>
          </Box>
          <Box mx="4" display="flex" align="left">
            <Stack direction="column">
              <Box mr="4" display="inline-block" align="left">
                <FormControl mt="4">
                  <FormLabel htmlFor="rollNo">RollNo:</FormLabel>
                  <Input
                    isDisabled
                    id="rollNo"
                    placeholder={property.rollNo}
                    type="number"
                  />
                </FormControl>
                <FormControl mt="2">
                  <FormLabel htmlFor="name">Name:</FormLabel>
                  <Input
                    isDisabled
                    id="name"
                    placeholder={property.name}
                    type="text"
                  />
                </FormControl>
                <FormControl mt="2">
                  <FormLabel htmlFor="rollNo">Email Id:</FormLabel>
                  <Input
                    isDisabled
                    id="rollNo"
                    placeholder={property.emailId}
                    type="number"
                  />
                </FormControl>
              </Box>
            </Stack>
          </Box>
          <Box mx="4" display="flex" align="left">
            <Stack direction="column">
              <Box mr="4" display="inline-block" align="left">
                <FormControl mt="4">
                  <FormLabel htmlFor="rollNo">Primary Phone:</FormLabel>
                  <Input
                    isDisabled
                    id="rollNo"
                    placeholder={property.primaryPhone}
                    type="number"
                  />
                </FormControl>
                <FormControl mt="2">
                  <FormLabel htmlFor="name">Secondary Phone:</FormLabel>
                  <Input
                    isDisabled
                    id="name"
                    placeholder={property.secondaryPhone}
                    type="number"
                  />
                </FormControl>
                <FormControl mt="2">
                  <FormLabel htmlFor="rollNo">Gender:</FormLabel>
                  <Input
                    isDisabled
                    id="gender"
                    placeholder={property.gender}
                    type="number"
                  />
                </FormControl>
              </Box>
            </Stack>
          </Box>
        </Stack>
        <Stack direction="row"  ml="4" mb="4" align="stretch" justify="space-between">
          <Box mx="4" w='100%'align="left">
            <Stack direction="column" ml="4" mb="4">
              <Text>About:</Text>
              <Textarea isDisabled placeholder={property.about} />
            </Stack>
          </Box>
          <Box  mx="1"  w='100%' align="left">
            <Stack direction="column" ml="0" mb="4">
              <Text>ResidentialAddress:</Text>
              <Textarea isDisabled placeholder={property.residentialAddress} />
            </Stack>
          </Box>
        </Stack>
        <Box display="inline-block" align="left">
          <Stack direction="column" ml="4" mb="4" justify="flex-start">
            <Stack direction="row" mx="4" justify="space-between">
              <Text>Courses:</Text>
              <Button
                leftIcon={<BsPlusSquareFill />}
                color="white"
                bg="primary.800"
                variant="solid"
              >
                Add Course
              </Button>
              <FormControl id="email" w="40vw">
                <FormLabel>Search for courses</FormLabel>
                <AutoComplete openOnFocus w="100%" p={4}>
                  <AutoCompleteInput
                    variant="filled"
                    autocomplete="chrome-off"
                  />
                  <AutoCompleteList bg="white">
                    {property.courses.map((course, oid) => (
                      <AutoCompleteItem
                        key={`option-${oid}`}
                        value={course.name}
                        textTransform="capitalize"
                        align="center"
                        color="primary.800"
                        bg="green.400"
                        wrap
                        p="3"
                        borderBottomWidth={
                          oid === property.courses.length - 1 ? "" : "1px"
                        }
                        borderColor="white"
                        borderRadius={0}
                      >
                        <Avatar
                          size="sm"
                          name={course.name}
                          src={course.image}
                        />
                        <Text ml="4" fontWeight="bold">
                          {course.name}
                        </Text>
                        <Text
                          ml="4"
                          fontWeight="light"
                        >{`${course.hours} hours`}</Text>
                      </AutoCompleteItem>
                    ))}
                  </AutoCompleteList>
                </AutoComplete>
              </FormControl>
            </Stack>

            <Grid
              color="primary.800"
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(4, 1fr)"
              gap={3}
              px={20}
              mt={20}
            >
              {property.courses.map((course) => {
                return (
                  <CourseCard
                    title={course.name}
                    image={course.image}
                    hours={course.hours}
                  />
                );
              })}
            </Grid>
          </Stack>
        </Box>
        <Box display="inline-block">
          <Button
            leftIcon={<BsSave2Fill />}
            color="white"
            bg="primary.800"
            variant="solid"
          >
            Save
          </Button>
          <Button
            leftIcon={<BsChevronLeft />}
            colorScheme="primary.900"
            variant="ghost"
          >
            Back
          </Button>
          <Spacer my="5" />
        </Box>
      </Stack>
    </Box>
  );
};

StudentInformation.propTypes = {};

export default StudentInformation;
