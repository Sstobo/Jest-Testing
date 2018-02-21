const number = require('./../lib/number.js');

describe('Number array', () => {
  describe('When result is an array', () => {
    test('number', () => {
      const result = number('wowwww');
      expect(result).toEqual({ w: 5, o: 1 });
    });
  });
});
