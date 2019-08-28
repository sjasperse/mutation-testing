const { describe, it } = require('mocha');
const { expect } = require('chai');
const mapAToB = require('./mapAToB');

describe('mapAToB', () => {
  it('It should map the properties', () => {
    const a = { prop1: 1, prop2: 2, prop3: 3 };

    const b = mapAToB(a);

    expect(b.prop1).to.equal(a.prop1);
    expect(b.prop2).to.equal(a.prop2);
    // forgot to test for b.prop3 because it was added later
  });
});