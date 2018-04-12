const {
  countBits,
  parityOfWord,
  rightPropagate,
  moduloPowerOf2,
  isAPowerOf2
} = require('../../dist/ch1');

describe('Primative Types', () => {
  describe('countBits', () => {
    it('counts the number of bits set to 1 in an integer', () => {
      expect(countBits(0)).toBe(0);
      expect(countBits(1)).toBe(1);
      expect(countBits(2)).toBe(1);
      expect(countBits(3)).toBe(2);
      expect(countBits(6)).toBe(2);
      expect(countBits(7)).toBe(3);
      expect(countBits(8)).toBe(1);
    });
  });
  describe('parityOfWord', () => {
    it('finds the parity of a (binary) word', () => {
      expect([0, 3, 5, 6, 9, 10, 12].every(el => parityOfWord(el) === 0)).toBe(
        true
      );
      expect([1, 2, 4, 7, 8, 11, 13].every(el => parityOfWord(el) === 1)).toBe(
        true
      );
    });
  });
  describe('rightPropagate', () => {
    it('right-propagates the right most set in a bit', () => {
      expect(rightPropagate(80 /*(01010000)_2*/)).toBe(95 /*(01011111)*/);
    });
  });
  describe('moduloPowerOf2', () => {
    it('finds the modulo of the nearest power of 2', () => {
      expect(moduloPowerOf2(77)).toBe(13);
    });
  });
  describe('isAPowerOf2', () => {
    it('returns true if the number is a power of 2', () => {
      expect(isAPowerOf2(2)).toBe(true);
      expect(isAPowerOf2(4)).toBe(true);
      expect(isAPowerOf2(8)).toBe(true);
      expect(isAPowerOf2(16)).toBe(true);
      expect(isAPowerOf2(256)).toBe(true);
      expect(isAPowerOf2(11)).toBe(false);
      expect(isAPowerOf2(99)).toBe(false);
    });
  });
});
