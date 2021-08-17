const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    if (error !== null) {
      callback(error);
    }
  
    const data = JSON.parse(body);
    if (data.length >= 1) {
      callback(null, data[0]['description']);
    } else {
      callback("Breed not found");
    }
  });
};

module.exports = { fetchBreedDescription };