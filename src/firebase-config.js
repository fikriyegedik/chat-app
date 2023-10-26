// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9dScOzIT25GQoIfklkzWe55SRHZE0W3w",
  authDomain: "chatapp-aca02.firebaseapp.com",
  projectId: "chatapp-aca02",
  storageBucket: "chatapp-aca02.appspot.com",
  messagingSenderId: "799549637524",
  appId: "1:799549637524:web:6d30f2b2ff139a95f50581"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();