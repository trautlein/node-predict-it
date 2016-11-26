const request = require('request');
const rp      = require('request-promise');
const Promise = require('bluebird');

exports.version = '0.0.1';


const base = 'https://www.predictit.org/api/marketdata/';

const apiCall = function(uri) {
  return rp({uri, json: true})
};


exports.marketCall = function(market) {
  const url = base + 'ticker/' + market;
  return apiCall(url);
};

exports.groupCall = function(group) {
  const url = base + 'group/' + group.toString();
  return apiCall(url);
};

exports.categoryCall = function(category) {
  const url = base + 'category/' + category.toString();
  return apiCall(url);
};

exports.allCall = function() {
  const url = base + 'all';
  return apiCall(url);
};

