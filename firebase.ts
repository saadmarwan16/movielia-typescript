import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCeBWG-ffklm6HlqmW0vUp0QKZuJNywYMM",
  authDomain: "movilelia-web.firebaseapp.com",
  projectId: "movilelia-web",
  storageBucket: "movilelia-web.appspot.com",
  messagingSenderId: "948384542921",
  appId: "1:948384542921:web:d9cfa5dcb2cdc6858a1d18"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
