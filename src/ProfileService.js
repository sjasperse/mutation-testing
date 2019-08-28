class ProfileService {
  constructor(ProfileRepo, logger) {
    this.ProfileRepo = ProfileRepo;
    this.logger = logger;
  }

  update(profile) {
    this.logger.info(`Updating profile ${profile.id}: ${JSON.stringify(profile)}`);

    this.ProfileRepo.update(profile);

    this.logger.info(`Profile update for ${profile.id} successful.`);
  }
}

module.exports = ProfileService