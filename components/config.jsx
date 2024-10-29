// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: "AIzaSyA_DHxEo5ycWBtXggERGn-Dt5UT8_fszgk",
    authDomain: "login-669c1.firebaseapp.com",
    projectId: "login-669c1",
    storageBucket: "login-669c1.appspot.com",
    messagingSenderId: "768054456354",
    appId: "1:768054456354:web:50faa7b1a9d7f7418eda7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize firestore
export const db = getFirestore(app);