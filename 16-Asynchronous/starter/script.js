'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

//XML HTTP Request AJAX Call -- Old school Way

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     // console.log(this.responseText);

//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//     <article class="country">
//       <img class="country__img" src="${data.flag}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1000000
//         ).toFixed(1)}</p>
//         <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//         <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//       </div>
//   </article>
//   `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('philippines');
// getCountryData('australia');
// getCountryData('belgium');

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} population</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// const getCountryAndNeighbour = function (country) {
//   //AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     //Render country 1
//     renderCountry(data);

//     //Get neighbor country(2)
//     const [neighbour] = data.borders;

//     if (!neighbour) return;

//     //AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };
// // getCountryAndNeighbour('portugal');
// getCountryAndNeighbour('france');

//Modern way of making AJAX calls
// const request = fetch('https://restcountries.com/v2/name/portugal');
// // console.log(request);

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

// const getJSON = function (url, errorMessage = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMessage} (${response.status})`);

//     return response.json();
//   });
// };

//First sample
// const getCountryData = function (country) {
//   //Country 1
//   fetch('https://restcountries.com/v2/name/${country}')
//     .then(response => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`Country not found.  ${response.status}`);

//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders[0];
//       const neighbour = 'dhashsia';

//       if (!neighbour) return;

//       //Country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err}`);
//       renderError(`Something went wrong.. ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

//Second sample using the getJSON function
// const getCountryData = function (country) {
//   //Country 1
//   getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found ')
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       // const neighbour = 'dhashsia';

//       if (!neighbour) throw new Error(`No neighbour found`);

//       //Country 2
//       return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err}`);
//       renderError(`Something went wrong.. ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('germany');
// });

// getCountryData('philippines');

//Coding Challenge 1
// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json `)
//     .then(response => {
//       if (!response.ok) throw new Error(`${response.status}.. Try again later`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);
//       return fetch(`https://restcountries.com/v2/name/${data.country}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found.  ${response.status}`);
//       return response.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => {
//       console.error(`${err.message} Catch error`);
//     });
// };

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

//Event Loop
// console.log('Test start');
// setTimeout(() => console.log('Set time out log'), 0);
// Promise.resolve('I am in the microtasks queue!').then(res => console.log(res));
// console.log('Test ended');

// //
// console.log('Test start');
// setTimeout(() => console.log('Set time out log'), 0);
// Promise.resolve('I am in the microtasks queue and taking some time...').then(
//   res => {
//     for (let i = 0; i <= 10000; i++) console.log(res);
//   }
// );
// console.log('Test ended');

//Building a Promise

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Drawing lots...');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You win! 💰');
//     } else {
//       reject(new Error('You lose! 😛'));
//     }
//   }, 3000);
// });
// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// //Promisifying setTimeOut

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(3)
//   .then(res => {
//     console.log('I waited for 3 seconds');
//     return wait(1);
//   })
//   .then(res => console.log('Another second'));

// //Faster way for resolved or rejected promise
// Promise.resolve('Resolved').then(res => console.log(res));
// Promise.reject(new Error('Problem')).catch(err => console.error(err));

//Promisifying the Geolocation API

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     //   navigator.geolocation.getCurrentPosition(
//     //     position => resolve(position),
//     //     err => reject(err)
//     //   );
//     // });

//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then(res => console.log(res));

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;

//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json `);
//     })
//     .then(response => {
//       if (!response.ok) throw new Error(`${response.status}.. Try again later`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);
//       return fetch(`https://restcountries.com/v2/name/${data.country}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found.  ${response.status}`);
//       return response.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => {
//       console.error(`${err.message} Catch error`);
//     });
// };

// btn.addEventListener('click', whereAmI);

//Async Await

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    //Getting the geolocation
    const geoLocation = await getPosition();
    // console.log(geoLocation);

    //Reverse Geocoding
    const { latitude: lat, longitude: lng } = geoLocation.coords;

    const location = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json`
    );
    if (location.ok === false) throw new Error('Problem getting location');

    const locationData = await location.json();
    // console.log(locationData.country);

    //Get Country Data
    const countryRes = await fetch(
      `https://restcountries.com/v2/name/${locationData.country}`
    );
    const countryData = await countryRes.json();
    if (!countryRes.ok) throw new Error('Problem getting country');
    // console.log(countryData);

    renderCountry(countryData[0]);
    return `You are in ${locationData.city}, ${locationData.country}`;
  } catch (err) {
    console.error(err.message);
    renderError(`${err.message}`);

    //Reject promise returned from async function
    throw err;
  }
};

// whereAmI();

//to convert this to async await, use IIFE
// whereAmI()
//   .then(city => console.log(city))
//   .catch(err => console.error(err));

//IIFE / Immediately-invoked Function Expression
(async function () {
  try {
    const city = await whereAmI();
    console.log(city);
  } catch (err) {
    console.error(err);
  }
  console.log('Finished getting location');
})();
