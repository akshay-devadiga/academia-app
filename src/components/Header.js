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
} from "@chakra-ui/react";
import logo from "../logo.png";
import { MdLogout } from "react-icons/md";
const Header = (props) => {
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
                <MenuItem icon={<MdLogout />}>Logout</MenuItem>
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
