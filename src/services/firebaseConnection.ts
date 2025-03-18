// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2L5NAq2puErejoCMMa9XUan3fdpRrePw",
  authDomain: "reactlinks-841dd.firebaseapp.com",
  projectId: "reactlinks-841dd",
  storageBucket: "reactlinks-841dd.firebasestorage.app",
  messagingSenderId: "859924467770",
  appId: "1:859924467770:web:8db3c2423eefba125ce503"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};  