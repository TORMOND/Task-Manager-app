// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0_OjT1m-Au0ypnVoNWNQRlnoU5iYo8rE",
  authDomain: "task-manager-2be5f.firebaseapp.com",
  projectId: "task-manager-2be5f",
  storageBucket: "task-manager-2be5f.appspot.com",
  messagingSenderId: "879458791636",
  appId: "1:879458791636:web:7e951200b3bbb4228ecb41",
  measurementId: "G-FCVXWVXLYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);