import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from 'firebase/auth'
import { FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyChbA4vUQ2_lVvF-7YCHAg9FF3OwqADMno",
    authDomain: "demoday-ca938.firebaseapp.com",
    projectId: "demoday-ca938",
    storageBucket: "demoday-ca938.appspot.com",
    messagingSenderId: "403685591961",
    appId: "1:403685591961:web:279bec15ef674d21eb2108"
};

const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const db = getFirestore();

export {
    app,
    google,
    facebook,
    db
}