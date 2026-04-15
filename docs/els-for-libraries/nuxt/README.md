# Nuxt

Endless Lifecycle Support (ELS) for Nuxt from TuxCare provides security fixes for Nuxt versions that have reached their end of life. This allows you to continue running Nuxt applications without vulnerability concerns, even after official support has ended.

## Supported Nuxt Versions

* Nuxt 0.10.7, 2.18.1

## Connection to ELS for Nuxt Library

This guide outlines the steps needed to integrate the TuxCare ELS for the Nuxt library.

## Step 1: Get Token

You need a token in order to use TuxCare ELS Nuxt library. Anonymous access is disabled. To receive the token, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

## Step 2: Set Up ELS for Nuxt

TuxCare provides ELS for Nuxt as an NPM package, hosted on a secure internal registry. Follow the steps below to add it to your project and get started.

1. Navigate to the root directory of your Nuxt project.
2. Create a `.npmrc` file or update it if it already exists.

   **Example:**

   ```text
   my-nuxt-project/
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

4. Update your `package.json` file to add the following overrides for the TuxCare packages:

   <TableTabs label="Choose Nuxt version: " >

    <template #nuxt_2.18.1>

    ```text
    "overrides": {
      "braces@2.3.2": "npm:@els-js/braces@>=2.3.2-tuxcare.1",
      "braces@3.0.3": "npm:@els-js/braces@>=3.0.3-tuxcare.1",
      "cookie@0.3.1": "npm:@els-js/cookie@>=0.3.1-tuxcare.1",
      "devalue@2.0.1": "npm:@els-js/devalue@>=2.0.1-tuxcare.1",
      "ip@2.0.1": "npm:@els-js/ip@>=2.0.1-tuxcare.1",
      "lodash.template@4.5.0": "npm:@els-js/lodash.template@>=4.5.0-tuxcare.1",
      "parse-git-config@3.0.0": "npm:@els-js/parse-git-config@>=3.0.0-tuxcare.1",
      "postcss@7.0.39": "npm:@els-js/postcss@>=7.0.39-tuxcare.1",
      "tmp@0.0.33": "npm:@els-js/tmp@>=0.0.33-tuxcare.1",
      "vue@2.7.16": "npm:@els-js/vue@>=2.7.16-tuxcare.1",
      "vue-template-compiler@2.7.16": "npm:@els-js/vue-template-compiler@>=2.7.16-tuxcare.1"
    }
    ```

    </template>

    <template #nuxt_0.10.7>

    ```text
    "overrides": {
      "ajv@4.11.8": "npm:@els-js/ajv@>=4.11.8-tuxcare.1",
      "ajv@6.14.0": "npm:@els-js/ajv@>=6.14.0-tuxcare.1",
      "color-string@0.3.0": "npm:@els-js/color-string@>=0.3.0-tuxcare.1",
      "deep-extend@0.4.2": "npm:@els-js/deep-extend@>=0.4.2-tuxcare.1",
      "is-svg@2.1.0": "npm:@els-js/is-svg@>=2.1.0-tuxcare.1",
      "js-yaml@3.7.0": "npm:@els-js/js-yaml@>=3.7.0-tuxcare.1",
      "mime@1.3.0": "npm:@els-js/mime@>=1.3.0-tuxcare.1",
      "postcss@5.2.18": "npm:@els-js/postcss@>=5.2.18-tuxcare.1",
      "serialize-javascript@1.9.1": "npm:@els-js/serialize-javascript@>=1.9.1-tuxcare.1",
      "ssri@5.3.0": "npm:@els-js/ssri@>=5.3.0-tuxcare.1",
      "webpack-dev-middleware@1.12.2": "npm:@els-js/webpack-dev-middleware@>=1.12.2-tuxcare.1",
      "webpack-dev-middleware@2.0.6": "npm:@els-js/webpack-dev-middleware@>=2.0.6-tuxcare.1",
      "ws@4.1.0": "npm:@els-js/ws@>=4.1.0-tuxcare.1",
      "yargs-parser@4.2.1": "npm:@els-js/yargs-parser@>=4.2.1-tuxcare.1"
    }
    ```

    </template>

   </TableTabs>

5. You need to remove the `node_modules` directory and the `package-lock.json` file, and also clear the `npm cache` before installing the patched packages. Use the following commands:

   ```text
   rm -rf node_modules package-lock.json && npm cache clean --force
   ```

6. Run the following command to install the ELS version of the Nuxt library (token for the TuxCare repository will be automatically picked up from your `.npmrc` file):

   ```text
   npm install
   ```

## Step 3: Verify Installation

1. To confirm the TuxCare Nuxt library is set up correctly, use npm to list the project's dependencies:

   ```text
   npm list
   ```

2. After reviewing the dependencies, run your application to ensure everything works correctly.

The `npm` tool should be able to identify and resolve dependencies from the TuxCare ELS for Nuxt repository.

## Vulnerability Exploitability eXchange (VEX) 

VEX is a machine-readable format that tells you if a known vulnerability is actually exploitable in your product. It reduces false positives, helps prioritize real risks.

TuxCare provides VEX for Nuxt ELS versions: [security.tuxcare.com/vex/cyclonedx/els_lang_javascript/nuxt/](https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript/nuxt/).

## Software Bill of Materials (SBOM)

For each published ELS package and version, TuxCare generates SBOM files. Those artifacts are published to TuxCare Nexus.

You can browse SBOM files for Nuxt here:

[https://nexus.repo.tuxcare.com/#browse/browse:els-js-sbom:nuxt](https://nexus.repo.tuxcare.com/#browse/browse:els-js-sbom:nuxt)

Use the credentials you received for TuxCare ELS ([Step 1: Get Token](#step-1:-get-token)) to access Nexus.

## How to Upgrade to a Newer Version of TuxCare Packages

If you have already installed a package with a `tuxcare.1` suffix and want to upgrade to a newer release (for example, `tuxcare.3`), remove node_modules, clear the npm cache to avoid conflicts, and then run the installation command:

  ```text
  rm -rf node_modules package-lock.json && npm cache clean --force
  npm install
  ```

## Resolved CVEs

Fixes for the following vulnerabilities are available in ELS for Nuxt from TuxCare versions:

<TableTabs label="Choose Nuxt version: " >

<template #nuxt_2.18.1>

|    CVE ID     | CVE Type  | Severity | Affected Libraries | Vulnerable Versions |
|:-------------:|:---------:|:--------:|:------------------:|:-------------------:|
| CVE-2024-34343 | Direct | Medium   | nuxt               |       < 3.12.4      |
| CVE-2024-4068 | Transitive | High     | braces             |       < 3.0.3       |
| CVE-2024-47764 | Transitive | Medium   | cookie             |       < 0.7.0       |
| CVE-2025-57820 | Transitive | High     | devalue            |       < 5.3.2       |
| CVE-2024-29415 | Transitive | High     | ip                 |      <= 2.0.1       |
| CVE-2021-23337 | Transitive | High     | lodash.template    |      < 4.17.21      |
| CVE-2025-25975 | Transitive | High     | parse-git-config   |        3.0.0        |
| CVE-2023-44270 | Transitive | High     | postcss            |      < 8.4.31       |
| CVE-2025-54798 | Transitive | High     | tmp                |      <= 0.2.4       |
| CVE-2024-9506 | Transitive | High     | vue                |   >=2.0.0 < 3.0.0   |
| CVE-2024-6783 | Transitive | High     | vue-template-compiler |   >=2.0.0 < 3.0.0   |

</template>

<template #nuxt_0.10.7>

|    CVE ID     | CVE Type  | Severity | Affected Libraries | Vulnerable Versions |
|:-------------:|:---------:|:--------:|:------------------:|:-------------------:|
| CVE-2024-34343 | Direct | Medium   | nuxt               |       < 3.12.4      |
| CVE-2020-7608 | Transitive | Medium   | yargs-parser | < 5.0.1, >= 6.0.0 < 13.1.2, >= 14.0.0 < 15.0.1 |
| CVE-2024-37890 | Transitive | High     | ws | < 5.2.4, >= 6.0.0 < 6.2.3, >= 7.0.0 < 7.5.10, >= 8.0.0 < 8.17.1 |
| CVE-2024-29180 | Transitive | High     | webpack-dev-middleware | < 5.3.4, >= 6.0.0 < 6.1.2, >= 7.0.0 < 7.1.0 |
| CVE-2019-16769 | Transitive | Medium   | serialize-javascript | < 2.1.1 |
| CVE-2020-7660 | Transitive | High     | serialize-javascript | < 3.1.0 |
| GHSA-5c6j-r48x-rmvq | Transitive | High     | serialize-javascript | <= 7.0.2 |
| CVE-2021-23382 | Transitive | Medium   | postcss | < 7.0.36, >= 8.0.0 < 8.2.13 |
| CVE-2023-44270 | Transitive | Medium   | postcss | < 8.4.31 |
| CVE-2017-16138 | Transitive | High     | mime | < 1.4.1, >= 2.0.1 < 2.0.3 |
| GHSA-2pr6-76vf-7546 | Transitive | Medium   | js-yaml | < 3.13.0 |
| GHSA-8j8c-7jfh-h6hx | Transitive | High     | js-yaml | < 3.13.1 |
| CVE-2025-64718 | Transitive | Medium   | js-yaml | < 3.14.2, >= 4.0.0 < 4.1.1 |
| CVE-2021-29059 | Transitive | High     | is-svg | >= 2.1.0 < 4.3.0 |
| CVE-2021-28092 | Transitive | High     | is-svg | >= 2.1.0 <= 4.2.1 |
| CVE-2018-3750 | Transitive | Critical | deep-extend | <= 0.5.0 |
| CVE-2021-29060 | Transitive | Medium   | color-string | < 1.5.5 |
| CVE-2020-15366 | Transitive | Medium   | ajv 4.11.8 | < 6.12.3 |
| CVE-2025-69873 | Transitive | Low      | ajv 4.11.8 | < 8.18.0 |
| CVE-2020-15366 | Transitive | Medium   | ajv 6.14.0 | < 6.12.3 |
| CVE-2025-69873 | Transitive | Low      | ajv 6.14.0 | < 6.14.0 |
| CVE-2024-37890 | Transitive | High     | webpack-dev-middleware | < 5.2.4, >= 6.0.0 < 6.2.3, >= 7.0.0 < 7.5.10, >= 8.0.0 < 8.17.1 |
| CVE-2021-27290 | Transitive | High     | ssri | >= 5.2.2 < 6.0.2, >= 7.0.0 < 8.0.1 |

</template>

</TableTabs>

If you are interested in the TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).
