const predictIt = require('./predictIt.js');

test('Current version is 0.0.1', () => {
  expect(predictIt.version).toBe('0.0.1');
});

