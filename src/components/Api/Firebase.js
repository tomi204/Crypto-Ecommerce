import { getFirestore, collection, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};

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
