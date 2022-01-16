import React from "react";
import PropTypes from "prop-types";
import CourseCard from "./CourseCard";
import { Stack, Grid, ButtonProps, Icon, Box, Button } from "@chakra-ui/react";
import { BsWhatsapp, BsMailbox, BsPhone, BsChevronLeft } from "react-icons/bs";
const dummyArray = [1, 2, 3, 4];
const StudentInformation = (props) => {
    const property = {
        rollNo:1,
        name: 'Tony Stark',
        emailId: 'a@gmail.com',
        primaryPhone: 9090909090,
        secondaryPhone: 8080808080,
        gender: 'Male',
        residentialAddress:"Some big street address",
        about:"asdsdsd",
        profilePicture:"https://robohash.org/39.96.1.102.png",
        courses:[{id:1,name:"Introduction to js",hours:"25",image:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png'},{id:2,name:"Introduction to js",hours:"21",image:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png'}]
    }
  return (
    <Box>
      <Grid
        color="primary.800"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={3}
        px={20}
        mt={20}
      >
        {property.courses.map((course) => {
          return <CourseCard title={course.name} image={course.image} hours={course.hours}/>;
        })}
      </Grid>

      <Box display="inline-block">
        <Button leftIcon={<BsChevronLeft />} colorScheme="primary.900" variant="ghost">
          Back
        </Button>
      </Box>
    </Box>
  );
};

StudentInformation.propTypes = {};

export default StudentInformation;
