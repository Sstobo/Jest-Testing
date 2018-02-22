// check for palindrome

module.exports = palindrome = (str) => {
  const noSpaceStr = str.replace(/\s/g, '');
  const lowerCaseStr = noSpaceStr.toLowerCase();
  const reversed = lowerCaseStr
    .split('')
    .reverse()
    .join('');
  if (reversed === lowerCaseStr) {
    return 'Good!';
  }
  return reversed;
};
