const rp = require('request-promise');

const options = {
  uri: 'https://www.predictit.org/api/marketdata/ticker/USPREZ16',
  json: true,
}

rp(options)
  .then(body => console.log(body))
  .catch(err => console.log("Error:", err));
