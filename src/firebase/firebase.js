// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArqXDhq4zh5bGAzNJ9fJTpVOh-JtqxR7o",
  authDomain: "voting-system-180dc.firebaseapp.com",
  projectId: "voting-system-180dc",
  storageBucket: "voting-system-180dc.appspot.com",
  messagingSenderId: "972522522150",
  appId: "1:972522522150:web:7d7801748f2ae98902c8e7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
