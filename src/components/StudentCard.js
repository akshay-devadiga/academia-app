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
  onPhoneClick,
}) => {
  return (
    <Flex
      maxW="sm"
      p="5"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      className="student-card"
      direction="column"
      data-testid={`student-${rollNo}`}
    >
      <Box>
        <Stack direction="row">
          <Box display="flex" w="100%" alignItems="center">
            <Stack direction="column" py="1" justify="center">
              <Box display="inline-block" align="center" justify="center">
                <Badge borderRadius="lg" px="2" my="1" colorScheme="primary">
                  <Text fontWeight="light" color="white" data-testid={`roll-no`}>
                    {`NM-000${rollNo}`}
                  </Text>
                </Badge>
              </Box>
              <Box display="inline-block" align="center" justify="center">
                <Image
                  borderRadius="lg"
                  boxSize="100px"
                  src={profilePicture}
                  alt={'Student Image'}
                />
              </Box>
              <Box display="inline-block">
                <Text data-testid={`name`} fontWeight="bold" fontSize="md" color="primary">
                  {name}
                </Text>
              </Box>
              <Box display="inline-block" ml="3">
                <Stack direction="row" py="1" justify="center">
                  <Box display="inline-block">
                    <IconButton
                      variant="outline"
                      color="green.300"
                      aria-label="Whatsapp Call"
                      fontSize="sm"
                      size="sm"
                      onClick={() => {
                        onWhatsAppClick(primaryPhone);
                      }}
                      icon={<BsWhatsapp />}
                    />
                  </Box>
                  <Box display="inline-block">
                    <IconButton
                      variant="outline"
                      color="primary.800"
                      aria-label="Whatsapp Call"
                      fontSize="sm"
                      size="sm"
                      onClick={() => {
                        onMailClick(emailId);
                      }}
                      icon={<BsMailbox />}
                    />
                  </Box>
                  <Box display="inline-block">
                    <IconButton
                      variant="outline"
                      color="primary.800"
                      aria-label="Whatsapp Call"
                      fontSize="sm"
                      size="sm"
                      onClick={() => {
                        onPhoneClick(primaryPhone);
                      }}
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
                    data-testid={`about`}
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
                    data-testid={`residential-address`}
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
          onClick={() => {
            onMoreDetailsClick(rollNo);
          }}
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
  residentialAddress: "",
  onWhatsAppClick: null,
  onMailClick: null,
  onMoreDetailsClick: null,
};
StudentCard.propTypes = {
  rollNo: PropTypes.number,
  name: PropTypes.string,
  emailId: PropTypes.string,
  primaryPhone: PropTypes.string,
  about: PropTypes.string,
  profilePicture: PropTypes.string,
  residentialAddress: PropTypes.string,
  onWhatsAppClick: PropTypes.func,
  onMailClick: PropTypes.func,
  onMoreDetailsClick: PropTypes.func,
};
export default StudentCard;
