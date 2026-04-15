# jQuery

Endless Lifecycle Support (ELS) for jQuery from TuxCare provides security fixes for jQuery versions that have reached their end of life. This allows you to continue running jQuery applications without vulnerability concerns, even after official support has ended.

## Supported jQuery Versions

* jQuery 1.8.2, 1.12.4, 2.2.4, 3.4.1

## Connection to ELS for jQuery Library

This guide outlines the steps needed to integrate the TuxCare ELS for the jQuery library.

## Step 1: Get Token

You need a token in order to use TuxCare ELS jQuery library. Anonymous access is disabled. To receive the token, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

## Step 2: Set Up ELS for jQuery

TuxCare provides ELS for jQuery as an NPM package, hosted on a secure internal registry. Follow the steps below to add it to your project and get started.

1. Navigate to the root directory of your jQuery project.
2. Create a `.npmrc` file or update it if it already exists.

   **Example:**

   ```text
   my-jquery-project/
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

4. Update your `package.json` file to replace your jQuery dependencies with the TuxCare packages. You can do this in two ways:

   * **Option 1: Manual update**

     Manually update your `package.json` file by replacing your jQuery dependencies with the TuxCare packages. This method gives you full control over which packages to update.

   * **Option 2: TuxCare Patcher (Automated)**

     Install the Patcher globally and run it. The TuxCare Patcher automatically detects the jQuery version in your `package.json` and updates your `dependencies` and `overrides` to use the corresponding TuxCare `@els-js/*` packages.

     ```text
     npm install -g @els-js/tuxcare-patcher --userconfig ./.npmrc
     tuxcare-patch-js
     ```

     The patcher will update your `package.json`, for example, from:

     ```text
     "dependencies": {
       "jquery": "^1.12.4"
     }
     ```

     to:

     ```text
     "dependencies": {
       "jquery": "npm:@els-js/jquery@>=1.12.4-tuxcare.1"
     },
     "overrides": {
       "jquery@1.12.4": "npm:@els-js/jquery@>=1.12.4-tuxcare.1"
     }
     ```

     <TableTabs label="Choose jQuery version: " >

      <template #jQuery_1.8.2>

      ```text
      "dependencies": {
        "jquery": "npm:@els-js/jquery@>=1.8.2-tuxcare.1"
      },
      "overrides": {
        "jquery@1.8.2": "npm:@els-js/jquery@>=1.8.2-tuxcare.1"
      }
      ```

      </template>

      <template #jQuery_1.12.4>

      ```text
      "dependencies": {
        "jquery": "npm:@els-js/jquery@>=1.12.4-tuxcare.1"
      },
      "overrides": {
        "jquery@1.12.4": "npm:@els-js/jquery@>=1.12.4-tuxcare.1"
      }
      ```

      </template>

      <template #jQuery_2.2.4>

      ```text
      "dependencies": {
        "jquery": "npm:@els-js/jquery@>=2.2.4-tuxcare.1"
      },
      "overrides": {
        "jquery@2.2.4": "npm:@els-js/jquery@>=2.2.4-tuxcare.1"
      }
      ```

      </template>

      <template #jQuery_3.4.1>

      ```text
      "dependencies": {
        "jquery": "npm:@els-js/jquery@>=3.4.1-tuxcare.1"
      },
      "overrides": {
        "jquery@3.4.1": "npm:@els-js/jquery@>=3.4.1-tuxcare.1"
      }
      ```

      </template>

     </TableTabs>

5. You need to remove the `node_modules` directory and the `package-lock.json` file, and also clear the `npm cache` before installing the patched packages. Use the following commands:

   ```text
   rm -rf node_modules package-lock.json && npm cache clean --force
   ```

6. Run the following command to install the ELS version of the jQuery library (token for the TuxCare repository will be automatically picked up from your `.npmrc` file):

   ```text
   npm install
   ```

## Step 3: Verify Installation

1. To confirm the TuxCare jQuery library is set up correctly, use npm to list the project's dependencies:

   ```text
   npm list
   ```

2. After reviewing the dependencies, run your application to ensure everything works correctly.

The `npm` tool should be able to identify and resolve dependencies from the TuxCare ELS for jQuery repository.

## Software Bill of Materials (SBOM)

For each published ELS package and version, TuxCare generates SBOM files. Those artifacts are published to TuxCare Nexus.

You can browse SBOM files for jQuery here:

[https://nexus.repo.tuxcare.com/#browse/browse:els-js-sbom:jquery](https://nexus.repo.tuxcare.com/#browse/browse:els-js-sbom:jquery)

Use the credentials you received for TuxCare ELS ([Step 1: Get Token](#step-1:-get-token)) to access Nexus.

## How to Upgrade to a Newer Version of TuxCare Packages

If you have already installed a package with a `tuxcare.1` suffix and want to upgrade to a newer release (for example, `tuxcare.3`), remove node_modules, clear the npm cache to avoid conflicts, and then run the installation command:

  ```text
  rm -rf node_modules package-lock.json && npm cache clean --force
  npm install
  ```

## Resolved CVEs

Fixes for the following vulnerabilities are available in ELS for jQuery from TuxCare versions:

<TableTabs label="Choose jQuery version: " >

<template #jQuery_1.8.2>

| CVE ID         | CVE Type | Severity | Affected Libraries | Vulnerable Versions |
| :------------: | :------: |:--------:|:------------------:|:-------------------:|
| CVE-2020-7656  | Direct   | Medium   |       jquery       |       < 1.9.0       |
| CVE-2020-11022 | Direct   | Medium   |       jquery       |   >= 1.2 < 3.5.0    |
| CVE-2020-11023 | Direct   | Medium   |       jquery       |  >= 1.0.3 < 3.5.0   |
| CVE-2015-9251  | Direct   | Medium   |       jquery       |       < 3.0.0       |
| CVE-2019-11358 | Direct   | Medium   |       jquery       |       < 3.4.0       |

  </template>

<template #jQuery_1.12.4>

| CVE ID         | CVE Type | Severity | Affected Libraries | Vulnerable Versions |
| :------------: | :------: |:--------:|:------------------:| :----------------: |
| CVE-2020-11023 | Direct   | Medium   |       jquery       | >= 1.0.3 < 3.5.0  |
| CVE-2020-11022 | Direct   | Medium   |       jquery       | >= 1.2 < 3.5.0    |
| CVE-2019-11358 | Direct   | Medium   |       jquery       | < 3.4.0           |
| CVE-2015-9251  | Direct   | Medium   |       jquery       | < 3.0.0           |

  </template>

<template #jQuery_2.2.4>

| CVE ID         | CVE Type | Severity | Affected Libraries | Vulnerable Versions |
| :------------: | :------: |:--------:|:------------------:| :----------------: |
| CVE-2020-11023 | Direct   | Medium   |       jquery       | >= 1.0.3 < 3.5.0  |
| CVE-2020-11022 | Direct   | Medium   |       jquery       | >= 1.2 < 3.5.0    |
| CVE-2019-11358 | Direct   | Medium   |       jquery       | < 3.4.0           |
| CVE-2015-9251  | Direct   | Medium   |       jquery       | < 3.0.0           |

  </template>

<template #jQuery_3.4.1>

| CVE ID         | CVE Type | Severity | Affected Libraries | Vulnerable Versions |
| :------------: | :------: |:--------:|:------------------:| :----------------: |
| CVE-2020-11023 | Direct   | Medium   |       jquery       | >= 1.0.3 < 3.5.0  |
| CVE-2020-11022 | Direct   | Medium   |       jquery       | >= 1.2 < 3.5.0    |

  </template>

</TableTabs>

If you are interested in the TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).
