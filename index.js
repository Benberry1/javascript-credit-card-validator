const validateCred = (str) => {
  const modifiedArray = [];
  let double = false;
  for (let i = str.length - 1; i >= 0; i--) {
    if (!double) {
      modifiedArray.unshift(parseInt(str[i]));
      double = true;
    } else {
      const dubNum =
        parseInt(str[i]) * 2 > 9
          ? parseInt(str[i]) * 2 - 9
          : parseInt(str[i]) * 2;
      modifiedArray.unshift(dubNum);
      double = false;
    }
  }
  const reducedArray = modifiedArray.reduce((accum, curr) => {
    return accum + curr;
  });
  return reducedArray % 10 === 0 ? true : false;
};

module.exports = { validateCred };
