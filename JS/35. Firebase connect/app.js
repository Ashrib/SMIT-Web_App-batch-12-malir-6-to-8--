// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
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

// CRUD
let deleteStudent = async(id)=>{
  try {
    await deleteDoc(doc(db, "students",id));
    console.log('Deleted');
  } catch (error) {
    console.error("error in deleting",error);
  }
}
let allData = [];
// get data
(async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "students"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc?.id} =>`, doc?.data());
      allData.push({ id: doc?.id, ...doc?.data() });
    });
  } catch (error) {
    console.error(error);
  }
})().then(() => {
  allData?.map(std=>{
    document.querySelector(".main").innerHTML += `<div>
    <div>
    <h2>Name:${std?.std_name}</h2>
    <h2>age:${std?.std_age}</h2>
    </div>
    <button key='${std?.id}' onClick='deleteStudent(event)'>delete</button>
    </div>`
  })
});

let addStudent = async () => {
  try {
    const docRef = await addDoc(collection(db, "students"), {
      std_age: 25,
      std_name: "abc",
    });

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
document.querySelector("#addBtn").addEventListener("onClick", ()=>{
  // addStudent()
});

let updateData = async()=>{
  try {
    await updateDoc(doc(db, 'students', 'oBHxrzcj2bCssRaeOk5Z'), {
      std_age: deleteField(), // delete specific field
      std_name: 'xyz', // add new fields
      updated: true, // add new fields
  })
  console.log('updated')

  } catch (error) {
    console.error(error)
  }
}
updateData();




