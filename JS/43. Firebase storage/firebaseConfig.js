  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
  import { getStorage } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-storage.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyALKJuCSGBc00EJcHsHpZ9yf8YcE8Lcv_E",
    authDomain: "property-management-3d16b.firebaseapp.com",
    projectId: "property-management-3d16b",
    storageBucket: "property-management-3d16b.appspot.com",
    messagingSenderId: "581013141128",
    appId: "1:581013141128:web:8565c54d562b20b68c113d"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export { app, auth,db, storage}