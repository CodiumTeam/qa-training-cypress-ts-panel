n# Codium QA Course

We want to test the [https://qa-codium-course.netlify.app](https://qa-codium-course.netlify.app) application using cypress.

## Cypress
### To run tests without Docker

Install the dependencies if you don't want to use docker
```bash
npm install
```

Run the tests
```bash
npm run test
```

or using make

```bash
make test
```

### Using Docker

#### Build image

```bash
make docker-build
```

#### Run tests

```bash
make docker-tests
```

To run cucumber version


```bash
make docker-tests-cucumber
```

## Jest
### To run tests

```bash
npm run unit
# or
make unit-test
```

### To run tests with coverage

```bash
npm run unit:coverage
# or
unit-coverage
```

# Data to use in the tests

## User to log in

    Email: info@codium.team
    Password: codiumTest

## Credit cards examples

| Credit Card Type | Credit Card Number |
| --- | --- |
| Visa | 4111111111111111 |


## User Agents examples

> Please note this is just an example, actual user-agent may change for different devices based on browser and os version.

| Device           | User-Agent String                                                                                                                               |
|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| iPhone           | Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1         |
| Android          | Mozilla/5.0 (Linux; Android 9; SM-G960F Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Mobile Safari/537.36  |
| Desktop Computer | Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36                              |

## DAY 2: Snapshot testing - Cypress image diff
Please follow the instructions for installation here:

[https://github.com/uktrade/cypress-image-diff/blob/HEAD/docs/Cypress%20integration.md](https://github.com/uktrade/cypress-image-diff/blob/HEAD/docs/Cypress%20integration.md)


## DAY 3: Cypress Cucumber configuration

Install modules

```bash
npm i -D @badeball/cypress-cucumber-preprocessor
npm i -D @bahmutov/cypress-esbuild-preprocessor
```

Then create a `.cypress-cucumber-preprocessorrc.json` in the root directory with:
```json
{
 "stepDefinitions": [
   "cypress/e2e/**/*.spec.ts"
 ]
}
```

And override `cypress.config.ts` with:

```javascript
import {defineConfig} from "cypress";
import getCompareSnapshotsPlugin from "cypress-image-diff-js/plugin";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      getCompareSnapshotsPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
    specPattern: 'cypress/e2e/**/*.feature',
  },
});
```

