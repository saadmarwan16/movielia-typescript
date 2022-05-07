// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlyzAguX1C1EMGrVTjHWVf-Fh-ZTOphuw",
  authDomain: "movielia-typescript.firebaseapp.com",
  projectId: "movielia-typescript",
  storageBucket: "movielia-typescript.appspot.com",
  messagingSenderId: "192381346352",
  appId: "1:192381346352:web:0b46cc2ae137e5f4a103f5",

  // databaseURL: 'https://next-firebase-stripe-39bf8-default-rtdb.firebaseio.com',
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
