const invalidNumber = 0 / 0;

const isNotANumber = value => value === NaN;

console.log(isNotANumber(invalidNumber));
