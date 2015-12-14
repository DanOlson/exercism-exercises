//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

'use strict';

module.exports = class Bob {
  constructor() {
    this.defaultResponse     = 'Whatever.';
    this.shoutingResponse    = 'Whoa, chill out!';
    this.answer              = 'Sure.';
    this.saidNothingResponse = 'Fine. Be that way!';
  }

  hey(input) {
    if (this.isShouting(input)) return this.shoutingResponse;
    if (this.isQuestion(input)) return this.answer;
    if (this.saidNothing(input)) return this.saidNothingResponse;
    return this.defaultResponse;
  }

  isShouting(input) {
    return /[a-zA-Z]/.test(input) && input.toUpperCase() === input;
  }

  isQuestion(input) { 
    return /\?$/.test(input);
  }

  saidNothing(input) {
    return /^\s*$/.test(input);
  }
};
