// import {getAuth,
//     signOut,
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword,
//     onAuthStateChanged,
//     GoogleAuthProvider,
//     signInWithPopup,
//   } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { signOutFun } from "../../app.js";



console.log('success')
document.getElementById('signout-btn').addEventListener('click',function(){
    signOutFun().then(()=>{
        console.log('success');

    })
})