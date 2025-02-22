import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
import { signOut } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { db, auth , storage} from "./firebaseConfig.js";
import {  ref, uploadBytes ,getDownloadURL  } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-storage.js";

let myPostDiv = document.querySelector("#myPosts");
let allPostDiv = document.querySelector("#allPosts");

let loggedInUser = localStorage.getItem("loggedInUser");
if (!loggedInUser) {
  console.log("no");
  window.location.replace("./index.html");
}
console.log(loggedInUser);
let user = {};
(async()=>{
  try {
    const q = query(collection(db, "users"), where("uid", "==", loggedInUser));
    const querySnapshot = await getDocs(q);
    user = querySnapshot.docs[0].data();
    console.log(user)
  } catch (error) {
    console.error(error)
  }
})();

if(user.photoURL){
  document.querySelector('#img').setAttribute('src', user?.photoURL) 
}





// document.querySelector('#upload-btn').addEventListener('click',async()=>{
//   let file = document.querySelector('#file').files[0]
//   console.log(file)
//   try {
//     const storageRef = ref(storage, `userProfiles/${loggedInUser}`);
//     // 'file' comes from the Blob or File API
//     await uploadBytes(storageRef, file).then(async(snapshot) => {
//       console.log('Uploaded a blob or file!');
//       await getDownloadURL(storageRef).then((url)=>{
//         console.log(url)

//       })

//     });
    
//   } catch (error) {
//     console.error(error)
//   }
// })




let updatePost = async (post_id) => {
  console.log(post_id);

  try {
    // Add a new document in collection "cities"
    await updateDoc(doc(db, "posts", post_id), {
      postText: "updated post 2nd time",
    }).then(()=>{
      console.log("update done");
      getMyPosts();
    })
  } catch (error) {
    console.error(error)
  }
};
let createPost = async (text) => {
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      postText: text,
      uid: loggedInUser,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error(error);
  }
};
let getAllPosts = async () => {
  try {
    const posts = await getDocs(collection(db, "posts"));
    posts.forEach((post) => {
      console.log(post.data());
      allPostDiv.innerHTML += `<div>${post.data().postText}</div>
      <br>`;
    });
  } catch (error) {
    console.error(error);
  }
};
let getMyPosts = async () => {
  try {
    const q = query(collection(db, "posts"), where("uid", "==", loggedInUser));
    const querySnapshot = await getDocs(q);
    myPostDiv.innerHTML = ''
    querySnapshot.forEach((post) => {
      // post.data() is never undefined for query post snapshots
      console.log(post.id, post.data());
      myPostDiv.innerHTML += `${post.data().postText}
      <button id='${post.id}' class='update-btn'>edit</button>
      <br>`;

      // Add event listener for the edit button
      document.getElementById(post.id).addEventListener("click", () => {
        updatePost(post.id);
      });
    });
  } catch (error) {
    console.error(error);
  }
};
document.querySelector("#add").addEventListener("click", () => {
  let postTxt = document.querySelector("#post-inp").value;
  console.log(postTxt);
  createPost(postTxt);
});
getAllPosts();

document.querySelector("#signOut").addEventListener("click", async () => {
  await signOut(auth)
    .then(() => {
      console.log("log out success");
      localStorage.removeItem("loggedInUser");
      window.location.replace("./index.html");
    })
    .catch((error) => {
      console.error(error.message);
    });
});

getMyPosts();
