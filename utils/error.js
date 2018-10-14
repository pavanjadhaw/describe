const config = require('../config');

module.exports = statuscode => {
  if (statuscode === 404) {
    console.log('No entry is found matching given word');
  } else if (statuscode === 500) {
    console.log('Internal Server Error');
  } else if (config.appId.length === 0) {
    console.log(`To use this app you need to request api keys from Oxford Dictionaries (https://developer.oxforddictionaries.com/)
And put them in config.js`);
  } else {
    console.log('Unknown Error');
  }
};
