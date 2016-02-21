'use strict';

const LETTERS = 'abcdefghijklmnopqrstuvwxyz'.split('')

module.exports = class Pangram {
  constructor(string) {
    this.string = string.toLowerCase()
  }

  isPangram() {
    return LETTERS.every(letter => {
      if (!this.string) return false
      
      return this.string.includes(letter)
    })
  }
}
