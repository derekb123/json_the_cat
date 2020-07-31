const request = require('request');

const breed = process.argv.slice(2);

request('https://api.thecatapi.5com/v1/breeds/search?q=' + breed.slice(0,3), (error, response, body) => {
  if (error) {
    console.log('error:', error);
    return;
  } const information = JSON.parse(body);
  if (information.length === 0) {
    console.log('Breed not found. Please try again.');
    return;
  } else {
    console.log(information[0].description);
  }
});


// const request = require('request');

// const breed = process.argv.slice(2);

// request('https://api.thecatapi.com/v1/breeds/search?q=' + breed.slice(0,3), (error, response, body) => {
//   const information = JSON.parse(body);
//   if (error) {
//     console.log('error:', error);
//     return;
//   } else if (information.length === 0) {
//     console.log('Breed not found. Please try again.');
//     return;
//   } else {
//     console.log(information[0].description);
//   }
// });
