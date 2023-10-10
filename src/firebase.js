// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJMKT_9d96KLu-rXoE91paumwcUeYCSlk",
    authDomain: "loan-app-d4f87.firebaseapp.com",
    projectId: "loan-app-d4f87",
    storageBucket: "loan-app-d4f87.appspot.com",
    messagingSenderId: "1082897968431",
    appId: "1:1082897968431:web:23f58389e49392533845da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);