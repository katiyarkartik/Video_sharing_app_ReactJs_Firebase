import { Button, Flex, HStack, Image, AspectRatio } from "@chakra-ui/react";
import React from "react";
import cover from "../images/cover.jpg";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { async } from "@firebase/util";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { firebaseApp } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo_no_bg.png";
import vid from "./video.mp4";
import VideoBg from "./VideoBg";
const firebaseDb = getFirestore(firebaseApp);
const Login = () => {
  const firebaseAuth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const login = async () => {
    const { user } = await signInWithPopup(firebaseAuth, provider);
    const { refreshToken, providerData } = user;
    localStorage.setItem("user", JSON.stringify(providerData));
    localStorage.setItem("accessToken", JSON.stringify(refreshToken));
    await setDoc(
      doc(firebaseDb, "users", providerData[0].uid),
      providerData[0]
    );
    navigate("/", { replace: true });
  };
  return (
    // <div className="login">
    //   <div className="login-left">
    //     <p> Create and share amazing videos!!</p>
    //     <p className="join"> Join Us Today</p>
    //   </div>
    //   <div className="login-right">
    //     <div className="form">
    //       <HStack justifyContent={"center"} alignItems={"center"}>
    //         <Button
    //           leftIcon={<FcGoogle />}
    //           fontSize={25}
    //           padding={"0 1rem"}
    //           color={"rgb(0, 23, 43)"}
    //         >
    //           Sign in with Google
    //         </Button>
    //       </HStack>
    //     </div>
    //   </div>
    // </div>
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      width={"100vw"}
      height={"100vh"}
      position={"relative"}
    >
      {/* <Image src={cover} objectFit="cover" width={"full"} height={"full"} /> */}
      
    <VideoBg/>
      <Flex
        position={"absolute"}
        width={"100vw"}
        height={"100vh"}
        bgColor={"none"}
        top={"0"}
        left={"0"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Flex
          height={"100vh"}
          // padding={"1rem 3rem"}
        >
          <HStack
          // className="hstack"
          //   padding={"3rem"}
          >
            <div>
              <p className="head">VIDEO SHARE</p>
              <p className="head2">Join Us</p>
              <Button
                leftIcon={<FcGoogle />}
                fontSize={25}
                color={"rgb(0, 23, 43)"}
                shadow={"lg"}
                onClick={() => {
                  login();
                }}
              >
                Sign in with Google
              </Button>
            </div>
          </HStack>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Login;
