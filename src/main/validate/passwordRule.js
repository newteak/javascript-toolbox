const availableCharacters = {
  alpha: 'a-zA-Z',
  digit: '\\d',
  specialSymbols: '\\]\\[!\\\\"#$%&\'()*+,./:;<=>?@\\^_`{|}~-',
};

const contains = (password, pattern) => {
  return new RegExp(pattern).test(password);
};
const containsAlpha = (password) => {
  return contains(password, `[${availableCharacters.alpha}]`);
};
const containsDigit = (password) => {
  return contains(password, `[${availableCharacters.digit}]`);
};
const containsSpecialSymbol = (password) => {
  return contains(password, `[${availableCharacters.specialSymbols}]`);
};
const containsUnavailableChar = (password) =>  {
  return contains(password, `[^${availableCharacters.alpha}${availableCharacters.digit}${availableCharacters.specialSymbols}]`);
};

const passwordRule = (password) => {
  if (!password) {
    return true;
  }

  if (containsUnavailableChar(password)) {
    return false;
  }

  return containsAlpha(password) && containsDigit(password) && containsSpecialSymbol(password);
};

export default passwordRule;
