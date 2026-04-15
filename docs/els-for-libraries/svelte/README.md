# Svelte

Endless Lifecycle Support (ELS) for Svelte from TuxCare provides security fixes for Svelte versions that have reached their end of life. This allows you to continue running Svelte applications without vulnerability concerns, even after official support has ended.

## Supported Svelte Versions

* Svelte 0.3.0, 1.64.1, 2.16.1, 3.59.2, 4.2.20

## Connection to ELS for Svelte Library

This guide outlines the steps needed to integrate the TuxCare ELS for the Svelte library.

## Step 1: Get Token

You need a token in order to use TuxCare ELS Svelte library. Anonymous access is disabled. To receive the token, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

## Step 2: Set Up ELS for Svelte

TuxCare provides ELS for Svelte as an NPM package, hosted on a secure internal registry. Follow the steps below to add it to your project and get started.

1. Navigate to the root directory of your Svelte project.
2. Create a `.npmrc` file or update it if it already exists.

   **Example:**

   ```text
   my-svelte-project/
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

4. Update your `package.json` file to replace your Svelte dependencies with the TuxCare packages. You can do this in two ways:

   * **Option 1: Manual update**

     Manually update your `package.json` file by replacing your Svelte dependencies with the TuxCare packages. This method gives you full control over which packages to update.

     <TableTabs label="Choose Svelte version: " >

       <template #svelte_0.3.0>

       ```text
       "dependencies": {
         "svelte": "npm:@els-js/svelte@>=0.3.0-tuxcare.1"
       },
       "overrides": {
         "svelte@0.3.0": "npm:@els-js/svelte@>=0.3.0-tuxcare.1"
       }
       ```

       </template>

       <template #svelte_1.64.1>

       ```text
       "dependencies": {
         "svelte": "npm:@els-js/svelte@>=1.64.1-tuxcare.1"
       },
       "overrides": {
         "svelte@1.64.1": "npm:@els-js/svelte@>=1.64.1-tuxcare.1"
       }
       ```

       </template>

       <template #svelte_2.16.1>

       ```text
       "dependencies": {
         "svelte": "npm:@els-js/svelte@>=2.16.1-tuxcare.1"
       },
       "overrides": {
         "svelte@2.16.1": "npm:@els-js/svelte@>=2.16.1-tuxcare.1"
       }
       ```

       </template>

       <template #svelte_3.59.2>

       ```text
       "dependencies": {
         "svelte": "npm:@els-js/svelte@>=3.59.2-tuxcare.1"
       },
       "overrides": {
         "svelte@3.59.2": "npm:@els-js/svelte@>=3.59.2-tuxcare.1"
       }
       ```

       </template>

       <template #svelte_4.2.20>

       ```text
       "dependencies": {
         "svelte": "npm:@els-js/svelte@>=4.2.20-tuxcare.1"
       },
       "overrides": {
         "svelte@4.2.20": "npm:@els-js/svelte@>=4.2.20-tuxcare.1"
       }
       ```

       </template>

      </TableTabs>

   * **Option 2: TuxCare Patcher (Automated)**

     Install the Patcher globally and run it. The TuxCare Patcher automatically detects the Svelte version in your `package.json` and updates your `dependencies` and `overrides` to use the corresponding TuxCare `@els-js/*` packages.

     ```text
     npm install -g @els-js/tuxcare-patcher --userconfig ./.npmrc
     tuxcare-patch-js
     ```

     The patcher will update your `package.json`, for example, from:

     ```text
     "dependencies": {
       "svelte": "^4.2.20"
     }
     ```

     to:

     ```text
     "dependencies": {
       "svelte": "npm:@els-js/svelte@>=4.2.20-tuxcare.1"
     },
     "overrides": {
       "svelte@4.2.20": "npm:@els-js/svelte@>=4.2.20-tuxcare.1"
     }
     ```

5. You need to remove the `node_modules` directory and the `package-lock.json` file, and also clear the `npm cache` before installing the patched packages. Use the following commands:

   ```text
   rm -rf node_modules package-lock.json && npm cache clean --force
   ```

6. Run the following command to install the ELS version of the Svelte library (token for the TuxCare repository will be automatically picked up from your `.npmrc` file):

   ```text
   npm install
   ```

## Step 3: Verify Installation

1. To confirm the TuxCare Svelte library is set up correctly, use npm to list the project's dependencies:

   ```text
   npm list
   ```

2. After reviewing the dependencies, run your application to ensure everything works correctly.

The `npm` tool should be able to identify and resolve dependencies from the TuxCare ELS for Svelte repository.

## Vulnerability Exploitability eXchange (VEX)

VEX is a machine-readable format that tells you if a known vulnerability is actually exploitable in your product. It reduces false positives, helps prioritize real risks.

TuxCare provides VEX for Svelte ELS versions: [security.tuxcare.com/vex/cyclonedx/els_lang_javascript/svelte/](https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript/svelte/).

## Software Bill of Materials (SBOM)

For each published ELS package and version, TuxCare generates SBOM files. Those artifacts are published to TuxCare Nexus.

You can browse SBOM files for Svelte here:

[https://nexus.repo.tuxcare.com/#browse/browse:els-js-sbom:svelte](https://nexus.repo.tuxcare.com/#browse/browse:els-js-sbom:svelte)

Use the credentials you received for TuxCare ELS ([Step 1: Get Token](#step-1:-get-token)) to access Nexus.

## How to Upgrade to a Newer Version of TuxCare Packages

If you have already installed a package with a `tuxcare.1` suffix and want to upgrade to a newer release (for example, `tuxcare.3`), remove node_modules, clear the npm cache to avoid conflicts, and then run the installation command:

  ```text
  rm -rf node_modules package-lock.json && npm cache clean --force
  npm install
  ```

## Resolved CVEs

Fixes for the following **direct** vulnerabilities in the `svelte` package are available in ELS for Svelte from TuxCare versions:

<TableTabs label="Choose Svelte version: " >

<template #svelte_0.3.0>

| CVE ID | CVE Type | Severity | Affected Libraries | Vulnerable Versions |
| :------------: | :------: |:--------:|:------------------:| :----------------: |
| CVE-2022-25875 | Direct | Medium | svelte | < 3.49.0 |
| CVE-2024-45047 | Direct | Medium | svelte | < 4.2.19 |
| CVE-2026-27125 | Direct | Medium | svelte | < 5.51.5 |
| CVE-2026-27122 | Direct | Medium | svelte | < 5.51.5 |
| CVE-2026-27121 | Direct | Medium | svelte | < 5.51.5 |
| CVE-2026-27901 | Direct | Medium | svelte | < 5.53.5 |

</template>

<template #svelte_1.64.1>

| CVE ID | CVE Type | Severity | Affected Libraries | Vulnerable Versions |
| :------------: | :------: |:--------:|:------------------:| :----------------: |
| CVE-2022-25875 | Direct | Medium | svelte | < 3.49.0 |
| CVE-2024-45047 | Direct | Medium | svelte | < 4.2.19 |
| CVE-2026-27125 | Direct | Medium | svelte | < 5.51.5 |
| CVE-2026-27122 | Direct | Medium | svelte | < 5.51.5 |
| CVE-2026-27121 | Direct | Medium | svelte | < 5.51.5 |
| CVE-2026-27901 | Direct | Medium | svelte | < 5.53.5 |

</template>

<template #svelte_2.16.1>

| CVE ID | CVE Type | Severity | Affected Libraries | Vulnerable Versions |
| :------------: | :------: |:--------:|:------------------:| :----------------: |
| CVE-2022-25875 | Direct | Medium | svelte | < 3.49.0 |
| CVE-2024-45047 | Direct | Medium | svelte | < 4.2.19 |
| CVE-2026-27125 | Direct | Medium | svelte | < 5.51.5 |
| CVE-2026-27122 | Direct | Medium | svelte | < 5.51.5 |
| CVE-2026-27121 | Direct | Medium | svelte | < 5.51.5 |
| CVE-2026-27901 | Direct | Medium | svelte | < 5.53.5 |

</template>

<template #svelte_3.59.2>

| CVE ID | CVE Type | Severity | Affected Libraries | Vulnerable Versions |
| :------------: | :------: |:--------:|:------------------:| :----------------: |
| CVE-2024-45047 | Direct | Medium | svelte | < 4.2.19 |
| CVE-2026-27125 | Direct | Medium | svelte | < 5.51.5 |
| CVE-2026-27122 | Direct | Medium | svelte | < 5.51.5 |
| CVE-2026-27121 | Direct | Medium | svelte | < 5.51.5 |
| CVE-2026-27901 | Direct | Medium | svelte | < 5.53.5 |

</template>

<template #svelte_4.2.20>

| CVE ID | CVE Type | Severity | Affected Libraries | Vulnerable Versions |
| :------------: | :------: |:--------:|:------------------:| :----------------: |
| CVE-2026-27125 | Direct | Medium | svelte | < 5.51.5 |
| CVE-2026-27122 | Direct | Medium | svelte | < 5.51.5 |
| CVE-2026-27121 | Direct | Medium | svelte | < 5.51.5 |
| CVE-2026-27901 | Direct | Medium | svelte | < 5.53.5 |

</template>

</TableTabs>

If you are interested in the TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).
