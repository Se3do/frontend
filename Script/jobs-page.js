// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, collection, doc, setDoc, getDoc, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

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
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// const auth = getAuth(app);

//============================================

// Query a reference to a subcollection
const querySnapshot = await getDocs(collection(db, "Jobs"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());

  const Company_Name = doc.data().Company_Name;
  const Job_Description = doc.data().Job_Description;
  const Job_Title = doc.data().Job_Title;
  const Location = doc.data().Location;
  const Phone_No = doc.data().Phone_No;

  let html = `
  <div class="col-sm-12 col-md-6 col-lg-6" id="place">
  <div class="klam">
    <h2>` + Job_Title + `</h2>
    <i class='fa fa-building'></i> ` + Company_Name + `<br>
    <i class='fa-solid fa-location-dot'></i> ` + Location + 
    `            <hr>
  <h6>Minimum qualifications</h6>
  <ul>
    <li id="qual">` + Job_Description + `</li>` + Phone_No;

    const file = document.getElementById('job-container')

      file.innerHTML += html
});

