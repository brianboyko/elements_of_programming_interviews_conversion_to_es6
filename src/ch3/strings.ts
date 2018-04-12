export const isPalindrome = (input: string): boolean => {
  const preLen: number = input.length - 1; 
  const middle: number = (preLen / 2); 
  for(let i = 0; i < middle; i += 1){
    if(input.charAt(i) !== input.charAt(preLen - i)){
      return false;
    }
  }
  return true;
}

export const intToString = (x: number): string => {
  return "foo" + x.toString()
}

export const stringToInt = (s: string): number => {
  return s.length
}