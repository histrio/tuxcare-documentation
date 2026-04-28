# Ember.js

Endless Lifecycle Support (ELS) for Ember.js from TuxCare provides security fixes for Ember.js versions that have reached their end of life. This allows you to continue running Ember.js applications without vulnerability concerns, even after official support has ended.

## Supported Ember.js Versions

* Ember.js 0.2.7, 2.18.2, 3.28.6, 4.12.13

## Connection to ELS for Ember.js Library

This guide outlines the steps needed to integrate the TuxCare ELS for the Ember.js library.

## Step 1: Get Token

You need a token in order to use TuxCare ELS Ember.js library. Anonymous access is disabled. To receive the token, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

## Step 2: Set Up ELS for Ember.js

TuxCare publishes patched **transitive** dependencies for supported Ember.js versions as NPM packages on a secure internal registry. Choose your Ember.js version below for the exact package list and `overrides`.

1. Navigate to the root directory of your Ember.js project.
2. Create a `.npmrc` file or update it if it already exists.

   **Example:**

   ```text
   my-ember-project/
   ├── node_modules/
   ├── package.json
   ├── .npmrc         ⚠️ ← Create it here
   └── package-lock.json
   ```

3. Use an editor of your choice (e.g., VS Code) to add the following registry address line:

   ```text
   registry=https://registry.npmjs.org/
   @els-js:registry=https://nexus.repo.tuxcare.com/repository/els_js/
   //nexus.repo.tuxcare.com/repository/els_js/:_auth=${TOKEN}
   ```

   :::warning
   Replace ${TOKEN} with the token you received from [sales@tuxcare.com](mailto:sales@tuxcare.com).
   :::

