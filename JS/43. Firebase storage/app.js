import { createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { auth , db,storage} from "./firebaseConfig.js";
import { addDoc,collection } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
import {  ref, uploadBytes ,getDownloadURL  } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-storage.js";



document.querySelector('#upload-btn').addEventListener('click',async()=>{
  let file = document.querySelector('#file').files[0]
  console.log(file)
  try {
    const storageRef = ref(storage, `postImages/post2`);
    // 'file' comes from the Blob or File API
    await uploadBytes(storageRef, file).then(async(snapshot) => {
      console.log('Uploaded a blob or file!');
      await getDownloadURL(storageRef).then((url)=>{
        console.log(url)

      })

    });
    
  } catch (error) {
    console.error(error)
  }
})


