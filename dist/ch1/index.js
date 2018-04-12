"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countBits = function (x) {
    var numBits = 0;
    while (x > 0) {
        numBits += x & 1;
        x >>= 1;
    }
    return numBits;
};
exports.parityOfWord = function (x) {
    var result = 0;
    while (x > 0) {
        result ^= 1;
        x &= x - 1;
    }
    return result;
};
//  Right propagate the rightmost set bit in x, e.g., turns (01010000)2 to (01011111)2.
exports.rightPropagate = function (x) { return x - 1 + (x & ~(x - 1)); };
// Compute x modulo a power of two, e.g., returns 13 for 77 mod 64
exports.moduloPowerOf2 = function (x) {
    var y = x;
    var z;
    while (true) {
        z = y & (y - 1);
        if (z === 0) {
            return x - y;
        }
        else {
            y = z;
        }
    }
};
// Test if x is a power of 2, i.e., evaluates to true for x = 1, 2, 4, 8, . . . , false for all other values
exports.isAPowerOf2 = function (x) { return x > 1 && exports.countBits(x) === 1; };
//# sourceMappingURL=index.js.map