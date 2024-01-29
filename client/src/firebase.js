// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "badamasi-estate.firebaseapp.com",
  projectId: "badamasi-estate",
  storageBucket: "badamasi-estate.appspot.com",
  messagingSenderId: "573597624910",
  appId: "1:573597624910:web:064409d899b161cb7fb11f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);