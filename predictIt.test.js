const predictIt = require('./predictIt.js');
const assert    = require('chai').assert;
const chakram   = require('chakram');

const expect = chakram.expect;

describe('PredictIt is up and responding to tests', () => {
  it('should respond at the /all endpoint', () => {
    return chakram.get('https://www.predictit.org/api/marketdata/all');
  });

  const category = '13';
  const categoryName = 'US Politics';
  it(`should respond at the /category endpoint for the ${categoryName} category`, () => {
    return chakram.get(`https://www.predictit.org/api/marketdata/category/${category}`);
  });

  const group = '37';
  const groupName = 'White House';
  it(`should respond at the /group endpoint for the ${groupName} group`, () => {
    return chakram.get(`https://www.predictit.org/api/marketdata/group/${group}`);
  });

  const ticker = 'CHINA.MANIPULATOR.063017';
  it(`should respond at the /ticker endpoint for the ${ticker} market`, () => {
    return chakram.get(`https://www.predictit.org/api/marketdata/ticker/${ticker}`);
  });
});

describe('Our wrapper errors out correctly with bad arguments', () => {
  it('should error properly when group doesn\'t exist', () => {
    predictIt.group(889)
      .then(d => console.log(d));
  });
});

describe('Our API wrapper correctly pulls from each endpoint', () => {

  const ticker = 'CHINA.MANIPULATOR.063017';
  it(`should return json data for the ${ticker} market`, () => {
    var response = chakram.get(`https://www.predictit.org/api/marketdata/ticker/${ticker}`);
  });
});

