import React from "react";
import {
  Box,
  Image,
  Stack,
  Avatar,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuGroup,
  Divider,
} from "@chakra-ui/react";
import logo from "../assets/images/logo.png";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Header = () => {
  let navigate = useNavigate();
  const logoutUser = async () => {
    localStorage.removeItem("accessToken");
    navigate("/");
  };
  return (
    <Box>
      <Box minHeight="2vh" py="2">
        <Stack direction="row" mx="2" justify="space-between">
          <Image height="47px" ml="4" src={logo} />
          <Menu direction="rtl">
            <MenuButton>
              <Avatar
                size="md"
                mr="2"
                src="https://randomuser.me/api/portraits/men/22.jpg"
                name="profile"
              />
            </MenuButton>
            <MenuList>
              <MenuGroup>
                <MenuItem icon={<MdLogout />} onClick={logoutUser}>
                  Logout
                </MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </Stack>
      </Box>
      <Divider color="primary" />
    </Box>
  );
};
export default Header;
