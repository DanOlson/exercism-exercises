'use strict';

const namesInUse = [];
const letterPool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberPool = '0123456789';
const prefixSize = 2;
const suffixSize = 3;

module.exports = function robotFactory() {
  function randFromPool(pool, size) {
    return [].concat.apply([], Array(size)).reduce(memo => {
      const randomIndex = Math.floor(Math.random() * pool.length);
      memo += pool[randomIndex];
      return memo;
    }, '');
  }

  function generatePrefix() {
    return randFromPool(letterPool, prefixSize);
  }

  function generateSuffix() {
    return randFromPool(numberPool, suffixSize);
  }

  function generateName() {
    const nameCandidate = generatePrefix() + generateSuffix();
    if (namesInUse.indexOf(nameCandidate) >= 0) {
      return generateName();
    } else {
      namesInUse.push(nameCandidate);
      return nameCandidate;
    }
  }

  function resetName() {
    this.name = generateName();
  }

  return {
    name: generateName(),
    reset: resetName
  }
};
