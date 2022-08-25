import { getFirestore, collection, getDocs } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//import { useEffect } from "react";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmxCV8XAUCNRwY0bDJpKdN9zRUmtMTyBw",
  authDomain: "proyectoreactch-29d90.firebaseapp.com",
  databaseURL: "https://proyectoreactch-29d90-default-rtdb.firebaseio.com",
  projectId: "proyectoreactch-29d90",
  storageBucket: "proyectoreactch-29d90.appspot.com",
  messagingSenderId: "946188183402",
  appId: "1:946188183402:web:466093a53c63b64c60e713",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const DB = getFirestore(app);
// Initialize Firebase
// export const DB = getFirestore(app);
// useEffect(() => {
//   const colRef = collection(DB, "products");

//   getDocs(colRef).then((snapshot) => {
//     console.log(">> snapshot.docs");

//     const products = snapshot.docs.map((rawDoc) => {
//       return {
//         id: rawDoc.id,
//         ...rawDoc.data(),
//       };
//     });
//     console.log(products);
//   });
// });
