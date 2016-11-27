const rp      = require('request-promise');
const Promise = require('bluebird');

exports.version = '0.0.2';

const base = 'https://www.predictit.org/api/marketdata/';

const apiCall = function(uri) {
  return rp({uri, json: true});
};


exports.contractCall = function(targetContract) {
  return new Promise(resolve => {
    exports.marketCall(targetContract)
      .then(market => {
        market.Contracts.forEach((contract, index) => {
          if (contract.TickerSymbol === targetContract) {
            resolve(contract);
          }
        });
      });
  });
};

exports.marketCall = function(market) {
  const url = base + 'ticker/' + market;
  return apiCall(url);
};

exports.groupCall = function(group) {
  const url = base + 'group/' + group.toString();
  return apiCall(url)
    .then(d => d.Markets);
};

exports.categoryCall = function(category) {
  const url = base + 'category/' + category.toString();
  return apiCall(url)
    .then(d => d.Markets);
};

exports.allCall = function() {
  const url = base + 'all';
  return apiCall(url)
    .then(data => data.Markets);
};

