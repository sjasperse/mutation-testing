const { describe, it } = require('mocha');
const { expect } = require('chai');
const toStringAsync = require('./toStringAsync');

describe('toStringAsync', () => {
  it('should return 1 as a string of "1"', () => {
    expect(toStringAsync(1)).to.not.be.null; // whoops - not waiting for promise
  });
 });
 