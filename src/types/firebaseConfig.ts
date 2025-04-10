import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCtX1BljRuKDJ4n8Sm5ISt8LGDAZBCXO9c",
    authDomain: "pennypilot-ac787.firebaseapp.com",
    projectId: "pennypilot-ac787",
    storageBucket: "pennypilot-ac787.firebasestorage.app",
    messagingSenderId: "956945100876",
    appId: "1:956945100876:web:8cf2f689a856c0e345c4e9"
  };
  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig); 
  export const db = getFirestore(app);