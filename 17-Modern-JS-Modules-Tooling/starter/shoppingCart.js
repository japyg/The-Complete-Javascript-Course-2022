//Exporting module
console.log('Exporting module');

const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });

  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 200;
const totalQuantity = 100;

export { totalPrice, totalQuantity as totalQty };

// export default function (product, quantity) {
//   cart.push({ product, quantity });

//   console.log(`${quantity} ${product} added to cart`);
// }
export default addToCart;
