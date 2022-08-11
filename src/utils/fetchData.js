import { firebaseApp } from "../firebase-config";
import { collection, doc, getDoc, getDocs, orderBy } from "firebase/firestore";
import { query } from "firebase/firestore";
import { firebaseDb } from "../firebase-config";
export const getAllFeeds = async (firebaseDb) => {
  const feeds = await getDocs(
    query(collection(firebaseDb, "videos"), orderBy("id", "desc"))
  );
  return feeds.docs.map((doc) => doc.data());
};

//fetch user  info
export const getUserInfo = async (firebaseDb, userId) => {
  const userRef = doc(firebaseDb, "users", userId);
  const userSnap = await getDoc(userRef);
  if (userSnap.exists) {
    return userSnap.data();
  } else {
    return "No such Document";
  }
};
