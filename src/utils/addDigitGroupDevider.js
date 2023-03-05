function addDigitGroupDivider(num, digitInGroupNum) {
  if (!Number.isInteger(digitInGroupNum) || !Number.isInteger(num)) {
    throw new Error('function arguments must be integer');
  }

  if (num === 0) {
    return String(num);
  }

  let numToDivideOnDigitGrups = Math.abs(num);
  const denominator = Math.pow(10, Math.abs(digitInGroupNum));
  const digitGroups = [];

  while (numToDivideOnDigitGrups) {
    digitGroups.push(String(numToDivideOnDigitGrups % denominator));
    numToDivideOnDigitGrups = Math.floor(numToDivideOnDigitGrups / denominator);
  }

  const resultStr = digitGroups
    .map((_, idx, arr) => {
      const idxFromEnd = arr.length - 1 - idx;
      const isFirstItem = idx === 0;

      return isFirstItem
        ? arr[idxFromEnd]
        : arr[idxFromEnd].padStart(digitInGroupNum, '0');
    })
    .join(',');

  return num < 0 ? '-' + resultStr : resultStr;
}

export default addDigitGroupDivider;
