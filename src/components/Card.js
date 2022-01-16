import React from "react";
import {
  Box,
  Image,
  Badge,
  Stack,
  Avatar,
  Text,
  Circle,
  HStack,
  Icon,
  IconButton,
} from "@chakra-ui/react";
// import { AiOutlineWhatsApp, AiOutlineMail,AiOutlinePhone,AiOutlineArrowRight } from "react-icons/ai";
import {
  BsWhatsapp,
  BsMailbox,
  BsPhone,
  BsFillArrowRightCircleFill,
  BsChevronRight
} from "react-icons/bs";
const Card = () => {
  const property = {
    imageUrl: "https://cdn.vuetifyjs.com/images/john.jpg",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };
  return (
    <Box maxW="sm" p="5" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Stack direction="row">
        <Box display="flex"  alignItems="center">
          <Stack direction="column" py="1" justify="center">
            <Box display="inline-block"  align="center" justify="center">
              <Badge borderRadius="full" px="2" my="1" colorScheme="primary">
                <Text fontWeight="light" color="white"> {"NM-120222"} </Text>
              </Badge>
            </Box>
            <Box display="inline-block">
              <Image
                borderRadius="full"
                boxSize="100px"
                src={property.imageUrl}
                alt={property.imageAlt}
              />
            </Box>
            <Box display="inline-block">
              <Text fontWeight="bold" fontSize="md" color="primary"> {"Tony Stark"} </Text>
            </Box>
            <Box display="inline-block" ml="3">
              <Stack direction="row" py="1" justify="center">
                <Box display="inline-block" mr="1">
                  <Icon color="green.300" as={BsWhatsapp} w={6} h={6} />
                </Box>
                <Box display="inline-block">
                  <Icon color="primary" as={BsMailbox} w={6} h={6} />
                </Box>
                <Box display="inline-block" ml="3">
                  <Icon color="primary" as={BsPhone} w={6} h={6} />
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Box>
        <Box display="flex" p="3">
          <Stack direction="column"    py="1" align='stretch' justify='space-between'>
           
            <Stack direction="column"   py="1" align='stretch' justify='space-between'>
            <Box display="inline-block" mr="3">
            <Text fontWeight="bold"  textAlign="left">
                {"About"}
              </Text></Box>
              <Box display="inline-block">
              <Text
                color="primary"
                letterSpacing="wide"
                fontSize="xs"
                textAlign="left"
                textTransform="uppercase"
              >
                {" "}
                {property.title}{" "}
              </Text>
            </Box>
              </Stack>
        
           
            <Box display="inline-block" ml="3"  align='right'>
              <Icon as={BsChevronRight} w={6} h={6} />
            </Box>
          </Stack>

          {/* <Box display="inline-block"  ml="3">
              <Icon  color='primary' as={AiOutlineArrowRight} w={6} h={6} />
            </Box> */}

          {/* <Box display="inline-block"  ml="3">
              <Circle color='#000339'>
              <IconButton
  colorScheme='teal'
  icon={<BsFillArrowRightCircleFill />}
/>
              <Icon  as={BsFillArrowRightCircleFill} w={6} h={6} />
              </Circle>
              
            </Box> */}
        </Box>
      </Stack>

      {/* <Box p='6'>
            <Box display='flex' alignItems='baseline'>
              <Badge borderRadius='full' px='2' colorScheme='teal'>
                New
              </Badge>
              <Box
                color='primary'
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='xs'
                textTransform='uppercase'
                ml='2'
              >
                {property.beds} beds &bull; {property.baths} baths
              </Box>
            </Box>
    
            <Box
              mt='1'
              fontWeight='semibold'
              as='h4'
              lineHeight='tight'
              isTruncated
            >
              {property.title}
            </Box>
    
            <Box>
              {property.formattedPrice}
              <Box as='span' color='gray.600' fontSize='sm'>
                / wk
              </Box>
            </Box>
    
            <Box display='flex' mt='2' alignItems='center'>
              {Array(5)
                .fill('')
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < property.rating ? 'teal.500' : 'gray.300'}
                  />
                ))}
              <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                {property.reviewCount} reviews
              </Box>
            </Box>
          </Box> */}
    </Box>
  );
};

export default Card;
