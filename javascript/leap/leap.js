'use strict';

module.exports = class Year {
  constructor(year) {
    this.year = year;
  }

  isLeap() {
    return this.isDivisibleBy(4) && (!this.isDivisibleBy(100) || this.isDivisibleBy(400));
  }

  isDivisibleBy(num) {
    return this.year % num === 0;
  }
};
