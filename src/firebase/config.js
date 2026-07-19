// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQdCO0n00TGNDyzKiiEdJljpHmefaw41M",
  authDomain: "miproyecto-f6e58.firebaseapp.com",
  projectId: "miproyecto-f6e58",
  storageBucket: "miproyecto-f6e58.firebasestorage.app",
  messagingSenderId: "179789657702",
  appId: "1:179789657702:web:f279c2c5dd20deed985fa7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };
