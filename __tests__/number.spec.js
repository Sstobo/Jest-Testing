const number = require('./../lib/number.js');

describe('Number array', () => {
  describe('When result is an array', () => {
    test('number', () => {
      const result = number('wow');
      expect(result).toEqual(['w', 'o', 'w']);
    });
  });
});
