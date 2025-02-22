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
  const firebaseConfig = {
    apiKey: "AIzaSyA2B1N48LGWbH9wJoQN1R_VyKkm6WWIiSQ",
    authDomain: "student-data-7055b.firebaseapp.com",
    projectId: "student-data-7055b",
    storageBucket: "student-data-7055b.firebasestorage.app",
    messagingSenderId: "208816035355",
    appId: "1:208816035355:web:f981b70408e763e8f68abe",
    measurementId: "G-8CBYY2GXQ3"
  };
  const firebaseConfig2 = {
    apiKey: "AIzaSyALKJuCSGBc00EJcHsHpZ9yf8YcE8Lcv_E",
    authDomain: "property-management-3d16b.firebaseapp.com",
    projectId: "property-management-3d16b",
    storageBucket: "property-management-3d16b.appspot.com",
    messagingSenderId: "581013141128",
    appId: "1:581013141128:web:8565c54d562b20b68c113d"
  };
  // Initialize Firebase
  const app2 = initializeApp(firebaseConfig);
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const storage = getStorage(app2);

export { app, auth,db, storage}