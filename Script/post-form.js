// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
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
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// const auth = getAuth(app);

//============================================

const submit = document.getElementById("submit_job")

const handleSubmit = () => {
  submit.addEventListener('click', async(e) => {
    const job_title = document.getElementById('job_title')
    const com_name = document.getElementById('com_name')
    const job_des = document.getElementById('job_des')
    const location = document.getElementById('location')
    const phone_no = document.getElementById('phone_no')

    console.log('job_title :', job_title.value)
    console.log('com_name :', com_name.value)
    console.log('job_des :', job_des.value)
    console.log('location :', location.value)
    console.log('phone_no :', phone_no.value)

    try {
      const docRef = await addDoc(collection(db, "Pending"), {
        Job_Title: job_title.value,
        Company_Name: com_name.value,
        Job_Description: job_des.value,
        Location: location.value,
        Phone_No: phone_no.value
      });
    
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  })
}

handleSubmit()