'use strict';

const ONE_BILLION_SECONDS_IN_MILLISECONDS = 1000000000 * 1000

module.exports = class Gigasecond {
  constructor(startDate) {
    this.startDate = startDate;
  }

  date() {
    let milliseconds = this.startDate.getTime() + ONE_BILLION_SECONDS_IN_MILLISECONDS;
    return new Date(milliseconds);
  }
}
