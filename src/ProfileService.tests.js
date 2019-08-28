const { describe, beforeEach, it } = require('mocha');
const { expect } = require('chai');
const ProfileService = require('./ProfileService');
const sinon = require('sinon');

describe('ProfileService', () => {
  let logger;
  let profileRepo;
  let profileService;
  beforeEach(() => {
    logger = { info: () => {} };
    profileRepo = { update: sinon.stub() };
    profileService = new ProfileService(profileRepo, logger);
  });

  it('Calling .update() should update the profile', () => {
    const profile = {};

    profileService.update(profile);

    expect(profileRepo.update.calledWith(profile));
  });
  
});