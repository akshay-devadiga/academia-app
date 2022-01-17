import React, { useEffect, useState } from "react";
import CourseCard from "../../components/CourseCard";
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
  Flex,
} from "@chakra-ui/react";
import { BsChevronLeft, BsSave2Fill, BsEyeSlash, BsEye, BsCheckCircle } from "react-icons/bs";
import { CUIAutoComplete } from "chakra-ui-autocomplete";
import { getStudentByRollNo, getCourses, updateStudent } from "../../service";
import { useNavigate, useParams } from "react-router-dom";
const Student = () => {
  let {rollNo} = useParams();
  const [studentRecord, setStudentsRecord] = useState({});
  const [showCoursesDropdown, setShowCoursesDropdown] = useState(false);
  const [courses, setCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/students");
  };
  
  const saveStudentInfo = async () => {
    let studentInfo = JSON.parse(JSON.stringify(studentRecord));
    studentInfo.courses = selectedCourses;
    await updateStudent(rollNo,selectedCourses);
    setStudentsRecord(studentInfo);
    goBack();
  };

  useEffect(() => {
    const fetchCourses = async () => {
      let response = await getCourses();
      response = response.map(course=>({...course,label:course.name,value:course.id}))
      await setCourses(response.filter(item => !studentRecord.courses.map(record=>record.id).includes(item.id)));
    };
    fetchCourses();
  }, [studentRecord]);

  useEffect(() => {
    const fetchStudentRecord = async () => {
      let response = await getStudentByRollNo(rollNo);
      await setSelectedCourses(response.courses);
      await setStudentsRecord(response);
      
    };
    fetchStudentRecord();
  });


  const customRender = (selected) => {
    return (
      <Flex flexDir="row" alignItems="center">
        <Avatar mr={2} size="sm" src={selected.thumbnail} />
        <Text>{selected.name}</Text>
      </Flex>
    );
  };
  const updateSelectedCourses = (coursesSelectedByUser) => {
    if (coursesSelectedByUser) {
      setSelectedCourses(coursesSelectedByUser);
    }
  };
  const isNewCourseSelected = () =>{
   return (selectedCourses && selectedCourses.length) !== (studentRecord && studentRecord.courses && studentRecord.courses.length)
  }
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
                  src={studentRecord.profilePicture}
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
                    placeholder={studentRecord.rollNo}
                    type="number"
                  />
                </FormControl>
                <FormControl mt="2">
                  <FormLabel htmlFor="name">Name:</FormLabel>
                  <Input
                    isDisabled
                    id="name"
                    placeholder={studentRecord.name}
                    type="text"
                  />
                </FormControl>
                <FormControl mt="2">
                  <FormLabel htmlFor="rollNo">Email Id:</FormLabel>
                  <Input
                    isDisabled
                    id="rollNo"
                    placeholder={studentRecord.emailId}
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
                    placeholder={studentRecord.primaryPhone}
                    type="number"
                  />
                </FormControl>
                <FormControl mt="2">
                  <FormLabel htmlFor="name">Secondary Phone:</FormLabel>
                  <Input
                    isDisabled
                    id="name"
                    placeholder={studentRecord.secondaryPhone}
                    type="number"
                  />
                </FormControl>
                <FormControl mt="2">
                  <FormLabel htmlFor="rollNo">Gender:</FormLabel>
                  <Input
                    isDisabled
                    id="gender"
                    placeholder={studentRecord.gender}
                    type="number"
                  />
                </FormControl>
              </Box>
            </Stack>
          </Box>
        </Stack>
        <Stack
          direction="row"
          ml="4"
          mb="4"
          align="stretch"
          justify="space-between"
        >
          <Box mx="4" w="100%" align="left">
            <Stack direction="column" ml="4" mb="4">
              <Text>Field:</Text>
              <Text isDisabled placeholder={studentRecord.about} />
            </Stack>
          </Box>
          <Box mx="1" w="100%" align="left">
            <Stack direction="column" ml="0" mb="4">
              <Text>ResidentialAddress:</Text>
              <Textarea
                isDisabled
                placeholder={studentRecord.residentialAddress}
              />
            </Stack>
          </Box>
        </Stack>
        <Box display="inline-block" align="left">
          <Stack direction="column" ml="4" mb="4" justify="flex-start">
            <Stack direction="column" mx="4" justify="space-between">
              <Box mx="1" w="100%">
                <Stack direction="column" mx="4" justify="space-between">
                  <Box mx="1" w="100%" align="left">
                    <Text>Courses:</Text>
                  </Box>
                  <Box mx="1" w="100%" h="100%" align="right">
                    <Button
                      leftIcon={
                        !showCoursesDropdown ? <BsEye /> : <BsEyeSlash />
                      }
                      color="white"
                      bg="primary.800"
                      variant="solid"
                      onClick={() => {
                        setShowCoursesDropdown(!showCoursesDropdown);
                      }}
                    >
                      {!showCoursesDropdown ? `Show courses` : `Hide courses`}
                    </Button>
                  </Box>
                </Stack>
              </Box>
              {showCoursesDropdown ? (
               <Box px={8} py={4}>
               <CUIAutoComplete
                 autocomplete="no"
                 label="Choose preferred work locations"
                 placeholder="Type a Country"
                 items={courses}
                 tagStyleProps={{
                   display:'none'
                 }}
                 disableCreateItem
                 icon={BsCheckCircle}
                 selectedIconProps={{ color: "primary.800" }}
                 itemRenderer={customRender}
                 selectedItems={selectedCourses}
                 onSelectedItemsChange={(changes) =>
                   updateSelectedCourses(changes.selectedItems)
                 }
               />
             </Box>
              ) : (
                ""
              )}
            </Stack>
            {selectedCourses && selectedCourses.length > 0 ? (
              <Grid
                color="primary.800"
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(4, 1fr)"
                gap={3}
                px={20}
                mt={20}
              >
                {selectedCourses.map((course) => {
                  return (
                    <CourseCard
                      key={course.id}
                      title={course.name}
                      thumbnail={course.thumbnail}
                      totalHours={course.totalHours}
                    />
                  );
                })}
              </Grid>
            ) : (
              ""
            )}
          </Stack>
        </Box>
        <Box display="inline-block" mb="4">
          {isNewCourseSelected()?<Button
            leftIcon={<BsSave2Fill />}
            color="white"
            bg="primary.800"
            variant="solid"
            onClick={()=>{saveStudentInfo()}}
          >
            Save
          </Button>:
          <Button
            leftIcon={<BsChevronLeft />}
            colorScheme="primary.900"
            variant="ghost"
            onClick={()=>{goBack()}}
          >
            Back
          </Button>}
        </Box>
        <Spacer/>
      </Stack>
    </Box>
  );
};

/*
{
  "rollNo": 3,
  "name": "Frances Semonin",
  "emailId": "fsemonin2@cargocollective.com",
  "primaryPhone": "422-108-5458",
  "secondaryPhone": "393-375-8036",
  "gender": "Male",
  "residentialAddress": "871 Lindbergh Crossing",
  "about": "Support",
  "profilePicture": "https://robohash.org/evenietminusqui.png?size=450x",
  "courses": [
      {
          "name": "HTML5 Coding Essentials and Best Practices",
          "totalHours": 48,
          "thumbnail": "https://github.com/coherencez/tech-logos/blob/master/html5.png"
      }
  ]
}*/

export default Student;
