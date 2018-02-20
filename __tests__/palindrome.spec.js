const palindrome = require('./../lib/palindrome.js');

describe('Palindrome', () => {
  describe('When result is a palindrome', () => {
    test('palensdome', () => {
      const result = palindrome('wow');
      expect(result).toEqual('Good!');
    });
  });
  describe('When result is a palindrome with uppercase / lowercase letters', () => {
    test('palendrome', () => {
      const result = palindrome('wow');
      expect(result).toEqual('Good!');
    });
  });
  describe('When there are spaces', () => {
    test('palendrome', () => {
      const result = palindrome('www ow w w');
      expect(result).toEqual('Good!');
    });
  });
});
