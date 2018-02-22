module.exports = function (string1, string2) {
  if (typeof string1 !== 'string' || typeof string2 !== 'string') {
    if (!string1 || !string2) throw new Error('Invalid argument: arguments must be defined');
    throw new Error('Invalid argument: arguments must be a string');
  }
  let longEq;
  let short;
  if (string1.length > string2.length) {
    longEq = string1;
    short = string2;
  } else {
    longEq = string2;
    short = string1;
  }
  let count = 0;
  for (let i = 0; i < longEq.length; i++) {
    if (short[i] !== longEq[i]) {
      if (longEq.length === short.length) {
        count++;
      } else {
        short = `x${short}`;
        count++;
      }
    }
    if (count > 1) return false;
  }
  return true;
};
