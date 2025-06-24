// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABTGxO6g7EFhSbQX4J5JnYVJWySc3Jd2Q",
  authDomain: "zap-shift-7ae05.firebaseapp.com",
  projectId: "zap-shift-7ae05",
  storageBucket: "zap-shift-7ae05.firebasestorage.app",
  messagingSenderId: "64384734234",
  appId: "1:64384734234:web:a37124ebd5434392956da3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)