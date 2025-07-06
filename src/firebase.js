// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVsZMqUixbc0nM8EjakQv5yfgxr5FGSP0",
  authDomain: "sai-portfolio-2e3b5.firebaseapp.com",
  projectId: "sai-portfolio-2e3b5",
  storageBucket: "sai-portfolio-2e3b5.firebasestorage.app",
  messagingSenderId: "147371275931",
  appId: "1:147371275931:web:1c19301fac68b0894d383e",
  measurementId: "G-Z1FDY0NC27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);