// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
import {
  getAuth,signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
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
const provider = new GoogleAuthProvider(); //

let signUpWithEmailPass = async (email,pass) => {
  await createUserWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log("signed up", user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ..
    });
};
// signUp()

document.querySelector("#signUp-btn").addEventListener("click", function () {
  let emailValue = document.querySelector("#email").value;
  let passwordValue = document.querySelector("#password").value;
  signUpWithEmailPass(emailValue,passwordValue)
});

let signIn = async () => {
  await signInWithEmailAndPassword(auth, "xyz@gmail.com", "123456")
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("login success: ", user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    });
};
// signIn()



document.querySelector("#google-signUp").addEventListener('click',()=>{
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log('user:',user )
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.error(errorMessage)
    });
})

document.querySelector("#logout-btn").addEventListener('click',()=>{
    signOut(auth).then(()=>{
      console.log('log out success')

    }).catch ((error)=>{
    console.error(error.message)

    }) 
})

// TO CHECK USER IS LOG-IN OR NOT
let checkUser = async () => {
  try {
    await onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log(user);
        // ...
      } else {
        // User is signed out
        console.log("signed out");
        // ...
      }
    });
  } catch (error) {
    console.error(error);
  }
};

checkUser();


