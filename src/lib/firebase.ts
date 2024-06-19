// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAguCsS-_Jogb7p2ew_aC2ihwTe5wdifNQ",
  authDomain: "react-blog-5255b.firebaseapp.com",
  projectId: "react-blog-5255b",
  storageBucket: "react-blog-5255b.appspot.com",
  messagingSenderId: "734716919086",
  appId: "1:734716919086:web:2fcc09df6a4592a4ef8ebf",
  measurementId: "G-6GT5RWTF9L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = firebase.auth();
export const firestore = firebase.firestore();