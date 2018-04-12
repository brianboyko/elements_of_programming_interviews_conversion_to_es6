import {countBits, parityOfWord} from '../../dist/ch1';

describe("Primative Types", () => {
  describe("countBits", () => {
    it("counts the number of bits set to 1 in an integer", () => {
      expect(countBits(0)).toBe(0)
      expect(countBits(1)).toBe(1)
      expect(countBits(2)).toBe(1)
      expect(countBits(3)).toBe(2)
      expect(countBits(6)).toBe(2)
      expect(countBits(7)).toBe(3)
      expect(countBits(8)).toBe(1)
    })
  })
  describe("parityOfWord", () => {
    it("it finds the parity of a (binary) word", () => {
      expect([0, 3, 5, 6, 9, 10, 12].every(el => parityOfWord(el) === 0)).toBe(true);
      expect([1, 2, 4, 7, 8, 11, 13].every((el) => parityOfWord(el) === 1)).toBe(true);
    })
  })
})