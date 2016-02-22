'use strict';

const BOTTLE  = 'bottle'
const BOTTLES = 'bottles'

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1)
}

class BeerSong {
  verse(bottlesRemaining) {
    let verse = new Verse(bottlesRemaining)
    return verse.sing()
  }

  sing(startNum, endNum) {
    endNum = endNum || 0
    if (startNum === endNum) {
      return this.verse(startNum)
    } else {
      return this.verse(startNum) + "\n" + this.sing(startNum - 1, endNum)
    }
  }
}

class Verse {
  constructor(bottleCount) {
    this.bottleCount = bottleCount
  }

  sing() {
    return `${this.buildFirstStanza()}
${this.buildSecondStanza()}
`
  }

  buildFirstStanza() {
    return `${this.firstPhrase()}, ${this.secondPhrase()}.`
  }

  buildSecondStanza() {
    if (this.nextBottleCount() < 0) return this.buildFinalStanza()
    return `${this.thirdPhrase()}, ${this.fourthPhrase()}.`
  }

  buildFinalStanza() {
    return `Go to the store and buy some more, ${this.buildPhraseWithLocation(99)}.`
  }

  firstPhrase() {
    return capitalize(this.buildPhraseWithLocation(this.bottleCount))
  }

  secondPhrase() {
    return this.buildPhrase(this.bottleCount)
  }

  thirdPhrase() {
    let subject = this.bottleCount === 1 ? 'it' : 'one'
    return `Take ${subject} down and pass it around`
  }

  fourthPhrase() {
    return this.buildPhraseWithLocation(this.nextBottleCount())
  }

  buildPhraseWithLocation(bottleCount) {
    return `${this.buildPhrase(bottleCount)} on the wall`
  }

  buildPhrase(bottleCount) {
    bottleCount = bottleCount || 'no more'
    let subject = bottleCount === 1 ? BOTTLE : BOTTLES
    return `${bottleCount} ${subject} of beer`
  }

  nextBottleCount() {
    return this.bottleCount - 1
  }
}

module.exports = BeerSong
