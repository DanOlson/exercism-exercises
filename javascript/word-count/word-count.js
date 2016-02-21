'use strict';

function makeWordsArray(sentence) {
  return sentence.trim().split(/\s+/)
}

module.exports = class Words {
  count(words) {
    return makeWordsArray(words).reduce((accum, word) => {
      if (!accum.hasOwnProperty(word)) {
        accum[word] = 0
      }

      accum[word] += 1
      return accum
    }, {})
  }
}
