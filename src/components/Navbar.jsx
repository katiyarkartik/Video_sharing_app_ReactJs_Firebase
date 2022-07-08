import React from "react";
import logo from "../images/logo_no_bg.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BiSearchAlt, BiUser } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { IoIosAdd, IoMdMoon, IoMdSunny } from "react-icons/io";
import "./Navbar.css";
import {
  Flex,
  useColorModeValue,
  useColorMode,
  Image,
  InputGroup,
  InputLeftElement,
  Input,
  Text,
  border,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
const Navbar = ({ user }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.600", "gray.300");
  var k = user?.photoURL;

  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"100vw"}
      p={4}
    >
      <Link to={"/"}>
        <Image src={logo} width={"50px"} p={0} m={0} />
      </Link>
      {/* <Text textColor={"#FF914D"} fontSize={18} fontWeight={500}>
        VIDEO
      </Text>
      <Text
        classname="appname"
        textColor={"#FF66C4"}
        fontSize={18}
        fontWeight={500}
      >
        SHARE
      </Text> */}
      <InputGroup className="border"  mx={8}>
        <InputLeftElement pointerEvents="none" children={<BiSearchAlt />} />
        <Input
          type="text"
          placeholder="Search..."
          border={"none"}
          focusBorderColor={"none"}
        />
      </InputGroup>
      <Flex justifyContent={"center"} alignItems={"center"}>
        {/* <Flex
          fontSize={25}
          width={"40px"}
          height={"40px"}
          justifyContent={"center"}
          alignItems={"center"}
          cursor={"pointers"}
          borderRadius={"5px"}
          onClick={toggleColorMode}
        >
          {colorMode == "light" ? <IoMdMoon /> : <IoMdSunny />}
        </Flex> */}
        {/* create */}
        <Link to={"/create"}>
          <Flex fontSize={30} color={"#FF66C4"}>
            <AiOutlineVideoCameraAdd />
          </Flex>
        </Link>
        <Menu>
          <MenuButton
            mx={3}
            borderRadius={"100px"}
            width={"40px"}
            height={"40px"}
          >
            <Image
              objectFit={"cover"}
              src={user?.photoURL}
              width={"40px"}
              height={"40px"}
              borderRadius={"100px"}
              
            />
           
            {/* {user.displayName} */}
            {/* <Text>{user.displayName}</Text> */}
          </MenuButton>

          <MenuList shadow={"lg"}>
            <Link to={""}>
              <MenuItem>My Account</MenuItem>
            </Link>{" "}
            <MenuItem color={"#FF914D"}>
              <MdLogout /> Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Navbar;
