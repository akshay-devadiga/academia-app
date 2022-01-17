import React from "react";
import PropTypes from "prop-types";
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
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuGroup,
  MenuDivider,
  Divider,
  Button,
  Flex,
  useColorModeValue
} from "@chakra-ui/react";
import logo from "../assets/images/logo.png";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Header = (props) => {
let navigate = useNavigate();
const logoutUser = async () => {
    console.log("assda");
    localStorage.removeItem("accessToken");
    navigate('/');
};
  return (
    <Box>
      <Box minHeight="2vh" py="2">
        <Stack direction="row" mx="2" justify="space-between">
          <Image height="47px" ml="4" src={logo} />
          <Menu direction="rtl">
            <MenuButton colorScheme="pink">
              <Avatar
                size="md"
                mr="2"
                src="https://i.pravatar.cc/300"
                name="profile"
               
              />
            </MenuButton>
            <MenuList>
              <MenuGroup>
                <MenuItem icon={<MdLogout />} onClick={logoutUser} >Logout</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </Stack>
      </Box>
      <Divider color="primary" />
    </Box>
  );
};

Header.propTypes = {};

export default Header;
