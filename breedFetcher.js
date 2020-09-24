const request = require('request');

// const search = process.argv[2];
const catUrl = 'https://api.thecatapi.com/v1/breeds/search?q=';

// const fetcher = str => {
//   request(catUrl + search, (error, response, body) => {
//     console.log('error:', error); // Print the error if one occurred
//     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     // console.log('body:', body,); // Print the HTML for the Google homepage.
//     if (!error) {
//       if (!body) {
//         console.log('Request failed, exiting...');
//         return process.exit(12);
//       } else {
//         let obj = JSON.parse(body)[0];
//         // console.log(typeof obj);
//         // let key;
//         if (obj) {
//           // key = Object.keys(obj);
//           // console.log(key[0]);
//           console.log('Description: ', obj.description);
//           // console.log('Object: ', obj);
//         } else {
//           console.log(` ${search} was not found in the cat search api`);
//         }
//       }
//     } else {
//       console.log(`${str} is Invalid URL, Exiting...`);
//       return process.exit(-1);
//     }
//   });
// };

// fetcher(search);
const fetchBreedDescription = (str, cb) => {
  request(catUrl + str, (error, response, body) => {
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body,); // Print the HTML for the Google homepage.
    if (!error) {
      if (!body) {
        console.log('Request failed, exiting...');
        return process.exit(12);
      } else {
        let obj = JSON.parse(body)[0];
        // console.log(typeof obj);
        // let key;
        if (obj) {
          // key = Object.keys(obj);
          // console.log(key[0]);
          // console.log('Description: ', obj.description);
          cb(error, obj.description);
          // console.log('Object: ', obj);
        } else {
          console.log('error:', error); // Print the error if one occurred
          console.log(` ${str} was not found in the cat search api`);
        }
      }
    } else {
      console.log(`${str} is Invalid URL, Exiting...`);
      return process.exit(-1);
    }
  });
};


//https://api.thecatapi.com/v1/breeds/search?q=siberian

module.exports = { fetchBreedDescription };