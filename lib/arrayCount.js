module.exports = (arrayToCount) => {
  if (typeof arrayToCount !== Array) {
    return 'Error, must use array of numbers';
  }

  Array.prototype.removeDuplicates = function () {
    return this.filter((item, index, self) => self.indexOf(item) == index);
  };

  const numArray = arrayToCount.sort((a, b) => a - b);
  const finalArray = numArray.removeDuplicates();

  for (let i = 0; i <= finalArray.length; i++) {
    if (i === finalArray.length) {
      answer = i + 1;
      return answer;
    } else if (finalArray[i] === i + 1) {
    } else {
      answer = i + 1;
      return answer;
      break;
    }
  }
};
