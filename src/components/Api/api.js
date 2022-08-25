// import { DB } from "./Firebase";

// export function getProductsDataOld(categoryId) {
//   return new Promise((resolve, reject) => {
//     // creo la referencia a la coleccion que quiero traer
//     const colRef = collection(DB, "products");
//     getDocs(colRef).then((snapshot) => {
//       console.log(">> snapshot.docs: ", snapshot.docs);

//       const productosConFormato = snapshot.docs.map((rawDoc) => {
//         return {
//           id: rawDoc.id,
//           ...rawDoc.data(),
//         };
//       });
//     });
//   });
// }
