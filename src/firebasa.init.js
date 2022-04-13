// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaCg3JHpwggXVBpY-5U4mYJYK-RQgR9ww",
  authDomain: "ema-john-simple-12a3e.firebaseapp.com",
  projectId: "ema-john-simple-12a3e",
  storageBucket: "ema-john-simple-12a3e.appspot.com",
  messagingSenderId: "332704071438",
  appId: "1:332704071438:web:48a841fd040559df6b215f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;