'use strict'

const DEFAULT_PHONE_NUMBER = '0000000000'
const VALID_LENGTH = 10

function processUserInput(userInput) {
  let cleaned = userInput.replace(/\D/g, '')
  if (cleaned.length > VALID_LENGTH) cleaned = cleaned.replace(/^1/, '')
  return isValid(cleaned) ? cleaned : DEFAULT_PHONE_NUMBER
}

function isValid(cleanedNumber) {
  return cleanedNumber.length === VALID_LENGTH
}

module.exports = class PhoneNumber {
  constructor(userInput) {
    this.processedNumber = processUserInput(userInput)
  }

  number() {
    return this.processedNumber
  }

  areaCode() {
    return this.processedNumber.substr(0, 3)
  }

  toString() {
    let centralOfficeCode = this.processedNumber.substr(3, 3)
    let lineNumber = this.processedNumber.substr(6, 4)
    return `(${this.areaCode()}) ${centralOfficeCode}-${lineNumber}`
  }
}
