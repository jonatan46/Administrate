// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdrSiqpDdb1d8UhF4iPEAzR8-jVrL-rgQ",
  authDomain: "primerreact-f7d61.firebaseapp.com",
  projectId: "primerreact-f7d61",
  storageBucket: "primerreact-f7d61.appspot.com",
  messagingSenderId: "691967580893",
  appId: "1:691967580893:web:b93cd127f86f677c581934"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)