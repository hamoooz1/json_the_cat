const request = require('request');
const breedName = process.argv[2];

const breedFetcher = function(breedName) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    if (error) {
      console.log("error: ", error)
    } else if (response.statusCode !== 200) {
      console.log("StatusCode error: ", response.statusCode)
    } 
    const data = JSON.parse(body);
    console.log(`${breedName}: ${data[0].description}`)
  })
}

breedFetcher(breedName);