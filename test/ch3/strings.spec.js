const { isPalindrome, intToString, stringToInt } = require('../../dist/ch3/strings');

describe("Strings", () => {
  describe("isPalindrome", () => {
    it('determines if a string is a palindrome', () => {
      expect(isPalindrome("ufotofu")).toBe(true);
      expect(isPalindrome("racecar")).toBe(true);
      expect(isPalindrome("darkkrad")).toBe(true);
      expect(isPalindrome("darkkradThe15thLevelWizard")).toBe(false);
    })
  })
})