//Importing module
// import { addToCart, totalPrice as price, totalQty } from './shoppingCart.js';

// addToCart('shoes', 2);
// console.log(price, totalQty);

// console.log('Importing module');

//Importing everything
import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('shoes', 7);
// console.log(ShoppingCart);

// import add from './shoppingCart.js';
// add('brocolli', 5);

//Top-level Await

// console.log('Start fetching...');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log(data[0]);

// console.log('Fetching done');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  //Getting the last item in the array using ES2022
  return { title: data.at(-1).title, text: data.at(-1).body };
};

//Top-level Await
const lastPost = await getLastPost();
console.log(lastPost);
