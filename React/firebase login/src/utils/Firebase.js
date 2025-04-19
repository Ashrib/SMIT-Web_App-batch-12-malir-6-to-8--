// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2B1N48LGWbH9wJoQN1R_VyKkm6WWIiSQ",
  authDomain: "student-data-7055b.firebaseapp.com",
  projectId: "student-data-7055b",
  storageBucket: "student-data-7055b.firebasestorage.app",
  messagingSenderId: "208816035355",
  appId: "1:208816035355:web:f981b70408e763e8f68abe",
  measurementId: "G-8CBYY2GXQ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


export { auth , app};