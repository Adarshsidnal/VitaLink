import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDI1LgCN1IS_GEzR5uemUN_M-8gixSthSg",
    authDomain: "vitalink-d2a93.firebaseapp.com",
    projectId: "vitalink-d2a93",
    storageBucket: "vitalink-d2a93.appspot.com",
    messagingSenderId: "399210240246",
    appId: "1:399210240246:web:a67d9b53b8b8beaf42b4d7",
    measurementId: "G-XC0S9GCCM1"
};
firebase.initializeApp(firebaseConfig);

export default firebase;
