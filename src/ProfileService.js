class ProfileService {
  constructor(ProfileRepo, CacheManager, logger) {
    this.ProfileRepo = ProfileRepo;
    this.CacheManager = CacheManager;
    this.logger = logger;
  }

  update(profile) {
    this.logger.info(`Updating profile ${JSON.stringify(profile)}`);

    this.ProfileRepo.update(profile);
    this.CacheManager.clear(`Profile:${profile.id}`); // line added later

    this.logger.info(`Updated profile ${profile.id}`);
  }
}

module.exports = ProfileService