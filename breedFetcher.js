const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName.slice(0,3), (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    } const information = JSON.parse(body);
    if (information.length === 0) {
      callback(`${breedName} not found. Please provide a valid breed.`, null);
      return;
    } else {
      callback(null, information[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };


// const request = require('request');

// const breed = process.argv.slice(2);
//}
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
