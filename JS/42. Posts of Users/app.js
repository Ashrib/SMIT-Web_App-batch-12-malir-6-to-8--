import { createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { auth , db} from "./firebaseConfig.js";
import { addDoc,collection } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

let addUserData = async(user)=>{
try {
  const docRef = await addDoc(collection(db, "users"), {
    email: user.email, 
    phoneNumber: user.phoneNumber, 
    photoURL: user.photoURL, 
    displayName: user.displayName, 
    uid: user.uid,
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
}

let signUpUser = async(email,password)=>{
  
await createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  // Signed up 
  const user = userCredential.user;
  
  console.log('successful login')
  console.log(user)
  addUserData(user).then(()=>{
    localStorage.setItem('loggedInUser', user.uid)
    window.location.replace('./dashboard.html');
  })
  

  // ...
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.error(errorCode,errorMessage)
  // ..
});
}


document.querySelector('#signUp-btn').addEventListener('click',()=>{
  var emailValue = document.querySelector('#email').value;
  var passwordValue = document.querySelector('#password').value;
  // console.log(emailValue,passwordValue);
  signUpUser(emailValue,passwordValue);



})



let signIn = async (email,pass) => {
  await signInWithEmailAndPassword(auth, email,pass)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("login success: ", user);
      // ...
        localStorage.setItem('loggedInUser', user.uid)
        window.location.replace('./dashboard.html');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    });
};
// signIn()

document.querySelector('#login-btn').addEventListener('click',()=>{
  var emailValue = document.querySelector('#email').value;
  var passwordValue = document.querySelector('#password').value;
  // console.log(emailValue,passwordValue);
signIn(emailValue,passwordValue);


})