import React from "react";
import { Flex, Progress, Text } from "@chakra-ui/react";
import { BounceLoader, PuffLoader } from "react-spinners";
const Spinner = ({ msg, progress }) => {
  return (
    <Flex
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      height={"full"}
      px={10}
    >
      <PuffLoader color="#ff005a" />
      <Text fontSize={25} textAlign={"center"} px={2}>
        {msg}
      </Text>
      {progress && (
        <Progress
          className="progress"
          mt={50}
          isAnimated
          size="sm"
          value={Number.parseInt(progress)}
          width={"lg"}
          rounded="sm"
          colorScheme={"pink"}
        />
      )}
    </Flex>
  );
};

export default Spinner;
