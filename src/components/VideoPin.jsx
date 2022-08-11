import { Box, Flex, Link, Text, Image } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getFirestore } from "firebase/firestore";
import { firebaseApp } from "../firebase-config";
import { getUserInfo } from "../utils/fetchData";
const VideoPin = ({ data }) => {
  const [userinfo, setuserInfo] = useState(null);
  const [userId, setUserId] = useState(null);
  const firestoreDb = getFirestore(firebaseApp);
  useEffect(() => {
    if (data) setUserId(data.userId);
    if (userId)
      getUserInfo(firestoreDb, userId).then((data) => {
        setuserInfo(data);
      });
  }, [userId]);

  return (
    <Flex
      justifyContent={"center"}
      alignItem={"center"}
      Direction={"column"}
      shadow={"lg"}
      cursor="pointer"
      overflow={"hidden"}
      position="relative"
      bg="gray.100"
      width={"400px"}
      height={"200px"}
      borderRadius="5px"
    >
      <Link to={""}>
        <Box width={"400px"} height={"300px"} mx={10}>
          <video
            src={data.videoUrl}
            muted
            onMouseOver={(e) => e.target.play()}
            onMouseOut={(e) => e.target.pause()}
          />
        </Box>
      </Link>
      <Flex
        position={"absolute"}
        bottom="0"
        left="0"
        p={2}
        background="rgba( 0, 0, 0, 0.6 )"
        box-shadow="  0 8px 32px 0 rgba( 31, 38, 135, 0.37 )"
        backdrop-filter="blur( 4px )"
        border=" 1px solid rgba( 255, 255, 255, 0.18 )"
        width="full"
        height={"40px"}
        direction={"column"}
      >
        <Flex width={"full"} justifyContent="space-between" alignItems="center">
          <Text color="white"  fontSize={"18"}>
            {data.title}
          </Text>
          <Image
            rounded={"full"}
            width="50px"
            height={"50px"}
            mt="-10"
            src={userinfo?.photoURL}
            border="solid black 1px"
          ></Image>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default VideoPin;
