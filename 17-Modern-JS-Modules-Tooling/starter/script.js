// //Importing module
// // import { addToCart, totalPrice as price, totalQty } from './shoppingCart.js';

// // addToCart('shoes', 2);
// // console.log(price, totalQty);

// // console.log('Importing module');

// //Importing everything
import * as ShoppingCart from './shoppingCart.js';
// // ShoppingCart.addToCart('shoes', 7);
// // console.log(ShoppingCart);

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);

// //Top-level Await

// // console.log('Start fetching...');
// // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// // const data = await res.json();
// // console.log(data);
// // console.log(data[0]);

// // console.log('Fetching done');

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();

//   //Getting the last item in the array using ES2022
//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// //Top-level Await
// const lastPost = await getLastPost();
// console.log(lastPost);

//The Module Pattern

// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 10;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart`);
//   };

//   const orderStock = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart2.addToCart('grapes', 3);
// ShoppingCart2.addToCart('milk', 5);
// console.log(ShoppingCart2);
// console.log(ShoppingCart2.shippingCost);

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
console.log(stateClone);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;

console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}
