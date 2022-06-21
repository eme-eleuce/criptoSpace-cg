// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzPxcRAXCRhcAhEdz8EOkX5FVEyCtrYlc",
  authDomain: "coin-api-d8829.firebaseapp.com",
  projectId: "coin-api-d8829",
  storageBucket: "coin-api-d8829.appspot.com",
  messagingSenderId: "446795367829",
  appId: "1:446795367829:web:a14ea55e9486445db6e29c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;