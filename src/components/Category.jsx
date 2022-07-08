import {
  Flex,
  useColorMode,
  useColorModeValue,
  Box,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Category = ({ data }) => {
  const { colorMode } = useColorMode();
  const bg = useColorModeValue("gray.600", "gray.300");
  return (
    <Flex cursor={"pointer"} my={5}>
      <Link to={`/category/${data.name}`}>
        <Tooltip
          backgroundColor={"#4299E1"}
          hasArrow
          label={data.name}
          bg="red.600"
        >
          <Box fontSize={25} my={1} color={"#2D3748"}>
            {data.icon}
          </Box>
        </Tooltip>
      </Link>
    </Flex>
  );
};

export default Category;
