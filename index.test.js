const { validateCred } = require('.');

describe('validateCred function', () => {
  test.each([
    ['4539677908016808', true],
    ['5535766768751439', true],
    ['6011127961777935', false],
    ['5382019772883854', false],
  ])(
    'WHEN %s is passed to validateCred then %s is returned',
    (creditCard, expected) => {
      console.log(validateCred(creditCard));
      expect(validateCred(creditCard)).toBe(expected);
    }
  );
});
