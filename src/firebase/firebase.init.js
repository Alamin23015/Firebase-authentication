// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2LQlg6SUFKQuFTpBDhwvTSb6nhWpm9sc",
  authDomain: "simple-firebase-auth-37be8.firebaseapp.com",
  projectId: "simple-firebase-auth-37be8",
  storageBucket: "simple-firebase-auth-37be8.firebasestorage.app",
  messagingSenderId: "138350350659",
  appId: "1:138350350659:web:5bea71ca6f761132f61ff6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
