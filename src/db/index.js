// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, doc, getDoc, updateDoc, addDoc, deleteDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//  web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcJit8_5woyQEAJjSJ0GZ8rguQzbGBJSY",
  authDomain: "contactsbook6404.firebaseapp.com",
  projectId: "contactsbook6404",
  storageBucket: "contactsbook6404.firebasestorage.app",
  messagingSenderId: "439188173700",
  appId: "1:439188173700:web:a02ee655b78ff13f5e63d1",
  measurementId: "G-JFK5WLVWJB"
};




const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)


export async function addContact(contactData) {
  try {
    const contactsCollectionRef = collection(db, 'contacts');

    const docRef = await addDoc(contactsCollectionRef, contactData);

    return docRef.id
  } catch (error) {
    console.error(error);
  }
}


export async function getContacts() {
  const querySnapshot = await getDocs(collection(db, "contacts"));
  const list = []
  querySnapshot.forEach((doc) => {
    list.push({ ...doc.data(), id: doc.id })
  });
  return list
}

export async function getContactById(contactId) {
  try {
    const contactRef = doc(db, "contacts", contactId);
    const docSnap = await getDoc(contactRef);

    if (docSnap.exists()) {
      return { ...docSnap.data(), id: docSnap.id }
    } else {
      console.log("No such document!");
      return null
    }
  } catch (e) {
    console.error("Error getting document: ", e);
    return null

  }
}


export async function updateContact(id, updatedData) {
  const contactRef = doc(db, 'contacts', id);
  try {
    await updateDoc(contactRef, updatedData);
  } catch (error) {
    console.error(error);
  }
}



export async function deleteContact(contactId) {
  try {
    const contactDocRef = doc(db, 'contacts', contactId);

    await deleteDoc(contactDocRef);
  } catch (error) {
    console.error( error);
  }
}