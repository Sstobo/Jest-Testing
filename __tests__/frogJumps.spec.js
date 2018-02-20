const frogJumps = require('./../lib/frogJumps.js');
// name is a suite
describe('Frogs are jumpin', () => {
  describe('when start is equal to end', () => {
    test('should return 0', () => {
      const result = frogJumps(10, 10, 5);
      expect(result).toEqual(0);
    });
  });
  describe('when start is greater than end', () => {
    test('should return -1', () => {
      const result = frogJumps(15, 10, 5);
      expect(result).toBeLessThan(0);
    });
  });
  describe('when jump is 0', () => {
    test('should return 0', () => {
      const result = frogJumps(5, 10, 0);
      expect(result).toEqual(Infinity);
    });
  });
  describe('when jump is > total distance', () => {
    test('should return 0', () => {
      const result = frogJumps(5, 10, 25);
      expect(result).toEqual(0.2);
    });
  });
  describe('when jump amd distance are both 0', () => {
    test('return infinity', () => {
      const result = frogJumps(0, 0, 0);
      expect(result).toEqual(NaN);
    });
  });
  describe('when jump amd distance are both 0', () => {
    test('return infinity', () => {
      const result = frogJumps();
      expect(result).toEqual(NaN);
    });
  });
});
