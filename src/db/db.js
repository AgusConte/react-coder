import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBd9tCKm54mHdHeERvg34Kb_hENpo0Oglg",
  authDomain: "warmain.firebaseapp.com",
  projectId: "warmain",
  storageBucket: "warmain.firebasestorage.app",
  messagingSenderId: "719770058805",
  appId: "1:719770058805:web:fc0b7735a8e38dcd10717c"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db