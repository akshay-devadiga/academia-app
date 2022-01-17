import React from "react";
import {
  Box,
  Image,
  Badge,
  Stack,
  Text,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import { BsWhatsapp, BsMailbox, BsPhone, BsChevronRight } from "react-icons/bs";
import PropTypes from 'prop-types'
const StudentCard = ({
  rollNo,
  name,
  emailId,
  primaryPhone,
  about,
  profilePicture
}) => {
  const property = {
    imageUrl: "https://cdn.vuetifyjs.com/images/john.jpg",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
    mailLink:'mailto:email@example.com?subject=Message From Admin',
    whatsAppLink:"https://api.whatsapp.com/send?phone=3123213213&text=Hello%2CAdmin%20Here!%20I%20have%20contacted%20you%20via%20Academia",
  };
  const openWhatsapp = () => {
    window.open(property.whatsAppLink);
  };
  const openMail = () => {
    window.open(property.mailLink);
  };
  return (
    <Box
      maxW="sm"
      p="5"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      className="student-card"
    >
      <Stack direction="row">
        <Box display="flex" alignItems="center">
          <Stack direction="column" py="1" justify="center">
            <Box display="inline-block" align="center" justify="center">
              <Badge borderRadius="full" px="2" my="1" colorScheme="primary">
                <Text fontWeight="light" color="white">
                  {"NM-120222"}
                </Text>
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
              <Text fontWeight="bold" fontSize="md" color="primary">
                {"Tony Stark"}
              </Text>
            </Box>
            <Box display="inline-block" ml="3">
              <Stack direction="row" py="1" justify="center">
                <Box display="inline-block" mr="1">
                  <IconButton
                    variant="outline"
                    color="green.300"
                    aria-label="Whatsapp Call"
                    fontSize="xs"
                    size="xs"
                    onClick={openWhatsapp}
                    icon={<BsWhatsapp />}
                  />
                </Box>
                <Box display="inline-block">
                  <IconButton
                    variant="outline"
                    color="primary.800"
                    aria-label="Whatsapp Call"
                    fontSize="xs"
                    size="xs"
                    onClick={openMail}
                    icon={<BsMailbox />}
                  />
                </Box>
                <Box display="inline-block" ml="3">
                  <IconButton
                    variant="outline"
                    color="primary.800"
                    aria-label="Whatsapp Call"
                    fontSize="xs"
                    size="xs"
                    onClick={openWhatsapp}
                    icon={<BsPhone />}
                  />
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Box>
        <Box display="flex" p="3">
          <Stack
            direction="column"
            py="1"
            align="stretch"
            justify="space-between"
          >
            <Stack
              direction="column"
              py="1"
              align="stretch"
              justify="space-between"
            >
              <Box display="inline-block" mr="3">
                <Text fontWeight="bold" textAlign="left">
                  {"About"}
                </Text>
              </Box>
              <Box display="inline-block">
                <Text
                  color="primary"
                  letterSpacing="wide"
                  fontSize="xs"
                  textAlign="left"
                  textTransform="uppercase"
                >
                  {property.title}
                </Text>
              </Box>
            </Stack>

            <Box display="inline-block" ml="3" align="right">
              <Icon as={BsChevronRight} w={6} h={6} />
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};
StudentCard.defaultProps = {
  rollNo: null,
  name: '',
  emailId: '',
  primaryPhone: '',
  about: '',
  profilePicture:''
}
StudentCard.propTypes = {
  rollNo: PropTypes.string,
  name: PropTypes.string,
  emailId: PropTypes.string,
  primaryPhone: PropTypes.string,
  about: PropTypes.string,
  profilePicture: PropTypes.string
}
export default StudentCard;

// "RollNo": 3,
// "Name": "Frances Semonin",
// "EmailId": "fsemonin2@cargocollective.com",
// "PrimaryPhone": "422-108-5458",
// "SecondaryPhone": "393-375-8036",
// "Gender": "Male",
// "ResidentialAddress": "871 Lindbergh Crossing",
// "About": "Support",
// "ProfilePicture": "https://robohash.org/evenietminusqui.png?size=450x"