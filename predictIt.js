const rp = require('request-promise');

const base = 'https://www.predictit.org/api/marketdata/';
const optionsAll = {
  uri: base + 'all/',
  json: true,
}

rp(optionsAll)
  .then(body => console.log(body))
  .catch(err => console.log("Error:", err));
