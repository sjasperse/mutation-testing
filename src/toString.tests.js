const {describe, it} = require('mocha');
const { expect } = require('chai');
const toString = require('./toString');

describe('toString', () => {
  it('should return 1 as a string of "1"', () => {
    expect(toString(1)).to.equal("1");
  });
});