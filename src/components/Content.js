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

import Card from "./Card.js";
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
  return (
    <Box backgroundColor="base.900">
      <Grid
        color="primary.800"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={3}
        px={20}
        mt={20}
      >
        {dummyArray.map((d) => {
          return <Card />;
        })}
      </Grid>
      <Box maxWidth="7vw" display="inline-block" ml="3" align="right">
        <Paginator
          isDisabled={isDisabled}
          innerLimit={innerLimit}
          currentPage={currentPage}
          outerLimit={outerLimit}
          pagesQuantity={pagesQuantity}
        >
          <Container align="center" justify="space-between" w="full" p={4}>
            <Previous>
              <Icon as={BsFillArrowLeftCircleFill} w={6} h={6} />
            </Previous>
            <Next>
              <Icon as={BsFillArrowRightCircleFill} w={6} h={6} />
            </Next>
          </Container>
        </Paginator>
      </Box>
    </Box>
  );
};

Content.propTypes = {};

export default Content;
