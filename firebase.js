// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh5VHBd31ni7KUirOm-3Tw2VeXeQQ0xes",
  authDomain: "clone-d47d2.firebaseapp.com",
  projectId: "clone-d47d2",
  storageBucket: "clone-d47d2.appspot.com",
  messagingSenderId: "461398034453",
  appId: "1:461398034453:web:4e992c6b1bb06900c9a61c",
};

// Initialize Firebase
export const db = initializeApp(firebaseConfig);
