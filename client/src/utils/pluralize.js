export function pluralize(num, word) {
  if (typeof word !== 'string') throw new Error(`${word} should be a string.`);
  if (typeof num !== 'number') throw new Error(`${word} should be a number.`);

  if (num !== 1 && num >= 0) {
    return `${word}s`;
  }
  return word;
}
