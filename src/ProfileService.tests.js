const { describe, beforeEach, it } = require('mocha');
const { expect } = require('chai');
const ProfileService = require('./ProfileService');
const sinon = require('sinon');

describe('ProfileService', () => {
  let logger;
  let profileRepo;
  let profileService;
  let cacheManager;
  beforeEach(() => {
    logger = { info: () => {} };
    profileRepo = { update: sinon.stub() };
    cacheManager = { clear: sinon.stub() };
    profileService = new ProfileService(profileRepo, cacheManager, logger);
  });

  it('Calling .update() should update the profile', () => {
    const profile = {};

    profileService.update(profile);

    expect(profileRepo.update.calledWith(profile)).to.be.true;
  });
  
});