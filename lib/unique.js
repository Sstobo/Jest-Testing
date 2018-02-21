module.exports = function unique(str) {
  // breaks down string into array
  let array = str.split('');
  // test if array does not contain number
  if (array.filter(letter => !isNaN(letter)).length > 0) {
    return 'error';
  }

  array = array.reduce((allLetters, letter) => {
    // checks to see if letter ('e' ) is in the all letters acuumulator
    if (letter in allLetters) {
      // if e is in allletters
      allLetters[letter]++;
      // add 1 to the all letters index ie [e, 1], [e, 2]
    } else {
      // or set the letter as [e, 1]
      allLetters[letter] = 1;
    }
    return allLetters;
    // returns [e2, ]
  }, {});
  console.log(array);
  // Object.entries turns object into an array
  const answer = Object.entries(array);
  console.log(answer);

  // sets a new var as a find (kind of like a loop - arr is accumulator, checks each item for including 1 returns first one)
  const firstUnique = answer.find(arr => arr.includes(1));
  console.log(firstUnique);
  // nice little turnary
  return firstUnique === undefined ? 'error' : firstUnique[0];
};
