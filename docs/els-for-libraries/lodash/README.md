# Lodash

Endless Lifecycle Support (ELS) for Lodash from TuxCare provides security fixes for Lodash versions that have reached their end of life. This allows you to continue running Lodash applications without vulnerability concerns, even after official support has ended.

## Supported Lodash Versions

* Lodash 1.3.1, 2.4.2, 3.2.0, 3.10.1, 4.5.0, 4.17.15, 4.17.19

## Connection to ELS for Lodash Library

This guide outlines the steps needed to integrate the TuxCare ELS for the Lodash library.

## Step 1: Get Token

You need a token in order to use TuxCare ELS Lodash library. Anonymous access is disabled. To receive the token, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

## Step 2: Set Up ELS for Lodash

TuxCare provides ELS for Lodash as an NPM package, hosted on a secure internal registry. Follow the steps below to add it to your project and get started.

1. Navigate to the root directory of your Lodash project.
2. Create a `.npmrc` file or update it if it already exists.

   **Example:**

   ```text
   my-lodash-project/
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

4. Update your `package.json` file to replace your Lodash dependencies with the TuxCare packages. You can do this in two ways:

   * **Option 1: Manual update**

     Manually update your `package.json` file by replacing your Lodash dependencies with the TuxCare packages. This method gives you full control over which packages to update.

     <TableTabs label="Choose Lodash version: " >

      <template #Lodash_1.3.1>

      ```text
      "dependencies": {
        "lodash": "npm:@els-js/lodash@>=1.3.1-tuxcare.1"
      },
      "overrides": {
        "lodash@1.3.1": "npm:@els-js/lodash@>=1.3.1-tuxcare.1"
      }
      ```

      </template>

      <template #Lodash_2.4.2>

      ```text
      "dependencies": {
        "lodash": "npm:@els-js/lodash@>=2.4.2-tuxcare.1"
      },
      "overrides": {
        "lodash@2.4.2": "npm:@els-js/lodash@>=2.4.2-tuxcare.1"
      }
      ```

      </template>

      <template #Lodash_3.2.0>

      ```text
      "dependencies": {
        "lodash": "npm:@els-js/lodash@>=3.2.0-tuxcare.1"
      },
      "overrides": {
        "lodash@3.2.0": "npm:@els-js/lodash@>=3.2.0-tuxcare.1"
      }
      ```

      </template>

      <template #Lodash_3.10.1>

      ```text
      "dependencies": {
        "lodash": "npm:@els-js/lodash@>=3.10.1-tuxcare.1"
      },
      "overrides": {
        "lodash@3.10.1": "npm:@els-js/lodash@>=3.10.1-tuxcare.1"
      }
      ```

      </template>

      <template #Lodash_4.5.0>

      ```text
      "dependencies": {
        "lodash": "npm:@els-js/lodash@>=4.5.0-tuxcare.1"
      },
      "overrides": {
        "lodash@4.5.0": "npm:@els-js/lodash@>=4.5.0-tuxcare.1"
      }
      ```

      </template>

      <template #Lodash_4.17.15>

      ```text
      "dependencies": {
        "lodash": "npm:@els-js/lodash@>=4.17.15-tuxcare.1"
      },
      "overrides": {
        "lodash@4.17.15": "npm:@els-js/lodash@>=4.17.15-tuxcare.1"
      }
      ```

      </template>

      <template #Lodash_4.17.19>

      ```text
      "dependencies": {
        "lodash": "npm:@els-js/lodash@>=4.17.19-tuxcare.1"
      },
      "overrides": {
        "lodash@4.17.19": "npm:@els-js/lodash@>=4.17.19-tuxcare.1"
      }
      ```

      </template>

     </TableTabs>

   * **Option 2: TuxCare Patcher (Automated)**

     Install the Patcher globally and run it. The TuxCare Patcher automatically detects the Lodash version in your `package.json` and updates your `dependencies` and `overrides` to use the corresponding TuxCare `@els-js/*` packages.

     ```text
     npm install -g @els-js/tuxcare-patcher --userconfig ./.npmrc
     tuxcare-patch-js
     ```

     The patcher will update your `package.json`, for example, from:

     ```text
     "dependencies": {
       "lodash": "^4.17.19"
     }
     ```

     to:

     ```text
     "dependencies": {
       "lodash": "npm:@els-js/lodash@>=4.17.19-tuxcare.1"
     },
     "overrides": {
       "lodash@4.17.19": "npm:@els-js/lodash@>=4.17.19-tuxcare.1"
     }
     ```

5. You need to remove the `node_modules` directory and the `package-lock.json` file, and also clear the `npm cache` before installing the patched packages. Use the following commands:

   ```text
   rm -rf node_modules package-lock.json && npm cache clean --force
   ```

6. Run the following command to install the ELS version of the Lodash library (token for the TuxCare repository will be automatically picked up from your `.npmrc` file):

   ```text
   npm install
   ```

## Step 3: Verify Installation

1. To confirm the TuxCare Lodash library is set up correctly, use npm to list the project's dependencies:

   ```text
   npm list
   ```

2. After reviewing the dependencies, run your application to ensure everything works correctly.

The `npm` tool should be able to identify and resolve dependencies from the TuxCare ELS for Lodash repository.

## Vulnerability Exploitability eXchange (VEX) 

VEX is a machine-readable format that tells you if a known vulnerability is actually exploitable in your product. It reduces false positives, helps prioritize real risks.

TuxCare provides VEX for Lodash ELS versions: [security.tuxcare.com/vex/cyclonedx/els_lang_javascript/lodash/](https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript/lodash/).

## Software Bill of Materials (SBOM)

For each published ELS package and version, TuxCare generates SBOM files. Those artifacts are published to TuxCare Nexus.

You can browse SBOM files for Lodash here:

[https://nexus.repo.tuxcare.com/#browse/browse:els-js-sbom:lodash](https://nexus.repo.tuxcare.com/#browse/browse:els-js-sbom:lodash)

Use the credentials you received for TuxCare ELS ([Step 1: Get Token](#step-1:-get-token)) to access Nexus.

## How to Upgrade to a Newer Version of TuxCare Packages

If you have already installed a package with a `tuxcare.1` suffix and want to upgrade to a newer release (for example, `tuxcare.3`), remove node_modules, clear the npm cache to avoid conflicts, and then run the installation command:

  ```text
  rm -rf node_modules package-lock.json && npm cache clean --force
  npm install
  ```

## Resolved CVEs

Fixes for the following vulnerabilities are available in ELS for Lodash from TuxCare versions:

<TableTabs label="Choose Lodash version: " >

  <template #Lodash__1.3.1>

| CVE ID         | CVE Type | Severity |  Affected Libraries | Vulnerable Versions |
| :------------: | :------: |:--------:| :-----------------: |:-------------------:|
| CVE-2018-3721   | Direct   | Medium   | lodash             |      < 4.17.5       |
| CVE-2018-16487  | Direct   | High     | lodash             |      < 4.17.11      |
| CVE-2019-10744  | Direct   | Critical | lodash             |      < 4.17.12      |
| CVE-2021-23337  | Direct   | High     | lodash             |      < 4.17.21      |

  </template>

  <template #Lodash__2.4.2>

| CVE ID         | CVE Type | Severity |  Affected Libraries | Vulnerable Versions |
| :------------: | :------: |:--------:| :-----------------: |:-------------------:|
| CVE-2018-3721   | Direct   | Medium   | lodash             |      < 4.17.5       |
| CVE-2018-16487  | Direct   | High     | lodash             |      < 4.17.11      |
| CVE-2019-10744  | Direct   | Critical | lodash             |      < 4.17.12      |
| CVE-2021-23337  | Direct   | High     | lodash             |      < 4.17.21      |

  </template>

  <template #Lodash__3.2.0>

| CVE ID         | CVE Type | Severity |  Affected Libraries | Vulnerable Versions |
| :------------: | :------: |:--------:| :-----------------: |:-------------------:|
| CVE-2018-3721   | Direct   | Medium   | lodash             |      < 4.17.5       |
| CVE-2018-16487  | Direct   | High     | lodash             |      < 4.17.11      |
| CVE-2019-10744  | Direct   | Critical | lodash             |      < 4.17.12      |
| CVE-2021-23337  | Direct   | High     | lodash             |      < 4.17.21      |

  </template>

  <template #Lodash__4.5.0>

| CVE ID         | CVE Type | Severity |  Affected Libraries | Vulnerable Versions |
| :------------: | :------: |:--------:| :-----------------: |:-------------------:|
| CVE-2021-23337  | Direct   |   High   | Lodash             |      < 4.17.20      |

  </template>

  <template #Lodash__4.17.15>

| CVE ID         | CVE Type | Severity |  Affected Libraries | Vulnerable Versions |
| :------------: | :------: | :------: | :-----------------: |:-------------------:|
| CVE-2020-8203   | Direct   | High     | lodash             |      < 4.17.20      |
| CVE-2020-28500  | Direct   | Medium   | lodash             |      < 4.17.21      |
| CVE-2021-23337  | Direct   | High     | lodash             |      < 4.17.21      |

  </template>

  <template #Lodash__4.17.19>

| CVE ID         | CVE Type | Severity |  Affected Libraries | Vulnerable Versions |
| :------------: | :------: | :------: | :-----------------: |:-------------------:|
| CVE-2020-8203  | Direct   | High   | Lodash             |      < 4.17.20      |

  </template>

</TableTabs>

If you are interested in the TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).
