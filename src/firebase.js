// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdAN5CVl1aBww0rZKUnWG_M4Y8siLU92U",
  authDomain: "primehomeloanapplication.firebaseapp.com",
  projectId: "primehomeloanapplication",
  storageBucket: "primehomeloanapplication.firebasestorage.app",
  messagingSenderId: "395781102147",
  appId: "1:395781102147:web:e9b5d3e42f48d9172e92f6",
  measurementId: "G-2316PV92ZL",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDdAN5CVl1aBww0rZKUnWG_M4Y8siLU92U",
//   authDomain: "primehomeloanapplication.firebaseapp.com",
//   projectId: "primehomeloanapplication",
//   storageBucket: "primehomeloanapplication.firebasestorage.app",
//   messagingSenderId: "395781102147",
//   appId: "1:395781102147:web:e9b5d3e42f48d9172e92f6",
//   measurementId: "G-2316PV92ZL",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
