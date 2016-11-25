const request = require('request');

const base = 'https://www.predictit.org/api/marketdata/';

exports.version = '0.0.1';

const ind = {
  world: {
    category: 4,

    mideastAfrica: 49,
    americas: 50,
    asiaPacific: 51,
    europe: 52,
  },

  usElections: {
    category: 6,

    stateLocal: 55,
    national: 67,
    electoralCollege: 75,
    fundraising: 77,
    congress: 82,
  },

  usPolitics: {
    category: 13,

    whiteHouse: 37,
    congress: 38,
    supremeCourt: 39,
    otherEvents: 45,
    cabinet: 81,
  },
};


exports.dry = function(url, callback) {

  request(url, (err, response, body) => {
    if (err) {
      console.log("Error returning ${url} :", err);
      callback(err, null);
    } else {
      console.log("It worked!");
      callback(null, JSON.parse(body));
    }
  });
};

exports.market2 = function(ticker, callback) {
  const url = base + 'ticker/' + ticker;

  exports.dry(url, callback);
};

exports.market2('CHINA.MANIPULATOR.063017', (err, data) => {
  console.log(data);
});

exports.market = function(ticker, callback) {
  const url = base + 'ticker/' + ticker;

  request(url, (err, response, body) => {
    if (err) {
      console.log("Error returning single market:", err);
      callback(err, null);
    } else {
      console.log("It worked!");
      callback(null, JSON.parse(body));
    }
  });
};

exports.group = function(group, callback) {
  const url = base + 'group/' + group.toString();

  request(url, (err, response, body) => {
    if (err) {
      console.log(`Error requesting ${group.toString()} group:`, err);
      callback(err, null);
    } else {
      console.log("It worked!");
      callback(null, JSON.parse(body));
    }
  });
};

exports.category = function(category, callback) {
  const url = base + 'category/' + category.toString();

  request(url, (err, response, body) => {
    if (err) {
      console.log(`Error returning ${category.toString()} category:`, err);
      callback(err, null);
    } else {
      console.log("It worked!");
      callback(null, JSON.parse(body));
    }
  });
};

exports.all = function(callback) {
  const url = base + 'all/';

  request(url, (err, response, body) => {
    if (err) {
      console.log('Error returning all markets:', err);
      callback(err, null);
    } else {
      console.log("It worked!");
      callback(null, JSON.parse(body));
    }
  });
}

// exports.all((err, body) => {
//   body.Markets.forEach(item => console.log(item.TickerSymbol, ':', item.Name));
// });

