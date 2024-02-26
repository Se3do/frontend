// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, collection, doc, setDoc, getDoc, addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBazd1IhuPrtyWxE3bgt8uaVLisuWmaKRA",
  authDomain: "hire-me-6ab8c.firebaseapp.com",
  databaseURL: "https://hire-me-6ab8c-default-rtdb.firebaseio.com",
  projectId: "hire-me-6ab8c",
  storageBucket: "hire-me-6ab8c.appspot.com",
  messagingSenderId: "622901167486",
  appId: "1:622901167486:web:6c596a7a5058ed502d9f2f",
  measurementId: "G-60M96Y3699"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// ----------------------------------------------------
const regbtn = document.getElementById("reg")

const handleRegister = () => {
  regbtn.addEventListener('click', async (e) => {

    const fname = document.getElementById('fname')
    const lname = document.getElementById('lname')
    const email = document.getElementById('email')
    const age = document.getElementById('age')
    const pass = document.getElementById('pass')
    const jobStatus = document.getElementById('jobStatus')

    console.log('Welcome, ', fname.value, lname.value, email.value, age.value, pass.value, document.getElementById('cpass').value)
    createUserWithEmailAndPassword(auth, document.getElementById('email').value, document.getElementById('pass').value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        const docRef = addDoc(collection(db, "users"), {
          First_Name: fname.value,
          Last_Name: lname.value,
          Mail: email.value,
          Age: age.value,
          Password: pass.value,
          Type: jobStatus.value
        });

        console.log("Document written with ID: ", docRef.id);

        // onAuthStateChanged(auth, (user) => {
        //   if (user) {
        //     // User is signed in, see docs for a list of available properties
        //     // https://firebase.google.com/docs/reference/js/auth.user
        //     const uid = user.uid;
        //     console.log(uid);
        //     window.location.href = "../index.html";
        //     // ...
        //   } else {
        //     // User is signed out
        //   }
        // });

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  })
}

handleRegister()
