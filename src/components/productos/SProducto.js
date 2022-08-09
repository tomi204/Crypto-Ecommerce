const SProducto = [
  {
    id: 1,
    title: "PC GAMING AL MEJOR PRECIO",
    desc: "I7 11700K + Placa de video 8GB RTX 3070",
    cover: "./images/SlideCard/slide-1.png",
    stock: 20,
  },
  {
    id: 2,
    title: "Las Mejores Placas De Video",
    desc: "Placa de video 3080",
    cover: "./images/SlideCard/slide-2.png",
    stock: 20,
  },
  {
    id: 3,
    title: "Notebook Gamer",
    desc: "I7 9700K, RTX 3070 Y MAS",
    cover: "./images/SlideCard/slide-3.png",
    stock: 10,
  },
  {
    id: 4,
    title: "Monitor 240hz",
    desc: "Monitores 144hz y 240hz",
    cover: "./images/SlideCard/slide-4.png",
    stock: 5,
  },
];
export default SProducto;

export const getProductos = () => {
  return new Promise(resolve, resject)(
    setTimeout(() => {
      resolve(SProducto);
    }, 2000)
  );
};
