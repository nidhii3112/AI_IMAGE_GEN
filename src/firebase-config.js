// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8i5Zxrbmh6Cd8y_-Bek-jkkxiyBJ2Yns",
  authDomain: "imagegen-c9d1c.firebaseapp.com",
  projectId: "imagegen-c9d1c",
  storageBucket: "imagegen-c9d1c.appspot.com",
  messagingSenderId: "809131516656",
  appId: "1:809131516656:web:ee3c7163db075de4169835",
  measurementId: "G-L2XQKHC7E9"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const Auth = getAuth(app)
export const Provider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app)
export const API_TOKENN = getStorage(app)