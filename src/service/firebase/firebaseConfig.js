// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBl8Gg6LT0_2wA1PzshDuYitlFS91URlQY",
  authDomain: "bankend-54045.firebaseapp.com",
  projectId: "bankend-54045",
  storageBucket: "bankend-54045.appspot.com",
  messagingSenderId: "326294223084",
  appId: "1:326294223084:web:b0d6d1f1df8fdd412acdc9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)