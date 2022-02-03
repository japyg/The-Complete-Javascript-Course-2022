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
//     })
//     .catch(err => {
//       console.error(`${err.message} Catch error`);
//       console.log(`Something went wrong..  ${error.message}`);
//     });
// };

//Coordinates 1: 52.508, 13.381 (Latitude, Longitude)
//Coordinates 2: 19.037, 72.873
//Coordinates 3: -33.933, 18.474
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);
// whereAmI('adhasdhas');

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
//     .then(data => renderCountry(data))
//     .catch(err => {
//       console.error(`${err.message} Catch error`);
//     });
// };

// whereAmI(52.508, 13.381);
