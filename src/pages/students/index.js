import React from "react";
import PropTypes from "prop-types";
import { Stack, Grid, ButtonProps, Icon, Box } from "@chakra-ui/react";
import {
  BsChevronBarLeft,
  BsChevronLeft,
  BsChevronRight,
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
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
const dummyArray = [1, 2, 3, 4, 5, 6, 7, 8];
const Content = (props) => {
  const outerLimit = 2;
  const innerLimit = 2;

  const {
    isDisabled,
    pagesQuantity,
    currentPage,
    setCurrentPage,
    setIsDisabled,
    pageSize,
    setPageSize,
    offset, // you may not need this most of the times, but it's returned for you anyway
  } = usePaginator({
    total: 20,
    initialState: {
      pageSize: 10,
      currentPage: 1,
      isDisabled: false,
    },
  });
  var normalStyles = {
    w: 7,
    fontSize: "sm",
    mx:3
};
var activeStyles = {
    w: 7,
    bg: "green.300",
    fontSize: "sm",
    _hover: {
        bg: "blue.300"
    },
    mx:1
};
var separatorStyles = {
    w: 7,
    bg: "green.200",
    mx:1
};
  return (
    <Box >
      <Grid
        color="primary.800"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={3}
        px={20}
        mt={20}
      >
        {dummyArray.map((d) => {
          return <StudentCard />;
        })}
      </Grid>
      <Box maxWidth="27vw" display="inline-block" ml="3" align="right">
        <Paginator
          isDisabled={isDisabled}
          innerLimit={innerLimit}
          currentPage={currentPage}
          outerLimit={outerLimit}
          pagesQuantity={pagesQuantity}
          activeStyles={activeStyles}
          separatorStyles={separatorStyles}
          normalStyles={normalStyles}
        >
            {/*   onPageChange={handlePageChange} */}
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
Content.propTypes = {};
export default Content;
