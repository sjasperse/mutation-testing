const { describe, it } = require('mocha');
const { expect } = require('chai');
const isPositive = require('./isPositive');

describe('isPositive', () => {
  it('5 should be positive', () => {
    expect(isPositive(5)).to.be.true;
  });
  it('-5 should be negative', () => {
    expect(isPositive(-5)).to.be.false;
  });
  // what about 0?
});