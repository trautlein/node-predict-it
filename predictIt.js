const rp      = require('request-promise');
const Promise = require('bluebird');

exports.version = '0.0.2';

const base = 'https://www.predictit.org/api/marketdata/';

const apiCall = function(uri) {
  return rp({uri, json: true});
};


exports.contract = function(targetContract) {
  return new Promise(resolve => {
    exports.market(targetContract)
      .then(market => {
        market.Contracts.forEach((contract, index) => {
          if (contract.TickerSymbol === targetContract) {
            resolve(contract);
          }
        });
      });
  });
};

exports.market = function(market) {
  const url = base + 'ticker/' + market;
  return apiCall(url);
};

exports.group = function(group) {
  const url = base + 'group/' + group.toString();
  return apiCall(url)
    .then(d => d.Markets);
};

exports.category = function(category) {
  const url = base + 'category/' + category.toString();
  return apiCall(url)
    .then(d => d.Markets);
};

exports.all = function() {
  const url = base + 'all';
  return apiCall(url)
    .then(data => data.Markets);
};

