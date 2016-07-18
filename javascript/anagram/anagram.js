'use strict';

function anagramDetector(subject) {
  const sortedSubject = normalize(subject)

  function normalize(string) {
    return string.toLowerCase().split('').sort()
  }

  function isSameWord(candidate) {
    return subject.toLowerCase() === candidate.toLowerCase()
  }

  function isSameLength(candidate) {
    return subject.length === candidate.length
  }

  function hasSameLetters(candidate) {
    const stortedCandidate = normalize(candidate)
    return stortedCandidate.every((letter, idx) => {
      return sortedSubject[idx] === letter
    })
  }

  function isAnagram(candidate) {
    return isSameLength(candidate) &&
           hasSameLetters(candidate) &&
           !isSameWord(candidate)
  }

  return {
    matches(candidates) {
      return candidates.filter(isAnagram)
    }
  }
}

class Anagram {
  constructor(subject) {
    this.subject = subject
  }
  
  matches(candidates) {
    if (!Array.isArray(candidates)) {
      candidates = [].slice.apply(arguments)
    }
    return anagramDetector(this.subject).matches(candidates)
  }
}

module.exports = Anagram
