export const isPalindrome = (input: string): boolean => {
  const preLen: number = input.length - 1;
  const middle: number = preLen / 2;
  for (let i = 0; i < middle; i += 1) {
    if (input.charAt(i) !== input.charAt(preLen - i)) {
      return false;
    }
  }
  return true;
};

/* The natural algorithm would
be to prepend digits to the partial result. However, adding a digit to the beginning of a string is
expensive, since all remaining digit have to be moved. A more time efficient approach is to add
each computed digit to the end, and then reverse the computed sequence.*/
export const intToString = (input: number): string => {
  let x = ~~input; // coerce floats to integer.
  // cannot use .toString() method.
  const digitToChar = (n: number): string => String.fromCharCode(48 + n);
  const isNegative: boolean = x < 0 ? true : false;
  x *= isNegative ? -1 : 1;
  const out = [];
  let leastDigit: number;
  do {
    leastDigit = x % 10;
    out.push(digitToChar(leastDigit));
    x = (x - leastDigit) / 10;
  } while (x > 0);
  return `${isNegative ? '-' : ''}${out.reverse().join('')}`;
};

export const stringToInt = (input: string): number => {
  // again parseInt() is cheating.
  let isNegative = false;
  let s = input;
  let d: string;
  let total: number = 0;

  if (s.charAt(0) === '-') {
    isNegative = true;
    s = s.substring(1);
  }

  let magnitude = s.length; // calculate length only once.

  do {
    d = s.charAt(0);
    s = s.substring(1);
    magnitude -= 1;
    total += Number(d); // casts strings to number;
    if (magnitude) {
      total *= 10;
    }
  } while (magnitude > 0);

  total *= isNegative ? -1 : 1;
  return total;
};

/* The insight to a good algorithm is the fact that all languages have an integer type, which
supports arithmetical operations like multiply, add, divide, modulus, etc. */
// note: HAHA! Javascript doesn't!
/* Write a program that performs base conversion. The input is a string, an integer b1, and another
integer b2. The string represents an integer in base b1. The output should be the string representing
the integer in base b2. Assume 2 ≤ b1, b2 ≤ 16. Use “A” to represent 10, “B” for 11, . . . , and “F” for
15. (For example, if the string is “615”, b1 is 7 and b2 is 13, then the result should be “1A7”, since
6 × 7
2 + 1 × 7 + 5 = 1 × 132 + 10 × 13 + 7.)*/

// const valueToChar = (n: number): string => {
//   // for 0-9, returns '0' to '9' in ascii values.
//   // '9' is 57, but 'A' is 65, so if n > ten, we return 65 - (10 + n) or 55 + n;
//   return n < 10 ? String.fromCharCode(48 + n) : String.fromCharCode(55 + n);
// };
// const charToValBase10 = (s: string): number | null => {
//   const code = s.charCodeAt(0);
//   if (code > 48 && code < 58) {
//     return code - 48;
//   }
//   if (code > 64) {
//     return code - 55;
//   }

//   return null;
// };
interface HexMap {
  [key: string]: number;
}
const HEX_CHARS = '0123456789ABCDEF';
const HEX_MAP: HexMap = HEX_CHARS.split('').reduce(
  (pv: object, char: string, index: number): object =>
    (<any>Object).assign({}, pv, { [char]: index }),
  {}
);
export const baseConversion = (
  value: string,
  base1: number,
  base2: number
): string => {
  let arrValue: string[] = value.split('');
  const isNegative = arrValue[0] === '-';
  if (isNegative) {
    arrValue = arrValue.slice(1);
  }

  const constructFromBase = (input: number, base: number): string => {
    if (input === 0) {
      return '';
    }
    return constructFromBase(~~(input / base), base) + HEX_CHARS[input % base];
  };
  const intValue: number = arrValue.reduce(
    (pv: number, cv: string): number => pv * base1 + <number>HEX_MAP[cv],
    0
  );
  return `${isNegative ? '-' : ''}${
    intValue === 0 ? '0' : constructFromBase(intValue, base2)
  }`;
};
