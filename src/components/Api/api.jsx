import { useEffect } from "react";
import React from 'react'
import { DB } from "./Firebase";
import { collection, Firestore, getDocs } from "firebase/firestore";
const products = () => {
  useEffect(() => {

    const colRef = collection(DB, "products");
    getDocs(colRef).then((snapshot) => {
      console.log(">> snapshot.docs");

      const products = snapshot.docs.map((rawDoc) => {
        return {
          id: rawDoc.id,
          ...rawDoc.data(),
        };

      })
      console.log(products)
    });
  })
}

export default products;
