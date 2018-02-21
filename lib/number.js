module.exports = number = string =>
  string.split('').reduce((newStr, letter) => {
    newStr[letter] ? newStr[letter]++ : (newStr[letter] = +1);
    // const result = newStr.join('');
    // newStr = JSON.stringify(newStr);
    console.log(newStr.toString());
    console.log(newStr);
    return newStr;
  }, {});
