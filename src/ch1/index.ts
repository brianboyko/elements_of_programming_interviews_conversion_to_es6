export const countBits = (x: number): number => {
  let numBits = 0;
  while(x > 0){
    numBits += x & 1 
    x >>= 1
  }
  return numBits;
}

export const parityOfWord = (x: number): number => {
  let result = 0;
  while(x > 0){
    result ^= 1
    x &= x - 1 
  }
  return result
}