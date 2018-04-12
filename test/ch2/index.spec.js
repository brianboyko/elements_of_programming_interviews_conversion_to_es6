const { dutchNationalFlag } = require('../../dist/ch2');

describe('Chapter 2 - Arrays', () => {
  describe('Dutch National Flag Problem', () => {
    it('sorts into higher and lower on a pivot', () => {
      let testArray = [8, 3, 2, 6, 0, 3, 2, 4];
      let t1 = dutchNationalFlag(testArray, 3);
      expect(t1[6]).toBe(6);
      expect(t1[7]).toBe(8);
      expect(t1.slice(0, 6).every(el => [3, 2, 4, 0].includes(el))).toBe(true);
    });
  });
});
