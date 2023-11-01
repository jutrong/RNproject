// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOr7MQDvnKSvvl7OUeaYkh6P4P5_WwdkE",
  authDomain: "gymduo-b54f8.firebaseapp.com",
  projectId: "gymduo-b54f8",
  storageBucket: "gymduo-b54f8.appspot.com",
  messagingSenderId: "999215360434",
  appId: "1:999215360434:web:0bc368fca6281fb5b99cab",
  measurementId: "G-JKRVT4QCY9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
