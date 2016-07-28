'use strict';

function rosterFactory(currentRoster = {}, additions = {}) {
  const { grade, kid } = additions;
  const enrolledKids = currentRoster[grade] || []
  enrolledKids.push(kid)
  currentRoster[grade] = enrolledKids.sort()
  return currentRoster
}

function School() {
  let roster = {}

  return {
    add(kid, grade) {
      roster = rosterFactory(roster, { kid, grade })
    },

    roster() {
      return roster
    },

    grade(gradeNum) {
      return roster[gradeNum] || []
    }
  }
}

module.exports = School
