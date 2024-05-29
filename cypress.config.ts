import {defineConfig} from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
 e2e: {
   async setupNodeEvents(on, config) {
     await addCucumberPreprocessorPlugin(on, config);
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



// import {defineConfig} from "cypress";
// import createBundler from '@bahmutov/cypress-esbuild-preprocessor'

// export default defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       on('file:preprocessor', createBundler())
//     },
//     specPattern: 'cypress/e2e/**/*.feature', //cypress/e2e/**/*.feature cypress/e2e/**/*.cy.{js,jsx,ts,tsx}
//     video:true,
//   },
// });
