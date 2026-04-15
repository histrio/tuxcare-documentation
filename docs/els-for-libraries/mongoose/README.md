# Mongoose

Endless Lifecycle Support (ELS) for Mongoose from TuxCare provides security fixes for Mongoose versions that have reached their end of life. This allows you to continue running Mongoose applications without vulnerability concerns, even after official support has ended.

## Supported Mongoose Versions

* Mongoose 5.13.23, 6.12.2, 7.8.8

## Connection to ELS for Mongoose Library

This guide outlines the steps needed to integrate the TuxCare ELS for the Mongoose library.

## Step 1: Get Token

You need a token in order to use TuxCare ELS Mongoose library. Anonymous access is disabled. To receive the token, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

## Step 2: Set Up ELS for Mongoose

TuxCare provides ELS for Mongoose as an NPM package, hosted on a secure internal registry. Follow the steps below to add it to your project and get started.

1. Navigate to the root directory of your Mongoose project.
2. Create a `.npmrc` file or update it if it already exists.

   **Example:**

   ```text
   my-mongoose-project/
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

4. Update your `package.json` file to replace your Mongoose dependencies with the TuxCare packages. You can do this in two ways:

   * **Option 1: Manual update**

     Manually update your `package.json` file by replacing your Mongoose dependencies with the TuxCare packages. This method gives you full control over which packages to update.

     <TableTabs label="Choose Mongoose version: " >

      <template #Mongoose_5.13.23>

      ```text
      "dependencies": {
        "mongoose": "npm:@els-js/mongoose@>=5.13.23-tuxcare.1"
      },
      "overrides": {
        "mongoose@5.13.23": "npm:@els-js/mongoose@>=5.13.23-tuxcare.1"
      }
      ```

      </template>

      <template #Mongoose_6.12.2>

      ```text
      "dependencies": {
        "mongoose": "npm:@els-js/mongoose@>=6.12.2-tuxcare.1"
      },
      "overrides": {
        "mongoose@6.12.2": "npm:@els-js/mongoose@>=6.12.2-tuxcare.1"
      }
      ```

      </template>

      <template #Mongoose_7.8.8>

      ```text
      "dependencies": {
        "mongoose": "npm:@els-js/mongoose@>=7.8.8-tuxcare.1"
      },
      "overrides": {
        "mongoose@7.8.8": "npm:@els-js/mongoose@>=7.8.8-tuxcare.1"
      }
      ```

      </template>

     </TableTabs>

   * **Option 2: TuxCare Patcher (Automated)**

     Install the Patcher globally and run it. The TuxCare Patcher automatically detects the Mongoose version in your `package.json` and updates your `dependencies` and `overrides` to use the corresponding TuxCare `@els-js/*` packages.

     ```text
     npm install -g @els-js/tuxcare-patcher --userconfig ./.npmrc
     tuxcare-patch-js
     ```

     The patcher will update your `package.json`, for example, from:

     ```text
     "dependencies": {
       "mongoose": "^5.13.23"
     }
     ```

     to:

     ```text
     "dependencies": {
       "mongoose": "npm:@els-js/mongoose@>=5.13.23-tuxcare.1"
     },
     "overrides": {
       "mongoose@5.13.23": "npm:@els-js/mongoose@>=5.13.23-tuxcare.1"
     }
     ```

5. You need to remove the `node_modules` directory and the `package-lock.json` file, and also clear the `npm cache` before installing the patched packages. Use the following commands:

   ```text
   rm -rf node_modules package-lock.json && npm cache clean --force
   ```

6. Run the following command to install the ELS version of the Mongoose library (token for the TuxCare repository will be automatically picked up from your `.npmrc` file):

   ```text
   npm install
   ```

## Step 3: Verify Installation

1. To confirm the TuxCare Mongoose library is set up correctly, use npm to list the project's dependencies:

   ```text
   npm list
   ```

2. After reviewing the dependencies, run your application to ensure everything works correctly.

The `npm` tool should be able to identify and resolve dependencies from the TuxCare ELS for Mongoose repository.

## Vulnerability Exploitability eXchange (VEX)

VEX is a machine-readable format that tells you if a known vulnerability is actually exploitable in your product. It reduces false positives, helps prioritize real risks.

TuxCare provides VEX for Mongoose ELS versions: [security.tuxcare.com/vex/cyclonedx/els_lang_javascript/mongoose/](https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript/mongoose/).

## Software Bill of Materials (SBOM)

For each published ELS package and version, TuxCare generates SBOM files. Those artifacts are published to TuxCare Nexus.

You can browse SBOM files for Mongoose here:

[https://nexus.repo.tuxcare.com/#browse/browse:els-js-sbom:mongoose](https://nexus.repo.tuxcare.com/#browse/browse:els-js-sbom:mongoose)

Use the credentials you received for TuxCare ELS ([Step 1: Get Token](#step-1:-get-token)) to access Nexus.

## How to Upgrade to a Newer Version of TuxCare Packages

If you have already installed a package with a `tuxcare.1` suffix and want to upgrade to a newer release (for example, `tuxcare.3`), remove node_modules, clear the npm cache to avoid conflicts, and then run the installation command:

  ```text
  rm -rf node_modules package-lock.json && npm cache clean --force
  npm install
  ```

## Resolved CVEs

Fixes for the following vulnerabilities are available in ELS for Mongoose from TuxCare versions:

<TableTabs label="Choose Mongoose version: " >

  <template #Mongoose_5.13.23>

| CVE ID         | CVE Type | Severity | Affected Libraries | Vulnerable Versions |
| :------------: | :------: |:--------:|:------------------:|:-------------------:|
| CVE-2025-23061 | Direct   | Critical | mongoose           | < 8.9.5            |
| CVE-2024-53900 | Direct   | Critical | mongoose           | < 6.13.5, ≥ 7.0.1 < 7.8.3, ≥ 8.0.1 < 8.8.3 |

  </template>

  <template #Mongoose_6.12.2>

| CVE ID         | CVE Type | Severity | Affected Libraries | Vulnerable Versions |
| :------------: | :------: |:--------:|:------------------:|:-------------------:|
| CVE-2025-23061 | Direct   | Critical | mongoose           | < 8.9.5            |
| CVE-2024-53900 | Direct   | Critical | mongoose           | < 6.13.5, ≥ 7.0.1 < 7.8.3, ≥ 8.0.1 < 8.8.3 |

  </template>

  <template #Mongoose_7.8.8>

| CVE ID         | CVE Type | Severity | Affected Libraries | Vulnerable Versions |
| :------------: | :------: |:--------:|:------------------:|:-------------------:|
| CVE-2025-23061 | Direct   | Critical | mongoose           | < 8.9.5            |

  </template>

</TableTabs>

If you are interested in the TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).
