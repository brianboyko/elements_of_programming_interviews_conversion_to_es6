export const countBits = (x: number): number => {
  let numBits = 0;
  while (x > 0) {
    numBits += x & 1;
    x >>= 1;
  }
  return numBits;
};

export const parityOfWord = (x: number): number => {
  let result = 0;
  while (x > 0) {
    result ^= 1;
    x &= x - 1;
  }
  return result;
};

//  Right propagate the rightmost set bit in x, e.g., turns (01010000)2 to (01011111)2.
export const rightPropagate = (x: number): number => x - 1 + (x & ~(x - 1));

// Compute x modulo a power of two, e.g., returns 13 for 77 mod 64
export const moduloPowerOf2 = (x: number): number => {
  let y = x;
  let z: number;
  while (true) {
    z = y & (y - 1);
    if (z === 0) {
      return x - y;
    } else {
      y = z;
    }
  }
};

// Test if x is a power of 2, i.e., evaluates to true for x = 1, 2, 4, 8, . . . , false for all other values
export const isAPowerOf2 = (x: number): boolean => x > 1 && countBits(x) === 1;
