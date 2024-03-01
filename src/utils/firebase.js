// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4hN30RSrdAiZRlROAFNXy3mI6nAv9HoU",
  authDomain: "netflixgpt-7e346.firebaseapp.com",
  projectId: "netflixgpt-7e346",
  storageBucket: "netflixgpt-7e346.appspot.com",
  messagingSenderId: "186995498883",
  appId: "1:186995498883:web:be03b44eba7a84d7a160b6",
  measurementId: "G-181RB9V99H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();