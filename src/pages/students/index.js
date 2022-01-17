import React, { useEffect, useState } from "react";
import {Grid, Icon, Box,useToast } from "@chakra-ui/react";
import {
  BsChevronLeft,
  BsChevronRight
} from "react-icons/bs";
import {
  Paginator,
  Container,
  Previous,
  usePaginator,
  Next,
  PageGroup,
} from "chakra-paginator";

import StudentCard from "../../components/StudentCard";
import { getStudents } from "../../service";
const Students = () => {
  const toast = useToast()
  const limit = 9;
  const {
    isDisabled,
    currentPage
  } = usePaginator({
    total: 20,
    initialState: {
      pageSize: limit,
      currentPage: 1,
      isDisabled: false,
    },
  });
  var normalStyles = {
    w: 7,
    fontSize: "sm",
    mx: 3,
  };
  var activeStyles = {
    w: 7,
    bg: "green.300",
    fontSize: "sm",
    _hover: {
      bg: "blue.300",
    },
    mx: 1,
  };
  var separatorStyles = {
    w: 7,
    bg: "green.200",
    mx: 1,
  };
  const [pagesQuantity, setPagesQuantity] = useState(10);
  const [studentRecords, setStudentsRecords] = useState([]);

  const fetchStudentRecords = async (currentPage) => {
    let response = await getStudents(currentPage, limit);
    await setStudentsRecords(response.result);
    await setPagesQuantity(response.totalPages);
    await setStudentsRecords(response.result);
  };

  const openWhatsapp = (primaryPhone) => {
    let whatsAppLink = `https://api.whatsapp.com/send?phone=${primaryPhone}&text=Hello%2CAdmin%20Here!%20I%20have%20contacted%20you%20via%20Academia`;
    window.open(whatsAppLink);
  };

  const openMail = (emailId) => {
    let mailLink = `mailto:${emailId}?subject=Message From Admin`;
    window.open(mailLink);
  };

  const goToStudentDetails = (selectedRollNo) =>{
    console.log(selectedRollNo,"selectedRollNo");
  }

  const copyPhoneNumberToClipboard = (primaryPhone) =>{
    navigator.clipboard.writeText(primaryPhone)
    toast({
        title: 'Copied.',
        description: 'Copied primay phone number.',
        status: 'info',
        duration: 2000,
        isClosable: true,
      })
  }

  useEffect(() => {
    let intialPage = 1;
    fetchStudentRecords(intialPage);
  }, []);

  return (
    <Box>
      <Grid
        color="primary.800"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={3}
        px={20}
        mt={20}
      >
        {studentRecords.map((studentRecord) => {
          return <StudentCard {...studentRecord} onWhatsAppClick={openWhatsapp} onMailClick={openMail} onPhoneClick={copyPhoneNumberToClipboard} onMoreDetailsClick={goToStudentDetails}/>;
        })}
      </Grid>
      <Box maxWidth="27vw" display="inline-block" ml="3" align="right">
        <Paginator
          isDisabled={isDisabled}
          currentPage={currentPage}
          pagesQuantity={pagesQuantity}
          activeStyles={activeStyles}
          separatorStyles={separatorStyles}
          normalStyles={normalStyles}
          onPageChange={fetchStudentRecords}
        >
          <Container align="center" justify="space-between" w="full" p={4}>
            <Previous>
              <Icon as={BsChevronLeft} w={6} h={6} />
            </Previous>
            <PageGroup isInline align="center" />
            <Next>
              <Icon as={BsChevronRight} w={6} h={6} />
            </Next>
          </Container>
        </Paginator>
      </Box>
    </Box>
  );
};
export default Students;
