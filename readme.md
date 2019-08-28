# Mutation Testing Example
This is a small sample project demonstrating mutation testing, and how it differs from code coverage. 

Created for [this presentation](https://docs.google.com/presentation/d/1qzcrY_u8A4h2zryvXsO8Hu-pBYtaIAu55OOkN_x0rFY/edit?usp=sharing)

NOTE: Right now after the tests finish running, stryker throws an error that it's temporary sandbox folder doesn't exist. This causes it to exit with a non-0 exit code, but the reports generate fine. Gotta live with it for now.

### How to run it:
```bash
npm install
npm run mocha # this runs just the mocha tests
npm test      # runs the tests, nyc coverage, and mutation tests
```

### Reports
Reports are written out to the `reports/mutation` and `reports/coverage` folders in the root of the repo.

### Technologies used
- Javascript
- Mocha
- Stryker
- NYC


