'use strict';

function song() {
  const verseDatas = [
    {
      subject: 'fly',
      rationale: "I don't know why she swallowed the fly. Perhaps she'll die.\n"
    },
    {
      subject: 'spider',
      exclamation: 'It wriggled and jiggled and tickled inside her.',
      rationale: 'She swallowed the spider to catch the fly.'
    },
    {
      subject: 'bird',
      exclamation: 'How absurd to swallow a bird!',
      rationale: 'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.'
    },
    {
      subject: 'cat',
      exclamation: 'Imagine that, to swallow a cat!',
      rationale: 'She swallowed the cat to catch the bird.'
    },
    {
      subject: 'dog',
      exclamation: 'What a hog, to swallow a dog!',
      rationale: 'She swallowed the dog to catch the cat.'
    },
    {
      subject: 'goat',
      exclamation: 'Just opened her throat and swallowed a goat!',
      rationale: 'She swallowed the goat to catch the dog.'
    },
    {
      subject: 'cow',
      exclamation: "I don't know how she swallowed a cow!",
      rationale: 'She swallowed the cow to catch the goat.'
    },
    {
      subject: 'horse',
      exclamation: "She's dead, of course!\n"
    }
  ]

  function buildVerseRange(start, end) {
    const iter = []
    while (start <= end) {
      iter.push(start)
      start++
    }

    return iter
  }

  return {
    generateVerse(num) {
      const verseData = verseDatas[num - 1]
      let rationales = null
      if (verseData.rationale) {
        rationales = verseDatas
          .slice(0, num)
          .reverse()
          .map(d => d.rationale)
          .join("\n")
      }
      const verse = [
        `I know an old lady who swallowed a ${verseData.subject}.`,
        verseData.exclamation,
        rationales
      ].filter(e => !!e).join("\n")

      return verse
    },

    generateVerses(startVerse, endVerse) {
      return buildVerseRange(startVerse, endVerse)
        .map(this.generateVerse)
        .join("\n") + "\n"
    }
  }
}

class FoodChain {
  verse(num) {
    return song().generateVerse(num)
  }

  verses(start, end) {
    return song().generateVerses(start, end)
  }
}

module.exports = FoodChain
