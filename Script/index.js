// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, query, collection, where, doc, setDoc, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

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
const user = auth.currentUser;

// Listener for Login/Logout
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    document.getElementById('container').style.display = 'flex'
    document.getElementById('user').style.display = 'none'

    const q = query(collection(db, "users"), where("Mail", "==", user.email))
    const querySnapshot = getDocs(q)

    querySnapshot.forEach((doc) => {
      console.log(doc.Mail)
      const h2 = document.getElementById('h2g')
      h2.innerHTML = 'Hello, ' + doc.First_Name;
    })
    const uid = user.uid;
    console.log(uid);
    // ...
  } else {
    // User is signed out
    document.getElementById('container').style.display = 'none'
    document.getElementById('user').style.display = 'block'
  }
});
