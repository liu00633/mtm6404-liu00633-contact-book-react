import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCcJit8_5woyQEAJjSJ0GZ8rguQzbGBJSY",
    authDomain: "contactsbook6404.firebaseapp.com",
    projectId: "contactsbook6404",
    storageBucket: "contactsbook6404.firebasestorage.app",
    messagingSenderId: "439188173700",
    appId: "1:439188173700:web:e72deb0e8dd9b2ce5e63d1",
    measurementId: "G-5EZV4RJZZT"
  };
// Initialize Firebase & Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export default db
