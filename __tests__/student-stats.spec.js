const { getPassingStudentsOverAge } = require('../lib/student-stats.js');

const { comparisonData } = require('../__mocks__/node-fetch.js');

jest.setMock('node-fetch', require('../__mocks__/node-fetch.js'));

// Beginning of function

describe('', () => {
  describe('Old Students get a tiger', () => {
    // list of names of students who have graduated and are older than 36
    test('Should fetch a list of students over 30 who passed', async () => {
      getPassingStudentsOverAge(30).then(result => expect(result).toEqual(comparisonData));
    });
  });
});
