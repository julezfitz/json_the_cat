const request = require('request');

let args = (process.argv.slice(2));

request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {

  if (error !== null) {
    console.log('error:', error);
  }

  const data = JSON.parse(body);
  if (data.length >= 1) {
    console.log(data[0]['description']);
  } else {
    console.log(`Error: breed ${args[0]} not found`);
  }
});