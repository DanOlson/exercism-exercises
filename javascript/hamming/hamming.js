'use strict';

class Strand {
  constructor(string) {
    this.nucleotides = string.split('');
  }

  calculateHamming(other) {
    this._validateLength(other);

    return this.nucleotides.reduce((accum, char, idx) => {
      let otherChar = other.nucleotides[idx];
      return otherChar === char ? accum : accum + 1;
    }, 0);
  }

  _validateLength(other) {
    if (this.nucleotides.length != other.nucleotides.length) {
      throw new Error('DNA strands must be of equal length.');
    }
  }
}

module.exports = class Hamming {
  compute(strand1, strand2) {
    let s1 = new Strand(strand1);
    let s2 = new Strand(strand2);
    return s1.calculateHamming(s2);
  }
}
