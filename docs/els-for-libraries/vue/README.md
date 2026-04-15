# Vue

Endless Lifecycle Support (ELS) for Vue from TuxCare provides security fixes for Vue versions that have reached end of life. This allows you to continue running Vue applications without vulnerability concerns, even after official support has ended.

The versions **2.6.11**, **2.6.14**, and **2.7.16** are supported by TuxCare for the following Vue ecosystem packages:

* `vue`
* `@vue/server-renderer`
* `vue-template-compiler`

## Connection to ELS for Vue Repository

This guide outlines the steps needed to integrate the TuxCare ELS for Vue repository.

## Step 1: Get Token

You need a token in order to use the TuxCare ELS Vue repository. Anonymous access is disabled. To receive the token, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

## Step 2: Set Up ELS for Vue

TuxCare provides ELS for Vue as npm packages, hosted on a secure internal registry. Follow the steps below to add it to your project and get started.

1. Navigate to the root directory of your Vue project.
2. Create a `.npmrc` file (or update it if it already exists).

   ```text
   my-vue-project/
   ├── node_modules/
   ├── package.json
   ├── .npmrc         ⚠️ ← Create it here
   └── package-lock.json
   ```

3. Add the ELS Vue registry configuration to `.npmrc`:

   ```text
   registry=https://registry.npmjs.org/
   @els-vue:registry=https://nexus.repo.tuxcare.com/repository/els_vue/
   //nexus.repo.tuxcare.com/repository/els_vue/:_auth=${TOKEN}
   ```

   :::warning
   Replace `${TOKEN}` with the token you received from [sales@tuxcare.com](mailto:sales@tuxcare.com).
   :::

4. Update your `package.json` dependencies to use TuxCare packages.

   :::tip
   For exact available patched versions, check your Nexus access first. The snippets below are examples. The `>=` range with `-tuxcare.1` resolves to the latest TuxCare build for that upstream Vue version.
   :::

   <TableTabs label="Choose version: " >

   <template #2.7.16>

   ```text
   "dependencies": {
     "vue": "npm:@els-vue/vue@>=2.7.16-tuxcare.1",
     "@vue/server-renderer": "npm:@els-vue/vue-server-renderer@>=2.7.16-tuxcare.1",
     "vue-template-compiler": "npm:@els-vue/vue-template-compiler@>=2.7.16-tuxcare.1"
   },
   "overrides": {
     "vue@2.7.16": "npm:@els-vue/vue@>=2.7.16-tuxcare.1",
     "@vue/server-renderer@2.7.16": "npm:@els-vue/vue-server-renderer@>=2.7.16-tuxcare.1",
     "vue-template-compiler@2.7.16": "npm:@els-vue/vue-template-compiler@>=2.7.16-tuxcare.1"
   }
   ```

   </template>

   <template #2.6.14>

   ```text
   "dependencies": {
     "vue": "npm:@els-vue/vue@>=2.6.14-tuxcare.1",
     "@vue/server-renderer": "npm:@els-vue/vue-server-renderer@>=2.6.14-tuxcare.1",
     "vue-template-compiler": "npm:@els-vue/vue-template-compiler@>=2.6.14-tuxcare.1"
   },
   "overrides": {
     "vue@2.6.14": "npm:@els-vue/vue@>=2.6.14-tuxcare.1",
     "@vue/server-renderer@2.6.14": "npm:@els-vue/vue-server-renderer@>=2.6.14-tuxcare.1",
     "vue-template-compiler@2.6.14": "npm:@els-vue/vue-template-compiler@>=2.6.14-tuxcare.1"
   }
   ```

   </template>

   <template #2.6.11>

   ```text
   "dependencies": {
     "vue": "npm:@els-vue/vue@>=2.6.11-tuxcare.1",
     "@vue/server-renderer": "npm:@els-vue/vue-server-renderer@>=2.6.11-tuxcare.1",
     "vue-template-compiler": "npm:@els-vue/vue-template-compiler@>=2.6.11-tuxcare.1"
   },
   "overrides": {
     "vue@2.6.11": "npm:@els-vue/vue@>=2.6.11-tuxcare.1",
     "@vue/server-renderer@2.6.11": "npm:@els-vue/vue-server-renderer@>=2.6.11-tuxcare.1",
     "vue-template-compiler@2.6.11": "npm:@els-vue/vue-template-compiler@>=2.6.11-tuxcare.1"
   }
   ```

   </template>

   </TableTabs>

5. Remove old dependencies and clear npm cache:

   ```text
   rm -rf node_modules package-lock.json && npm cache clean --force
   ```

6. Run the following command to install the ELS version of the Vue library (token for the TuxCare repository will be automatically picked up from your `.npmrc` file):

   ```text
   npm install
   ```

## Step 3: Verify Installation

1. Confirm package resolution:

   ```text
   npm list
   ```

2. Run your application and verify that dependency resolution works through the TuxCare repository.

## Vulnerability Exploitability eXchange (VEX)

VEX is a machine-readable format that tells you if a known vulnerability is actually exploitable in your product. It reduces false positives and helps prioritize real risks.

TuxCare provides VEX data for Vue packages:

* [vue](https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript/vue/)
* [vue-template-compiler](https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript/vue-template-compiler/)

## Software Bill of Materials (SBOM)

For each published ELS package and version, TuxCare generates SBOM files. Those artifacts are published to TuxCare Nexus.

You can browse SBOM files for Vue here:

[https://nexus.repo.tuxcare.com/#browse/browse:els-js-sbom:vue](https://nexus.repo.tuxcare.com/#browse/browse:els-js-sbom:vue)

Use the credentials you received for TuxCare ELS ([Step 1: Get Token](#step-1:-get-token)) to access Nexus.

## How to Upgrade to a Newer Version of TuxCare Packages

If you already use TuxCare-patched Vue packages and need to upgrade, clear local dependencies and reinstall (the `>=` range will resolve to the latest available TuxCare build):

```text
rm -rf node_modules package-lock.json && npm cache clean --force
npm install
```

## Resolved CVEs

Fixes for the following vulnerabilities are available in ELS for Vue from TuxCare versions:

| CVE ID        | CVE Type | Severity | Affected Library      | Vulnerable Versions |
| :-----------: | :------: | :------: | :-------------------: | :-----------------: |
| CVE-2024-6783 | Direct   | Medium   | vue                   | >= 2.0.0 < 3.0.0    |
| CVE-2024-6783 | Direct   | Medium   | vue-template-compiler | >= 2.0.0 < 3.0.0    |
| CVE-2024-9506 | Direct   | Low      | vue                   | >= 2.0.0 < 3.0.0    |

If you are interested in TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).
