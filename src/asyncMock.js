const products = [
  { id: "1", name: "Roland RD700", img: "/Img/roland.jpg", price: 1500, category: "teclados", description: "Piano Roland", stock: 3 },
  { id: "2", name: "Yamaha DX7", img: "/Img/yamaha_dx7.jpg", price: 850, category: "teclados", description: "Teclado Yamaha", stock: 2 },
  { id: "3", name: "Gibson Les Paul", img: "/Img/gibson_les_paul.jpg", price: 1200, category: "guitarras", description: "Guitarra Les Paul", stock: 1 },
  { id: "4", name: "Ibanez Mod Benson", img: "/Img/guit_ibanez.jpg", price: 1400, category: "guitarras", description: "Guit semi acust Benson", stock: 4 },
  { id: "5", name: "Ovation Mod Pat Metheny", img: "/Img/guit_ovation.jpg", price: 980, category: "guitarras", description: "Guit mod Ovation", stock: 2 },
  { id: "6", name: "Pearl Original", img: "/Img/bateria_pearl.jpg", price: 1700, category: "baterias", description: "Bateria Pearl", stock: 1 },
  { id: "7", name: "Yamaha RII Electronica", img: "/Img/bat_elect_yamaha.jpg", price: 870, category: "baterias", description: "Bat Elect Yamaha", stock:3 },
  { id: "8", name: "Gretsch 1983", img: "/Img/bateria_gretsch.jpg", price: 1400, category: "baterias", description: "Bat Gretsch Orig", stock: 3 },
  { id: "9", name: "Xilofon", img: "/Img/xilofon.jpg", price: 1150, category: "percusion", description: "Xilofon 5 oct", stock: 2 },
  { id: "10", name: "Bongo", img: "/Img/bateria_pearl.jpg", price: 600, category: "percusion", description: "Bongo americano", stock: 6 },
];

  export const getProducts = () => {
    return new Promise((resolve, reject) => {

      if (products.length > 0) {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      } else {
        reject("No hay productos");
      }
    });
  };

  export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
      if (products.length > 0) {
        const product = products.find( p => p.id === id);

        setTimeout(() => {
          if(!product) {
            reject(`No se encuentra el productos con el id ${id}`)
          }
          resolve(product);
        }, 2000);
      } else {
        reject("No hay productos");
      }
    });
  };