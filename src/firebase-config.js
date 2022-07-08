import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA5gC_E57zwN8FRsKVNrBx52Ve7U7IwFq0",
  authDomain: "videoapp-69c99.firebaseapp.com",
  databaseURL: "https://videoapp-69c99-default-rtdb.firebaseio.com",
  projectId: "videoapp-69c99",
  storageBucket: "videoapp-69c99.appspot.com",
  messagingSenderId: "156889973792",
  appId: "1:156889973792:web:f64f79c2f2fa3019d9a845",
};

export const firebaseApp = initializeApp(firebaseConfig);
