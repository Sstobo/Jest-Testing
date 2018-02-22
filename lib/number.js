// compress a string

const number = string =>
  string.split('').reduce((newStr, letter) => {
    newStr[letter] ? newStr[letter]++ : (newStr[letter] = +1);
    // const result = newStr.join('');
    // newStr = JSON.stringify(newStr);
    // console.log(newStr.toString());
    console.log(newStr);
    const first = newStr.find(arr => arr.includes(1));
    return first;
  }, []);

console.log(result);
