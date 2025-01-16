// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  deleteField,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
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
  measurementId: "G-8CBYY2GXQ3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firestore
const db = getFirestore(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


let signUp = async()=>{
  await createUserWithEmailAndPassword(auth, 'xyz@gmail.com', '123456')
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("signed up" , user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
    // ..
  });

}
// signUp()

let signIn = async()=>{
  await  signInWithEmailAndPassword(auth, 'xyz@gmail.com', '123456')
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log('login success: ',user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode, errorMessage)
  });

}
// signIn()

// TO CHECK USER IS LOG-IN OR NOT
let checkUser = async()=>{
try {
  await onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log(user)
      // ...
    } else {
      // User is signed out
      
      console.log('signed out')
      // ...
    }
  })
} catch (error) {
  console.error(error)
}

}

checkUser();



