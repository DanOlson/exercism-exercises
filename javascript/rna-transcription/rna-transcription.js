'use strict';

const DNA_TO_RNA = {
  'C': 'G',
  'G': 'C',
  'A': 'U',
  'T': 'A'
}

module.exports = class DnaTranscriber {
  toRna(nucleotides) {
    return nucleotides.split('').map(this.translate).join('')
  }

  translate(nucleotide) {
    return DNA_TO_RNA[nucleotide]
  }
}
