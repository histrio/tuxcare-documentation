# Ember.js

Endless Lifecycle Support (ELS) for Ember.js from TuxCare provides security fixes for Ember.js versions that have reached their end of life. This allows you to continue running Ember.js applications without vulnerability concerns, even after official support has ended.

## Supported Ember.js Versions

* Ember.js 2.18.2

## Connection to ELS for Ember.js Library

This guide outlines the steps needed to integrate the TuxCare ELS for the Ember.js library.

## Step 1: Get Token

You need a token in order to use TuxCare ELS Ember.js library. Anonymous access is disabled. To receive the token, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

## Step 2: Set Up ELS for Ember.js

TuxCare publishes patched **transitive** dependencies for Ember.js 2.18.2 as NPM packages on a secure internal registry: **terser** 3.17.0, **rollup** 0.41.6, **printf** 0.5.3, **markdown-it** 8.4.2, and **clean-css** 3.4.28. Follow the steps below to add them to your project.

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
   @els-js:registry=https://nexus.repo.tuxcare.com/repository/els-js/
   //nexus.repo.tuxcare.com/repository/els-js/:_auth=${TOKEN}
   ```

   :::warning
   Replace ${TOKEN} with the token you received from [sales@tuxcare.com](mailto:sales@tuxcare.com).
   :::

4. Update your `package.json` so the transitive versions above resolve to TuxCare packages. You can do this in two ways:

   * **Option 1: Manual update**

     Add `overrides` (and optional matching `dependencies` entries) so **terser** 3.17.0, **rollup** 0.41.6, **printf** 0.5.3, **markdown-it** 8.4.2, and **clean-css** 3.4.28 use the `@els-js/*` builds.

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

     Install the Patcher globally and run it. The TuxCare Patcher updates your `package.json` so these library versions use the corresponding TuxCare `@els-js/*` packages.

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

## How to Upgrade to a Newer Version of TuxCare Packages

If you have already installed a package with a `tuxcare.1` suffix and want to upgrade to a newer release (for example, `tuxcare.3`), remove node_modules, clear the npm cache to avoid conflicts, and then run the installation command:

  ```text
  rm -rf node_modules package-lock.json && npm cache clean --force
  npm install
  ```

## Resolved CVEs

Fixes for the following **transitive** vulnerabilities are available in ELS for Ember.js from TuxCare versions:

| CVE ID | CVE Type | Severity | Affected Libraries | Vulnerable Versions |
| :------------: | :------: |:--------:|:------------------:| :----------------: |
| CVE-2021-23354 | Transitive | High | printf | < 0.6.1 |
| CVE-2022-21670 | Transitive | Medium | markdown-it | < 12.3.2 |
| CVE-2022-25858 | Transitive | High | terser | < 4.8.1, >= 5.0.0 < 5.14.2 |
| CVE-2024-47068 | Transitive | Medium | rollup | >= 0.59.0 < 2.79.2, >= 3.0.0 < 3.29.5, >= 4.0.0 < 4.22.4 |
| CVE-2026-27606 | Transitive | Critical | rollup | < 2.80.0, >= 3.0.0 < 3.30.0, >= 4.0.0 < 4.59.0 |
| GHSA-wxhq-pm8v-cw75 | Transitive | Low | clean-css | < 4.1.11 |

If you are interested in the TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).
