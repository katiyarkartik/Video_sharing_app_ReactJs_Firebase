import React from "react";
import Create from "../components/Create";
import Feed from "../components/Feed";
import Navbar from "../components/Navbar";
import VideoPin from "../components/VideoPin";
import Search from "../components/Search";
import Category from "../components/Category";
import { Flex, Spinner } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { categories } from "../data";
import { getFirestore } from "firebase/firestore";
import { firebaseApp } from "../firebase-config";
import { useEffect } from "react";
import { getAllFeeds } from "../utils/fetchData";
import { useState } from "react";
const Home = ({ user }) => {
  return (
    <>
      <Navbar user={user} />
      <Flex width={"100vw"}>
        <Flex
          direction={"column"}
          justifyContent={"start"}
          alignItems={"center"}
          width="5%"
        >
          {categories &&
            categories.map((data) => <Category key={data.id} data={data} />)}
        </Flex>
        <Flex
          width={"95%"}
          px={4}
          justifyContent={"center"}
          
          paddingX={4}
        >
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/category/:categoryId" element={<Feed />} />
            <Route path="/create" element={<Create />} />
            <Route path="/videoDetail/:videoId" element={<VideoPin />} />
            <Route path="/Search" element={<Search />} />
          </Routes>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
