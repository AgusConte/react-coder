import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7KF9BYnEmo00lnBAv48y8kcq4vYhUM88",
  authDomain: "factorbmx.firebaseapp.com",
  projectId: "factorbmx",
  storageBucket: "factorbmx.firebasestorage.app",
  messagingSenderId: "767824824949",
  appId: "1:767824824949:web:b2928adb385381ad01c63c",
  measurementId: "G-STS0GFS34T"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