4. Update your `package.json` so the transitive versions for your Ember.js version resolve to TuxCare packages. You can do this in two ways:

   <TableTabs label="Choose Ember.js version: " >

   <template #ember_0.2.7>

      ```text
      "dependencies": {
        "body-parser": "npm:@els-js/body-parser@>=1.8.4-tuxcare.1",
        "chownr": "npm:@els-js/chownr@>=0.0.2-tuxcare.1",
        "clean-css": "npm:@els-js/clean-css@>=2.2.23-tuxcare.1",
        "concat-stream": "npm:@els-js/concat-stream@>=1.4.8-tuxcare.1",
        "cross-spawn": "npm:@els-js/cross-spawn@>=0.2.9-tuxcare.1",
        "decompress-zip": "npm:@els-js/decompress-zip@>=0.1.0-tuxcare.1",
        "deep-extend": "npm:@els-js/deep-extend@>=0.2.11-tuxcare.1",
        "es5-ext": "npm:@els-js/es5-ext@>=0.10.7-tuxcare.1",
        "forwarded": "npm:@els-js/forwarded@>=0.1.0-tuxcare.1",
        "fresh": "npm:@els-js/fresh@>=0.2.4-tuxcare.1",
        "got": "npm:@els-js/got@>=2.9.2-tuxcare.1",
        "hoek": "npm:@els-js/hoek@>=2.14.0-tuxcare.1",
        "ini": "npm:@els-js/ini@>=1.3.3-tuxcare.1",
        "is-my-json-valid": "npm:@els-js/is-my-json-valid@>=2.10.1-tuxcare.1",
        "js-yaml": "npm:@els-js/js-yaml@>=3.3.1-tuxcare.1",
        "json5": "npm:@els-js/json5@>=0.5.1-tuxcare.1",
        "jsonpointer": "npm:@els-js/jsonpointer@>=1.1.0-tuxcare.1",
        "markdown-it": "npm:@els-js/markdown-it@>=4.0.3-tuxcare.1",
        "merge": "npm:@els-js/merge@>=1.2.1-tuxcare.1",
        "morgan": "npm:@els-js/morgan@>=1.5.3-tuxcare.1",
        "mout": "npm:@els-js/mout@>=0.11.0-tuxcare.1",
        "parsejson": "npm:@els-js/parsejson@>=0.0.3-tuxcare.1",
        "path-to-regexp": "npm:@els-js/path-to-regexp@>=0.1.3-tuxcare.1",
        "qs": "npm:@els-js/qs@>=2.4.2-tuxcare.1",
        "semver": "npm:@els-js/semver@>=2.3.2-tuxcare.1",
        "shell-quote": "npm:@els-js/shell-quote@>=1.4.3-tuxcare.1",
        "stringstream": "npm:@els-js/stringstream@>=0.0.4-tuxcare.1",
        "tar": "npm:@els-js/tar@>=2.1.1-tuxcare.1",
        "tar-fs": "npm:@els-js/tar-fs@>=1.5.1-tuxcare.1",
        "tough-cookie": "npm:@els-js/tough-cookie@>=1.2.0-tuxcare.1",
        "tunnel-agent": "npm:@els-js/tunnel-agent@>=0.4.0-tuxcare.1",
        "uglify-js": "npm:@els-js/uglify-js@>=1.1.1-tuxcare.1",
        "websocket-extensions": "npm:@els-js/websocket-extensions@>=0.1.1-tuxcare.1",
        "xmldom": "npm:@els-js/xmldom@>=0.1.31-tuxcare.1"
      },
      "overrides": {
        "body-parser@1.8.4": "npm:@els-js/body-parser@>=1.8.4-tuxcare.1",
        "chownr@0.0.2": "npm:@els-js/chownr@>=0.0.2-tuxcare.1",
        "clean-css@2.2.23": "npm:@els-js/clean-css@>=2.2.23-tuxcare.1",
        "concat-stream@1.4.8": "npm:@els-js/concat-stream@>=1.4.8-tuxcare.1",
        "cross-spawn@0.2.9": "npm:@els-js/cross-spawn@>=0.2.9-tuxcare.1",
        "decompress-zip@0.1.0": "npm:@els-js/decompress-zip@>=0.1.0-tuxcare.1",
        "deep-extend@0.2.11": "npm:@els-js/deep-extend@>=0.2.11-tuxcare.1",
        "es5-ext@0.10.7": "npm:@els-js/es5-ext@>=0.10.7-tuxcare.1",
        "forwarded@0.1.0": "npm:@els-js/forwarded@>=0.1.0-tuxcare.1",
        "fresh@0.2.4": "npm:@els-js/fresh@>=0.2.4-tuxcare.1",
        "got@2.9.2": "npm:@els-js/got@>=2.9.2-tuxcare.1",
        "hoek@2.12.0": "npm:@els-js/hoek@>=2.12.0-tuxcare.1",
        "hoek@2.14.0": "npm:@els-js/hoek@>=2.14.0-tuxcare.1",
        "ini@1.3.3": "npm:@els-js/ini@>=1.3.3-tuxcare.1",
        "is-my-json-valid@2.10.1": "npm:@els-js/is-my-json-valid@>=2.10.1-tuxcare.1",
        "js-yaml@3.3.1": "npm:@els-js/js-yaml@>=3.3.1-tuxcare.1",
        "json5@0.5.1": "npm:@els-js/json5@>=0.5.1-tuxcare.1",
        "jsonpointer@1.1.0": "npm:@els-js/jsonpointer@>=1.1.0-tuxcare.1",
        "markdown-it@4.0.3": "npm:@els-js/markdown-it@>=4.0.3-tuxcare.1",
        "merge@1.2.1": "npm:@els-js/merge@>=1.2.1-tuxcare.1",
        "morgan@1.5.3": "npm:@els-js/morgan@>=1.5.3-tuxcare.1",
        "mout@0.11.0": "npm:@els-js/mout@>=0.11.0-tuxcare.1",
        "parsejson@0.0.3": "npm:@els-js/parsejson@>=0.0.3-tuxcare.1",
        "path-to-regexp@0.1.3": "npm:@els-js/path-to-regexp@>=0.1.3-tuxcare.1",
        "qs@2.2.5": "npm:@els-js/qs@>=2.2.5-tuxcare.1",
        "qs@2.4.2": "npm:@els-js/qs@>=2.4.2-tuxcare.1",
        "semver@2.3.2": "npm:@els-js/semver@>=2.3.2-tuxcare.1",
        "shell-quote@1.4.3": "npm:@els-js/shell-quote@>=1.4.3-tuxcare.1",
        "stringstream@0.0.4": "npm:@els-js/stringstream@>=0.0.4-tuxcare.1",
        "tar@2.1.1": "npm:@els-js/tar@>=2.1.1-tuxcare.1",
        "tar-fs@1.5.1": "npm:@els-js/tar-fs@>=1.5.1-tuxcare.1",
        "tough-cookie@1.2.0": "npm:@els-js/tough-cookie@>=1.2.0-tuxcare.1",
        "tunnel-agent@0.4.0": "npm:@els-js/tunnel-agent@>=0.4.0-tuxcare.1",
        "uglify-js@1.1.1": "npm:@els-js/uglify-js@>=1.1.1-tuxcare.1",
        "websocket-extensions@0.1.1": "npm:@els-js/websocket-extensions@>=0.1.1-tuxcare.1",
        "xmldom@0.1.31": "npm:@els-js/xmldom@>=0.1.31-tuxcare.1"
      }
      ```

    </template>

    <template #ember_2.18.2>

    * **Option 1: Manual update**

      ```text
      "dependencies": {
        "terser": "npm:@els-js/terser@>=3.17.0-tuxcare.1",
        "rollup": "npm:@els-js/rollup@>=0.41.6-tuxcare.1",
        "printf": "npm:@els-js/printf@>=0.5.3-tuxcare.1",
        "markdown-it": "npm:@els-js/markdown-it@>=8.4.2-tuxcare.1",
        "clean-css": "npm:@els-js/clean-css@>=3.4.28-tuxcare.1"
      },
      "overrides": {
        "terser@3.17.0": "npm:@els-js/terser@>=3.17.0-tuxcare.1",
        "rollup@0.41.6": "npm:@els-js/rollup@>=0.41.6-tuxcare.1",
        "printf@0.5.3": "npm:@els-js/printf@>=0.5.3-tuxcare.1",
        "markdown-it@8.4.2": "npm:@els-js/markdown-it@>=8.4.2-tuxcare.1",
        "clean-css@3.4.28": "npm:@els-js/clean-css@>=3.4.28-tuxcare.1"
      }
      ```

    * **Option 2: TuxCare Patcher (Automated)**

      ```text
      npm install -g @els-js/tuxcare-patcher --userconfig ./.npmrc
      tuxcare-patch-js
      ```

      The patcher will update your `package.json`, for example, from:

      ```text
      "dependencies": {
        "terser": "3.17.0",
        "rollup": "0.41.6",
        "printf": "0.5.3",
        "markdown-it": "8.4.2",
        "clean-css": "3.4.28"
      }
      ```

      to:

      ```text
      "dependencies": {
        "terser": "npm:@els-js/terser@>=3.17.0-tuxcare.1",
        "rollup": "npm:@els-js/rollup@>=0.41.6-tuxcare.1",
        "printf": "npm:@els-js/printf@>=0.5.3-tuxcare.1",
        "markdown-it": "npm:@els-js/markdown-it@>=8.4.2-tuxcare.1",
        "clean-css": "npm:@els-js/clean-css@>=3.4.28-tuxcare.1"
      },
      "overrides": {
        "terser@3.17.0": "npm:@els-js/terser@>=3.17.0-tuxcare.1",
        "rollup@0.41.6": "npm:@els-js/rollup@>=0.41.6-tuxcare.1",
        "printf@0.5.3": "npm:@els-js/printf@>=0.5.3-tuxcare.1",
        "markdown-it@8.4.2": "npm:@els-js/markdown-it@>=8.4.2-tuxcare.1",
        "clean-css@3.4.28": "npm:@els-js/clean-css@>=3.4.28-tuxcare.1"
      }
      ```

    </template>

    <template #ember_3.28.6>

    * **Option 1: Manual update**

      ```text
      "dependencies": {
        "rollup": "npm:@els-js/rollup@>=0.57.1-tuxcare.1",
        "markdown-it": "npm:@els-js/markdown-it@>=13.0.2-tuxcare.1",
        "diff": "npm:@els-js/diff@>=7.0.0-tuxcare.1"
      },
      "overrides": {
        "rollup@0.57.1": "npm:@els-js/rollup@>=0.57.1-tuxcare.1",
        "markdown-it@13.0.2": "npm:@els-js/markdown-it@>=13.0.2-tuxcare.1",
        "diff@7.0.0": "npm:@els-js/diff@>=7.0.0-tuxcare.1"
      }
      ```

    * **Option 2: TuxCare Patcher (Automated)**

      Install the Patcher globally and run it. The TuxCare Patcher updates your `package.json` so these library versions use the corresponding TuxCare `@els-js/*` packages.

      ```text
      npm install -g @els-js/tuxcare-patcher --userconfig ./.npmrc
      tuxcare-patch-js
      ```

      The patcher will update your `package.json`, for example, from:

      ```text
      "dependencies": {
        "rollup": "0.57.1",
        "markdown-it": "13.0.2",
        "diff": "7.0.0"
      }
      ```

      to:

      ```text
      "dependencies": {
        "rollup": "npm:@els-js/rollup@>=0.57.1-tuxcare.1",
        "markdown-it": "npm:@els-js/markdown-it@>=13.0.2-tuxcare.1",
        "diff": "npm:@els-js/diff@>=7.0.0-tuxcare.1"
      },
      "overrides": {
        "rollup@0.57.1": "npm:@els-js/rollup@>=0.57.1-tuxcare.1",
        "markdown-it@13.0.2": "npm:@els-js/markdown-it@>=13.0.2-tuxcare.1",
        "diff@7.0.0": "npm:@els-js/diff@>=7.0.0-tuxcare.1"
      }
      ```

    </template>

    <template #ember_4.12.13>

    * **Option 1: Manual update**

      ```text
      "dependencies": {
        "@babel/runtime": "npm:@els-js/babel-runtime@>=7.12.18-tuxcare.1",
        "tmp": "npm:@els-js/tmp@>=0.0.28-tuxcare.1"
      },
      "overrides": {
        "@babel/runtime@7.12.18": "npm:@els-js/babel-runtime@>=7.12.18-tuxcare.1",
        "tmp@0.0.28": "npm:@els-js/tmp@>=0.0.28-tuxcare.1"
      }
      ```

    * **Option 2: TuxCare Patcher (Automated)**

      ```text
      npm install -g @els-js/tuxcare-patcher --userconfig ./.npmrc
      tuxcare-patch-js
      ```

      The patcher will update your `package.json`, for example, from:

      ```text
      "dependencies": {
        "@babel/runtime": "7.12.18",
        "tmp": "0.0.28"
      }
      ```

      to:

      ```text
      "dependencies": {
        "@babel/runtime": "npm:@els-js/babel-runtime@>=7.12.18-tuxcare.1",
        "tmp": "npm:@els-js/tmp@>=0.0.28-tuxcare.1"
      },
      "overrides": {
        "@babel/runtime@7.12.18": "npm:@els-js/babel-runtime@>=7.12.18-tuxcare.1",
        "tmp@0.0.28": "npm:@els-js/tmp@>=0.0.28-tuxcare.1"
      }
      ```

    </template>

   </TableTabs>

