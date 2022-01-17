import React from "react";
import {
  Box,
  Image,
  Badge,
  Stack,
  Text,
  IconButton,
  Tag,
  TagLabel,
  TagLeftIcon,
  Spacer,
  Flex,
} from "@chakra-ui/react";
import {
  BsWhatsapp,
  BsMailbox,
  BsPhone,
  BsChevronRight,
  BsBookHalf,
} from "react-icons/bs";
import PropTypes from "prop-types";
const StudentCard = ({
  rollNo,
  name,
  emailId,
  primaryPhone,
  about,
  profilePicture,
  residentialAddress,
  onWhatsAppClick,
  onMailClick,
  onMoreDetailsClick,
  onPhoneClick
}) => {
  const imageAlt = "Student Picture";
  return (
    <Flex
      maxW="sm"
      p="5"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      className="student-card"
      direction="column"
    >
      <Box>
        <Stack direction="row">
          <Box display="flex" w="100%" alignItems="center">
            <Stack direction="column" py="1" justify="center">
              <Box display="inline-block" align="center" justify="center">
                <Badge borderRadius="full" px="2" my="1" colorScheme="primary">
                  <Text fontWeight="light" color="white">
                    {`NM-000${rollNo}`}
                  </Text>
                </Badge>
              </Box>
              <Box display="inline-block">
                <Image
                  borderRadius="full"
                  boxSize="100px"
                  src={profilePicture}
                  alt={imageAlt}
                />
              </Box>
              <Box display="inline-block">
                <Text fontWeight="bold" fontSize="md" color="primary">
                  {name}
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
                      onClick={()=>{onWhatsAppClick(primaryPhone)}}
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
                      onClick={()=>{onMailClick(emailId)}}
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
                      onClick={()=>{onPhoneClick(primaryPhone)}}
                      icon={<BsPhone />}
                    />
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Box>
          <Box display="flex" w="100%" p="3">
            <Stack
              direction="column"
              py="1"
              align="right"
              justify="space-between"
              w="100%"
              h="100%"
            >
              <Stack
                direction="column"
                py="1"
                align="stretch"
                justify="space-between"
              >
                <Box display="inline-block" mr="3">
                  <Text fontWeight="bold" textAlign="left">
                    {"Field"}
                  </Text>
                </Box>
                <Box display="inline-block" textAlign="left">
                  <Tag
                    color="primary"
                    letterSpacing="wide"
                    fontSize="xs"
                    textAlign="left"
                    textTransform="uppercase"
                    size={"sm"}
                    key={"sm"}
                    variant="outline"
                    colorScheme="primary.800"
                  >
                    <TagLeftIcon as={BsBookHalf} />
                    <TagLabel> {about}</TagLabel>
                  </Tag>
                </Box>
                <Box display="inline-block" mr="3">
                  <Text fontWeight="bold" textAlign="left">
                    {"Address"}
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
                    {residentialAddress}
                  </Text>
                </Box>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Box>
      <Spacer />
      <Box display="inline-block" w="100%" justify="right" align="right">
        <IconButton
          bg="white"
          color="primary.800"
          aria-label="Whatsapp Call"
          fontSize="lg"
          size="lg"
          onClick={()=>{onMoreDetailsClick(rollNo)}}
          icon={<BsChevronRight />}
        />
      </Box>
    </Flex>
  );
};
StudentCard.defaultProps = {
  rollNo: null,
  name: "",
  emailId: "",
  primaryPhone: "",
  about: "",
  profilePicture: "",
  onWhatsAppClick:null,
  onMailClick:null,
  onMoreDetailsClick:null
};
StudentCard.propTypes = {
  rollNo: PropTypes.string,
  name: PropTypes.string,
  emailId: PropTypes.string,
  primaryPhone: PropTypes.string,
  about: PropTypes.string,
  profilePicture: PropTypes.string,
  onWhatsAppClick: PropTypes.func,
  onMailClick:PropTypes.func,
  onMoreDetailsClick:PropTypes.func
};
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