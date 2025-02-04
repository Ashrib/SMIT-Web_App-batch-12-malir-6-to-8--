import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { auth, db } from "./firebaseConfig.js";
import {
  addDoc,
  collection,
  query,
  where,
  getDocs,
  limit,
  orderBy,
  Timestamp,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

// let createPost = async () => {
//   try {
//     let date =  new Date();
//    // Add a new document in collection "cities"
// await addDoc(collection(db, "posts"), {
//   text:'this is the 1st post',
//   createdAt: date.getTime(),
// });

//   } catch (error) {
//     console.error(error);
//   }
// };
// createPost();


let data = []

let getRequest = async () => {
  try {
    // Create a query against the collection.
    const q = query(
      collection(db, "f_request"),
      where("to", "==", 'o4xvzUFpX9gfM9JT8o4eREFs4PB3'),
    );
    let querySnapshot = await getDocs(q);
    // console.log(querySnapshot);
    if (querySnapshot.docs.length < 1) {
      console.log("no data found");
      return;
    }
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      data.push({id:doc.id, ...doc.data()})
    });
  } catch (error) {
    console.error(error);
  }
};
getRequest().then(()=>{
  data.forEach(async()=>{
    try{
      let user = await getDoc(doc(db,'users', 'o4xvzUFpX9gfM9JT8o4eREFs4PB3'))
      console.log(user)
    }catch(e){
      console.error(e)
    }
  })
})








