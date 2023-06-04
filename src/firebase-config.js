// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "@firebase/firestore"

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Will create environment variable after testing is complete
const firebaseConfig = {
  apiKey: "AIzaSyDZJq4A0mqRYTGmIh0W2t37JQguXgv9AIU",
  authDomain: "nuzlocketool.firebaseapp.com",
  databaseURL: "https://nuzlocketool-default-rtdb.firebaseio.com",
  projectId: "nuzlocketool",
  storageBucket: "nuzlocketool.appspot.com",
  messagingSenderId: "732817109370",
  appId: "1:732817109370:web:f58b28ee3c6590bc73a6c3",
  measurementId: "G-CR12JDCMMS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export db for reading in other components
export const db = getFirestore(app);