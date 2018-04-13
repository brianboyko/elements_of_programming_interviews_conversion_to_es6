const {
  isPalindrome,
  intToString,
  stringToInt,
  baseConversion
} = require('../../dist/ch3/strings');

describe('Strings', () => {
  describe('isPalindrome', () => {
    it('determines if a string is a palindrome', () => {
      expect(isPalindrome('ufotofu')).toBe(true);
      expect(isPalindrome('racecar')).toBe(true);
      expect(isPalindrome('darkkrad')).toBe(true);
      expect(isPalindrome('darkkradThe15thLevelWizard')).toBe(false);
    });
  });
  describe('intToString', () => {
    it('converts an integer to a string', () => {
      expect(intToString(19382)).toBe('19382');
      expect(intToString(88221)).toBe('88221');
      expect(intToString(-3528)).toBe('-3528');
      expect(intToString(0)).toBe('0');
    });
  });
  describe('stringToInt', () => {
    it('converts an integer to a string', () => {
      expect(stringToInt('19382')).toBe(19382);
      expect(stringToInt('88221')).toBe(88221);
      expect(stringToInt('-3528')).toBe(-3528);
      expect(stringToInt('0')).toBe(0);
    });
  });
  describe('baseConversion', () => {
    it('converts an string of a number from one base to another', () => {
      expect(baseConversion('16', 10, 16)).toBe('10');
      expect(baseConversion('1000', 10, 16)).toBe('3E8');
      expect(baseConversion('1000', 10, 8)).toBe('1750');
      expect(baseConversion('1000', 5, 14)).toBe('8D');
      expect(baseConversion('615', 7, 13)).toBe('1A7');
    });
  });
});
