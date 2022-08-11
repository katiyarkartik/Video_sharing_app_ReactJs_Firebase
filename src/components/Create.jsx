import {
  Text,
  Flex,
  Input,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  Button,
  Box,
  FormLabel,
  color,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { FaCloudUploadAlt } from "react-icons/fa";
import React from "react";
import { useState } from "react";
import "./Create.css";
import { categories } from "../data";
import { IoCloudUpload, IoTrash } from "react-icons/io5";
import Spinner from "./Spinner";
import { firebaseApp } from "../firebase-config";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { fetchUser } from "../utils/Fetchuser";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
const firebaseDb = getFirestore(firebaseApp);
const Create = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [category, setcategory] = useState("Category");
  const [allow, setAllow] = useState("Public");
  const [videoAsset, setvideoAsset] = useState(null);
  const [loading, setloading] = useState(false);
  const [progress, setprogress] = useState(1);
  const likes = 0;
  const [alert, setAlert] = useState("");
  const [alertStatus, setAlertStatus] = useState("");
  const [alertMsg, setAlertMsg] = useState("");
  const [alertIcon, setAlertIcon] = useState(null);
  const [caption, setCaption] = useState("");
  const storage = getStorage(firebaseApp);
  const [userInfo] = fetchUser();
  const uploadVideo = (e) => {
    setloading(true);
    const videoFile = e.target.files[0];
    const storageRef = ref(storage, `Videos/${Date.now()}-${videoFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, videoFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setprogress(uploadProgress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File at" + downloadURL);
          setvideoAsset(downloadURL);
          setloading(false);
        });
      }
    );
  };
  useEffect(() => {
    console.log(videoAsset);
  }, [title, category, caption, allow, likes]);
  const deleteVideo = () => {
    const deleteRef = ref(storage, videoAsset);
    deleteObject(deleteRef)
      .then(setvideoAsset(null))
      .catch((error) => {
        console.log(error);
      });
  };
  const uploadDetails = async () => {
    try {
      setloading(true);
      if (!title && !category && !videoAsset) {
        alert("please Enter all details");
      } else {
        const data = {
          id: `${Date.now()}`,
          title: title,
          userId: userInfo?.uid,
          category: category,
          videoUrl: videoAsset,
          caption: caption,
          likes:likes,
        };
        await setDoc(doc(firebaseDb, "videos", `${Date.now()}`),data);
        navigate("/", { replace: true });
      }
      setloading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="create">
      <div className="create-head">Share a Video</div>
      <Input
        my={2}
        variant={"flushed"}
        placeholder={"Enter Title"}
        focusBorderColor="red.400"
        isRequired
        type={"text"}
        fontSize={25}
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          console.log(title);
        }}
      />
      <div>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<AiFillCaretDown />}
            border={"solid 2px lightgray"}
            bg={"white"}
          >
            {category}
          </MenuButton>
          <MenuList shadow={"lg"}>
            {categories &&
              categories.map((data) => (
                <MenuItem
                  key={data.id}
                  _hover={{ bg: "blackAlpha.300" }}
                  onClick={(e) => setcategory(data.name)}
                >
                  {data.name}
                </MenuItem>
              ))}
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            as={Button}
            mx={5}
            bg={"black"}
            color={"white"}
            rightIcon={<AiFillCaretDown />}
          >
            {allow}
          </MenuButton>
          <MenuList shadow={"lg"}>
            <MenuItem onClick={(e) => setAllow("Public")}>Public</MenuItem>

            <MenuItem onClick={(e) => setAllow("Private")}>Private</MenuItem>
          </MenuList>
        </Menu>
      </div>
      {/* <Flex className="upload-box">
        {!videoAsset ? (
          <Button fontSize={25} color={"#4299E1"} bg={"gray.100"}>
            <FaCloudUploadAlt px={5} />

            <div>Upload</div>
          </Button>
        ) : (
          <Box>something</Box>
        )}
      </Flex> */}
      {/* <Flex
        border={"1px"}
        my={5}
        borderColor={"lightgray"}
        height="50%"
        width={"full"}
        borderRadius={"md"}
        overflow="hidden"
        position={"relative"}
      >
        {!videoAsset ? (
          <FormLabel width={"full"}>
            <Flex
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              height={"full"}
              width={"full"}
            >
              <Flex
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                height={"full"}
                width={"full"}
                cursor={"pointer"}
              >
                {loading ? (
                  <div>
                    <Spinner msg={"video"} progress={progress} />
                  </div>
                ) : (
                  <Button
                    className="upload"
                    p={8}
                    backgroundImage={
                      " linear-gradient(to right, #FF66C4, #FF914D)"
                    }
                    _hover={false}
                  >
                    <IoCloudUpload color={"white"} fontSize={"40"} />
                    <Text color={"white"} fontSize={"25"}>
                      Upload
                    </Text>
                  </Button>
                )}
              </Flex>
            </Flex>
            {!loading && (
              <input
                type={"file"}
                name="upload-image"
                onChange={() => {}}
                style={{ width: 0, height: 0 }}
                accept="video/mp4,video/x-m4v,video/*"
              />
            )}
          </FormLabel> */}
      <Flex
        border={"1px"}
        my={5}
        borderColor={"lightgray"}
        height="50%"
        width={"full"}
        borderRadius={"md"}
        overflow="hidden"
        position={"relative"}
      >
        {!videoAsset ? (
          <FormLabel width="full">
            <Flex
              direction={"column"}
              alignItems="center"
              justifyContent={"center"}
              height="full"
              width={"full"}
            >
              <Flex
                direction={"column"}
                alignItems="center"
                justifyContent={"center"}
                height="full"
                width={"full"}
                cursor="pointer"
              >
                {loading ? (
                  <Spinner msg={""} progress={progress} />
                ) : (
                  <>
                    <div className="upload-icon">
                      <IoCloudUpload fontSize={30} />
                      <div fontSize={20}>Upload</div>
                    </div>
                  </>
                )}
              </Flex>
            </Flex>

            {!loading && (
              <input
                type={"file"}
                name="upload-video"
                onChange={uploadVideo}
                style={{ width: 0, height: 0 }}
                accept="video/mp4,video/x-m4v,video/*"
              />
            )}
          </FormLabel>
        ) : (
          <Flex
            alignItems="center"
            justifyContent={"center"}
            height="full"
            width={"full"}
            position="relative"
          >
            <Flex
              alignItems="center"
              justifyContent={"center"}
              height={"40px"}
              width={"40px"}
              position="absolute"
              zIndex={10}
              top={5}
              right={5}
              rounded={"full"}
              bg={"red"}
              onClick={deleteVideo}
            >
              <IoTrash fontSize={20} color={"white"} />
            </Flex>
            <video
              src={videoAsset}
              controls
              style={{ width: "100%", height: "100%" }}
            />
          </Flex>
        )}
      </Flex>
      <Input
        width={"full"}
        height={"12%"}
        borderRadius={5}
        placeholder="Add a Caption"
        onChange={(e) => {
          setCaption(e.target.value);
          console.log(caption);
        }}
      />
      <Flex my={3} alignItems="center" justifyContent={"center"}>
        <Button
          isLoading={loading}
          loadingText="Uploading"
          colorScheme={"linkedin"}
          variant={`${loading ? "outline" : "solid"}`}
          _hover={{ shadow: "lg" }}
          fontSize={20}
          onClick={() => uploadDetails()}
        >
          POST
        </Button>
      </Flex>
    </div>
  );
};

export default Create;
