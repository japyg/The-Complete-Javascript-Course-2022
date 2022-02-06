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

//Coding Challenge 2

const imageContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imageContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found '));
    });
  });
};

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     console.log('Image loaded');
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     console.log('Image loaded');
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-3.jpg');
//   })
//   .catch(err => {
//     console.error(err);
//   });

//Coding Challenge 3
//Part 1

const loadNPause = async function () {
  try {
    const img1 = await createImage('img/img-1.jpg');
    await wait(2);
    img1.style.display = 'none';
    const img2 = await createImage('img/img-2.jpg');
    await wait(2);
    img2.style.display = 'none';
    const img3 = await createImage('img/img-3.jpg');
    await wait(2);
    img3.style.display = 'none';
  } catch (err) {
    console.error(`Image not found. ${err}`);
  }
};

// loadNPause();

//Part 2
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    // console.log(imgs);

    const allImgs = await Promise.all(imgs);
    console.log(allImgs);

    allImgs.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
