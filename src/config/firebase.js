// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional


// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDI1LgCN1IS_GEzR5uemUN_M-8gixSthSg",
    authDomain: "vitalink-d2a93.firebaseapp.com",
    projectId: "vitalink-d2a93",
    storageBucket: "vitalink-d2a93.appspot.com",
    messagingSenderId: "399210240246",
    appId: "1:399210240246:web:a67d9b53b8b8beaf42b4d7",
    measurementId: "G-XC0S9GCCM1"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
