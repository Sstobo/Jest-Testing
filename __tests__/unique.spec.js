const unique = require('../lib/unique.js');

describe('stringCompress', () => {
  test('when letter is at the end', () => {
    const result = unique('aaabbbbbbt');
    expect(result).toEqual('t');
  });
  test('letter is at the beginning', () => {
    const result = unique('terfg');
    expect(result).toEqual('t');
  });
  test('letter is in the middle', () => {
    const result = unique('frof');
    expect(result).toEqual('r');
  });
});
