import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfdcvj41fwP1EHO42UCpWvzIGdJ7QjxS4",
  authDomain: "click-counter-00001.firebaseapp.com",
  projectId: "click-counter-00001",
  storageBucket: "click-counter-00001.appspot.com",
  messagingSenderId: "436312245105",
  appId: "1:436312245105:web:efa76b7aa2e360325fecd0",
  measurementId: "G-YX727H3JFB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
