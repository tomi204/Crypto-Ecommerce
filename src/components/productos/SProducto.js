const SProducto = [
  {
    id: 1,
    category: 1,
    title: "PC GAMER",
    desc: "I7 11700K + Placa de video 8GB RTX 3070",
    cover:
      "https://www.noticias3d.com/imagenes/noticias/202007/manticore01.png",
    stock: 20,
  },
  {
    id: 2,
    category: 1,
    title: "Placa de video 3080",
    desc: "Una placa de video que corre cualquier juego de 10!",
    cover:
      "https://gamerspit.com.ar/wp-content/uploads/2021/11/placa-de-video-msi-geforce-rtx-3090-ventus-3x-24g-450x450.png",
    stock: 20,
  },
  {
    id: 3,
    category: 2,
    title: "Notebook Gamer",
    desc: "La mejor notebook para jugar la tenes aca!",
    cover: "http://www.cdmarket.com.ar/image/0/600_750-400772_0011.png",
    stock: 10,
  },
  {
    id: 4,
    category: 2,
    title: "Monitor 240hz",
    desc: "El mejor monitor del mundo lo tenes aca!",
    cover:
      "https://dlcdnwebimgs.asus.com/gain/D5DD887A-5390-44C6-9FB9-983A4A839CEC/w717/h525",
    stock: 5,
  },
];
export default SProducto;

// export const getProductos = () => {
//   return new Promise(resolve, resject)(
//     setTimeout(() => {
//       resolve(SProducto);
//     }, 2000)
//   );
// };
// export const getProducById = (id) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve;
//     });
//   });
// };
