function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  let cleanedValues = [...set]
    .filter(value => value.startsWith(startString))
    .map(value => value.substring(startString.length))
    .join('-');

  return cleanedValues;
}

export default cleanSet;