5. You need to remove the `node_modules` directory and the `package-lock.json` file, and also clear the `npm cache` before installing the patched packages. Use the following commands:

   ```text
   rm -rf node_modules package-lock.json && npm cache clean --force
   ```

6. Run the following command to install the ELS packages (the token for the repository will be automatically picked up from your `.npmrc` file):

   ```text
   npm install
   ```

## Step 3: Verify Installation

1. To confirm the TuxCare Ember.js library is set up correctly, use npm to list the project's dependencies:

   ```text
   npm list
   ```

2. After reviewing the dependencies, run your application to ensure everything works correctly.

The `npm` tool should be able to identify and resolve dependencies from the TuxCare ELS registry.

## Vulnerability Exploitability eXchange (VEX)

VEX is a machine-readable format that tells you if a known vulnerability is actually exploitable in your product. It reduces false positives, helps prioritize real risks.

TuxCare publishes VEX data for JavaScript ELS packages, including the **transitive** dependencies patched for Ember.js. The index is at [https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript](https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript).

## Software Bill of Materials (SBOM)

For each published ELS package and version, TuxCare generates SBOM files. Those artifacts are published to TuxCare Nexus.

You can browse SBOM files for Ember.js transitive dependencies here:

[https://nexus.repo.tuxcare.com/#browse/browse:els-js-sbom](https://nexus.repo.tuxcare.com/#browse/browse:els-js-sbom)

Use the credentials you received for TuxCare ELS ([Step 1: Get Token](#step-1:-get-token)) to access Nexus.

## How to Upgrade to a Newer Version of TuxCare Packages

If you have already installed a package with a `tuxcare.1` suffix and want to upgrade to a newer release (for example, `tuxcare.3`), remove node_modules, clear the npm cache to avoid conflicts, and then run the installation command:

  ```text
  rm -rf node_modules package-lock.json && npm cache clean --force
  npm install
  ```

## Resolved CVEs

Fixes for the following **transitive** vulnerabilities are available in ELS for Ember.js from TuxCare versions:

<TableTabs label="Choose Ember.js version: " >

<template #ember_2.18.2>

| CVE ID | CVE Type | Severity | Affected Libraries | Vulnerable Versions |
| :------------: | :------: |:--------:|:------------------:| :----------------: |
| CVE-2021-23354 | Transitive | High | printf | < 0.6.1 |
| CVE-2022-21670 | Transitive | Medium | markdown-it | < 12.3.2 |
| CVE-2022-25858 | Transitive | High | terser | < 4.8.1, >= 5.0.0 < 5.14.2 |
| CVE-2024-47068 | Transitive | Medium | rollup | >= 0.59.0 < 2.79.2, >= 3.0.0 < 3.29.5, >= 4.0.0 < 4.22.4 |
| CVE-2026-27606 | Transitive | Critical | rollup | < 2.80.0, >= 3.0.0 < 3.30.0, >= 4.0.0 < 4.59.0 |
| GHSA-wxhq-pm8v-cw75 | Transitive | Low | clean-css | < 4.1.11 |

</template>

<template #ember_0.2.7>

| CVE ID | CVE Type | Severity | Affected Libraries | Vulnerable Versions |
| :------------: | :------: |:--------:|:------------------:| :----------------: |
| CVE-2021-21366 | Transitive | Medium | xmldom | < 0.5.0 |
| CVE-2022-39353 | Transitive | Critical | xmldom | < 0.6.0, >= 0.7.0 < 0.7.8, >= 0.8.0 < 0.8.5, 0.9.0 betas |
| CVE-2021-32796 | Transitive | Medium | xmldom | <= 0.6.0 |
| CVE-2020-7662 | Transitive | High | websocket-extensions | < 0.1.4 |
| CVE-2015-8858 | Transitive | High | uglify-js | < 2.6.0 |
| CVE-2015-8857 | Transitive | Critical | uglify-js | < 2.4.24 |
| GHSA-xc7v-wxcw-j472 | Transitive | Medium | tunnel-agent | < 0.6.0 |
| CVE-2016-1000232 | Transitive | Medium | tough-cookie | >= 0.9.7 <= 2.2.2 |
| CVE-2017-15010 | Transitive | High | tough-cookie | <= 2.3.2 |
| CVE-2023-26136 | Transitive | Critical | tough-cookie | < 4.1.3 |
| CVE-2018-20835 | Transitive | High | tar-fs | < 1.16.2 |
| CVE-2025-59343 | Transitive | — | tar-fs | < 1.16.6, < 2.1.4, < 3.1.1 |
| CVE-2025-48387 | Transitive | — | tar-fs | < 1.16.5, < 2.1.3, < 3.0.9 |
| CVE-2024-12905 | Transitive | High | tar-fs | < 1.16.4, >= 2.0.0 < 2.1.2, >= 3.0.0 < 3.0.8 |
| CVE-2021-32804 | Transitive | High | tar | < 3.2.3, >= 4.0.0 < 4.4.15, >= 5.0.0 < 5.0.7, >= 6.0.0 < 6.1.2 |
| CVE-2015-8860 | Transitive | High | tar | < 2.0.0 |
| CVE-2021-37713 | Transitive | High | tar | < 4.4.18, >= 5.0.0 < 5.0.11, >= 6.0.0 < 6.1.10 |
| CVE-2018-20834 | Transitive | High | tar | < 2.2.2, >= 3.0.0 < 4.4.2 |
| CVE-2024-28863 | Transitive | Medium | tar | < 6.2.1 |
| CVE-2026-23950 | Transitive | High | tar | <= 7.5.3 |
| CVE-2026-24842 | Transitive | High | tar | < 7.5.7 |
| CVE-2026-23745 | Transitive | — | tar | <= 7.5.2 |
| CVE-2026-26960 | Transitive | High | tar | <= 7.5.7 |
| CVE-2026-29786 | Transitive | — | tar | < 7.5.10 |
| CVE-2018-21270 | Transitive | Medium | stringstream | < 0.0.6 |
| CVE-2016-10541 | Transitive | Critical | shell-quote | <= 1.6.0 |
| CVE-2022-25883 | Transitive | High | semver | < 7.5.2 |
| CVE-2015-8855 | Transitive | High | semver | < 4.3.2 |
| CVE-2017-1000048 | Transitive | High | qs | <= 5.2.1, >= 6.0.0 < 6.0.4, >= 6.1.0 < 6.1.2, >= 6.2.0 < 6.2.3, >= 6.3.0 < 6.3.2 |
| CVE-2022-24999 | Transitive | High | qs | < 6.10.3 |
| CVE-2025-15284 | Transitive | — | qs | < 6.14.1 |
| CVE-2024-45296 | Transitive | High | path-to-regexp | < 0.1.10 (0.1.x), < 8.0.0 (≥ 0.2) |
| CVE-2024-52798 | Transitive | — | path-to-regexp | >= 0.1.0 < 0.1.12 |
| CVE-2017-16113 | Transitive | High | parsejson | <= 0.0.3 |
| CVE-2020-7792 | Transitive | High | mout | all versions |
| CVE-2022-21213 | Transitive | High | mout | all versions |
| CVE-2019-5413 | Transitive | Critical | morgan | < 1.9.1 |
| CVE-2020-28499 | Transitive | Critical | merge | all versions |
| CVE-2022-21670 | Transitive | Medium | markdown-it | <= 12.3.1 |
| CVE-2021-23807 | Transitive | Critical | jsonpointer | < 5.0.0 |
| CVE-2022-46175 | Transitive | High | json5 | <= 1.0.1, >= 2.0.0 <= 2.2.1 |
| GHSA-2pr6-76vf-7546 | Transitive | Medium | js-yaml | < 3.13.0 |
| GHSA-8j8c-7jfh-h6hx | Transitive | High | js-yaml | < 3.13.1 |
| CVE-2025-64718 | Transitive | Medium | js-yaml | < 3.14.2, >= 4.0.0 < 4.1.1 |
| CVE-2018-1107 | Transitive | Medium | is-my-json-valid | < 1.4.1, >= 2.0.0 < 2.17.2 |
| CVE-2016-2537 | Transitive | High | is-my-json-valid | < 2.12.4 |
| CVE-2020-7788 | Transitive | Critical | ini | < 1.3.6 |
| CVE-2020-36604 | Transitive | High | hoek | < 8.5.1, >= 9.0.0 < 9.0.3 |
| CVE-2018-3728 | Transitive | High | hoek | < 4.2.0, >= 5.0.0 < 5.0.3 |
| CVE-2022-33987 | Transitive | Medium | got | < 11.8.5, >= 12.0.0 < 12.1.0 |
| CVE-2017-16119 | Transitive | High | fresh | < 0.5.2 |
| CVE-2017-16118 | Transitive | High | forwarded | < 0.1.2 |
| CVE-2024-27088 | Transitive | — | es5-ext | >= 0.10.0 < 0.10.63 |
| CVE-2018-3750 | Transitive | Critical | deep-extend | <= 0.5.0 |
| GHSA-73v8-v6g4-vrpm | Transitive | High | decompress-zip | < 0.2.2 |
| CVE-2024-21538 | Transitive | — | cross-spawn | < 6.0.6, >= 7.0.0 < 7.0.5 |
| GHSA-g74r-ffvr-5q9f | Transitive | Medium | concat-stream | >= 1.5.0 < 1.5.2 |
| GHSA-wxhq-pm8v-cw75 | Transitive | Low | clean-css | < 4.1.11 |
| CVE-2017-18869 | Transitive | Low | chownr | < 1.1.0 |
| CVE-2024-45590 | Transitive | High | body-parser | < 1.20.3 |

</template>

<template #ember_3.28.6>

| CVE ID | CVE Type | Severity | Affected Libraries | Vulnerable Versions |
| :------------: | :------: |:--------:|:------------------:| :----------------: |
| CVE-2024-47068 | Transitive | Medium | rollup | < 2.79.2, >= 3.0.0 < 3.29.5, >= 4.0.0 < 4.22.4 |
| CVE-2026-27606 | Transitive | Critical | rollup | < 2.80.0, >= 3.0.0 < 3.30.0, >= 4.0.0 < 4.59.0 |
| CVE-2026-2327 | Transitive | High | markdown-it | >= 13.0.0 < 14.1.1 |
| CVE-2026-24001 | Transitive | High | diff | < 3.5.1, >= 4.0.0 < 4.0.4, >= 5.0.0 < 5.2.2, >= 6.0.0 < 8.0.3 |

</template>

<template #ember_4.12.13>

| CVE ID | CVE Type | Severity | Affected Libraries | Vulnerable Versions |
| :------------: | :------: |:--------:|:------------------:| :----------------: |
| CVE-2025-27789 | Transitive | Medium | @babel/runtime | < 7.26.10 |
| CVE-2025-54798 | Transitive | Low | tmp | <= 0.2.3 |

</template>

</TableTabs>

If you are interested in the TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).
