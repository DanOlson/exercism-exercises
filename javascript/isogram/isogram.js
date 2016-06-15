'use strict';

const isogramDetector = function(string) {
  return {
    isIsogram() {
      const letterCounts = this.letterCounts()
      let ret = true
      for (const letter in letterCounts) {
        if (ret && letterCounts[letter] > 1) {
          ret = false
        }
      }
      return ret
    },

    letters() {
      return string.toLowerCase().match(/[a-z]/g) || []
    },

    letterCounts() {
      return this.letters().reduce((acc, letter) => {
        acc[letter] ? acc[letter] += 1 : acc[letter] = 1
        return acc
      }, {})
    }
  }
}

class Isogram {
  constructor(string) {
    this.detector = isogramDetector(string)
  }

  isIsogram() {
    return this.detector.isIsogram()
  }
}

module.exports = Isogram
