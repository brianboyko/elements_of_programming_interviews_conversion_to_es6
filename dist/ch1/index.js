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
//# sourceMappingURL=index.js.map