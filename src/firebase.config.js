import { getFirestore } from "firebase/firestore";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC1phkaT31iQOeBL9mJaqUglKOKNXXElJ8",
  authDomain: "house-mark-app.firebaseapp.com",
  projectId: "house-mark-app",
  storageBucket: "house-mark-app.appspot.com",
  messagingSenderId: "105307693417",
  appId: "1:105307693417:web:311aec76d7b062c1439df8",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
