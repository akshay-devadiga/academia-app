import React from "react";
import { Box, Image, Badge, Stack, Text, Icon, Divider } from "@chakra-ui/react";
import { BsWhatsapp, BsMailbox, BsPhone, BsChevronRight,BsX } from "react-icons/bs";
const Card = ({title,image,hours}) => {
  const property = {
    imageUrl: "https://cdn.vuetifyjs.com/images/john.jpg",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Python programming",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };
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
      <Box
          display="inline-block"
          ml="3"
          align="space-between"
        >
        <Stack
          direction="row"
          justify="flex-end"
        >
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
              alt={'Course Picture'}
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
        <Divider/>
        <Box
          display="inline-block"
          color="primary.900"
          ml="3"
          align="space-between"
        >
        <Stack
          direction="row"
          justify="space-between"
        >
          <Box display="flex" mr="3">
          <Text>Learn More</Text>
          </Box>
          <Box  display="flex">
          <Icon  as={BsChevronRight} w={6} h={6} />
          </Box>
        </Stack>   
         
        </Box>
      </Stack>
    </Box>
  );
};

export default Card;
