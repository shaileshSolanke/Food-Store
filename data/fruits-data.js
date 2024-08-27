export function getProduct(fruitId) {
  let matchingProduct;
  fruitsData.forEach((fruit) => {
    if (fruit.id == fruitId) {
      matchingProduct = fruit;
    }
  });
  return matchingProduct;
}

export const fruitsData = [
  {
    id: "r8bbkahi5ater3brkgvf-fresh-blueberry",
    img: "./assets/images/products/fruits/blueberry.jpg",
    alt: "fresh-blueberry",
    name: "Fresh Blueberry",
    quantity: [
      { value: "250", mrp: 800, price: 375 },
      { value: "500", mrp: 1600, price: 750 },
      { value: "1000", mrp: 3200, price: 1500 },
    ],
  },
  {
    id: "taq9an6zfirfn4r1wzdc-apple-delicious",
    img: "./assets/images/products/fruits/apple.jpg",
    alt: "apple-delicious",
    name: "Apple Delicious",
    quantity: [
      { value: "250", mrp: 80, price: 70 },
      { value: "500", mrp: 160, price: 140 },
      { value: "1000", mrp: 320, price: 280 },
    ],
  },
  {
    id: "3bm8234xauwbjpjqxivq-raw-banana-madras",
    img: "./assets/images/products/fruits/banana.jpg",
    alt: "raw-banana-madras",
    name: "Raw Banana Madras",
    quantity: [
      { value: "250", mrp: 25, price: 20 },
      { value: "500", mrp: 50, price: 40 },
      { value: "1000", mrp: 100, price: 80 },
    ],
  },
  {
    id: "xxhzeevgt2tsxso7nbne-fresh-green-apple",
    img: "./assets/images/products/fruits/green-apple.jpg",
    alt: "fresh-green-apple",
    name: "Fresh Green Apple",
    quantity: [
      { value: "250", mrp: 100, price: 80 },
      { value: "500", mrp: 200, price: 160 },
      { value: "1000", mrp: 400, price: 320 },
    ],
  },
  {
    id: "cfj6pv4wax1ujvt7sb73-orange-nagpur",
    img: "./assets/images/products/fruits/orange.jpg",
    alt: "orange-nagpur",
    name: "Orange Nagpur",
    quantity: [
      { value: "250", mrp: 25, price: 17.5 },
      { value: "500", mrp: 50, price: 35 },
      { value: "1000", mrp: 100, price: 70 },
    ],
  },
  {
    id: "9pyak6p2m0b1g4cm74hb-frozen-strawberry",
    img: "./assets/images/products/fruits/strawberry.jpg",
    alt: "frozen-strawberry",
    name: "Frozen Strawberry",
    quantity: [
      { value: "250", mrp: 137.5, price: 125 },
      { value: "500", mrp: 275, price: 250 },
      { value: "1000", mrp: 550, price: 500 },
    ],
  },
  {
    id: "5hd1f72g9sqw336m3ugf-fresh-lime",
    img: "./assets/images/products/fruits/lime.jpg",
    alt: "fresh-lime",
    name: "Fresh Lime",
    quantity: [
      { value: "250", mrp: 20, price: 17 },
      { value: "500", mrp: 40, price: 34 },
      { value: "1000", mrp: 80, price: 68 },
    ],
  },
];
