import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { auth, db } from "./firebaseConfig.js";
import {
  addDoc,
  collection,
  query,
  where,
  getDocs,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

let getUser = async () => {
  try {
    // Create a query against the collection.
    const q = query(
      collection(db, "users"),
      where("cities", "array-contains", "karachi")
    );
    let querySnapshot = await getDocs(q);
    // console.log(querySnapshot);
    if (querySnapshot.docs.length < 1) {
      console.log("no data found");
      return;
    }
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  } catch (error) {
    console.error(error);
  }
};
getUser();
