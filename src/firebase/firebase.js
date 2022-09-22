// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfWWYPAHYHq5t0bKp3mGz75hyIrOo-5mw",
  authDomain: "polaric.firebaseapp.com",
  projectId: "polaric",
  storageBucket: "polaric.appspot.com",
  messagingSenderId: "155147693891",
  appId: "1:155147693891:web:b8a730fa5c4757026c49f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)