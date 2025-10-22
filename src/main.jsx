import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CreateItem from './componentes/CreateItem'
import TraerCollection from './componentes/TraerCollection'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7KF9BYnEmo00lnBAv48y8kcq4vYhUM88",
  authDomain: "factorbmx.firebaseapp.com",
  projectId: "factorbmx",
  storageBucket: "factorbmx.firebasestorage.app",
  messagingSenderId: "767824824949",
  appId: "1:767824824949:web:b2928adb385381ad01c63c",
  measurementId: "G-STS0GFS34T"
};


initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <TraerCollection/>
  </>,
)
