// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0ez6XWCD2Dxm9wKOVJaSykB8fyHMvh1M",
  authDomain: "vue-projects-374a3.firebaseapp.com",
  projectId: "vue-projects-374a3",
  storageBucket: "vue-projects-374a3.appspot.com",
  messagingSenderId: "197646831023",
  appId: "1:197646831023:web:45834940878efcbcc5b35a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export default { db, auth };
