const arrayCount = require('./../lib/arrayCount.js');

describe('Finding the lowest integer', () => {
  describe('when integer is at the begining', () => {
    test('should return 0', () => {
      const result = arrayCount([3, 3, 4, 5]);
      expect(result).toEqual(1);
    });
  });
  describe('when integer is at the end ', () => {
    test('should return 0', () => {
      const result = arrayCount([1, 2, 3]);
      expect(result).toEqual(4);
    });
  });
  describe('there are multiple same numbers ', () => {
    test('should return 0', () => {
      const result = arrayCount([1, 1, 2, 2, 3]);
      expect(result).toEqual(4);
    });
  });
});
