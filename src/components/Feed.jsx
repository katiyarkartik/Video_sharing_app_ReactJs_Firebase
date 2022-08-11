import React from "react";
import { getFirestore } from "firebase/firestore";
import { firebaseApp } from "../firebase-config";
import { useEffect } from "react";
import { getAllFeeds } from "../utils/fetchData";
import { useState } from "react";
import { Spinner, SimpleGrid, Box, Flex } from "@chakra-ui/react";

import VideoPin from "./VideoPin";
const Feed = () => {
  const [loading, setloading] = useState(false);
  const firestoreDb = getFirestore(firebaseApp);
  const [feeds, setfeeds] = useState(null);

  useEffect(() => {
    setloading(true);
    getAllFeeds(firestoreDb).then((data) => {
      setfeeds(data);
      setloading(false);
    });
  }, []);
  if (loading) return <Spinner />;
  return (
    <SimpleGrid
      className="feedbox"
      minChildWidth="300px"
      spacing="15px"
      width="full"
      px={2}
      overflowX="hidden"
      autoColumns={"max-content"}
      alignItems="center"
    >
      {feeds &&
        feeds.map((data) => (
          <Flex mx={1}>
            <VideoPin key={data.id} data={data} />
          </Flex>
        ))}
    </SimpleGrid>
  );
};

export default Feed;
