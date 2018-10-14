const axios = require('axios');
const config = require('../config');

module.exports = async path => {
  const response = await axios({
    method: 'get',
    url: 'https://od-api.oxforddictionaries.com/api/v1' + path,
    port: '443',
    rejectUnauthorized: false,
    headers: {
      Accept: 'application/json',
      app_id: config.appId,
      app_key: config.appKey
    }
  });
  return response.data.results[0];
};
