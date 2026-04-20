# Saloon

Endless Lifecycle Support (ELS) for Saloon from TuxCare provides security fixes for Saloon library versions that have reached their end-of-life. This allows you to continue running your applications without vulnerability concerns, even after official support has ended.

## Supported Versions

* **Saloon** 3.15.0

Other versions upon request.

## Connection to ELS for Saloon Repository

This guide outlines the steps needed to integrate the TuxCare ELS for Saloon repository into your application. The repository provides trusted Saloon library versions that can be easily integrated into your **Composer** projects.

### Step 1: Get user credentials

You need a username and password in order to use TuxCare ELS for Saloon repository. Anonymous access is disabled. To receive the credentials, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

### Step 2: Configure Composer authentication

1. Create or edit the `auth.json` file for the user running Composer:

    * **Linux/macOS**: 

        ```text
        ~/.composer/auth.json
        ```

    * **Windows**: 

        ```text
        %APPDATA%\Composer\auth.json
        ```

2. Use either the Composer CLI or edit `auth.json` directly to add your credentials for `nexus.repo.tuxcare.com`.

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer config --global --auth http-basic.nexus.repo.tuxcare.com USERNAME PASSWORD` },
     { title: 'auth.json', content: authjson }
   ]" />

   Replace `USERNAME` and `PASSWORD` with the credentials you received in [Step 1](#step-1-get-user-credentials).

### Step 3: Register the TuxCare repository

Add the `els_php` Composer repository either via CLI or by editing `composer.json`:

  <CodeTabs :tabs="[
    { title: 'Composer CLI', content: cli },
    { title: 'composer.json', content: composerjson }
  ]" />

### Step 4: Install Saloon

Install the TuxCare-maintained Saloon release that matches your project:

<CodeTabs :tabs="[
  { title: 'Composer CLI', content: `composer require saloonphp/saloon:3.15.0-p1+tuxcare` },
  { title: 'composer.json', content: pkgjson }
]" />

**Check the exact version listed in your TuxCare Nexus account to ensure you receive the most recent patched release.**

If you edited `composer.json` manually, run `composer update` to install the package:

```text
composer update
```

Composer will resolve dependencies against the TuxCare repository and install the patched releases.

### Composer Repository Configuration

If you encounter dependency resolution errors like:

`packages from higher priority repository do not match your constraint`

it usually means your project requires a package version that is not yet available in the TuxCare repository.

**Solution**: Update your `composer.json` to set the TuxCare repository as non-canonical:

```
{
    "repositories": [
        {
            "type": "composer",
            "url": "https://nexus.repo.tuxcare.com/repository/els_php/",
            "canonical": false
        }
    ]
}
```

This allows Composer to fall back to Packagist for packages not available in the TuxCare repository, while still preferring TuxCare patches when available.

## Vulnerability Exploitability eXchange (VEX)

VEX is a machine-readable format that tells you if a known vulnerability is actually exploitable in your product. It reduces false positives and helps prioritize real risks.

TuxCare provides VEX for Saloon ELS versions: [security.tuxcare.com/vex/cyclonedx/els_lang_php/saloon/](https://security.tuxcare.com/vex/cyclonedx/els_lang_php/saloon/).

## How to Upgrade to a Newer Version

If you have already installed a TuxCare Saloon package and want to upgrade to a newer release, update the version string in your `composer.json` file or run the `composer require` command with the new version:

```text
composer require saloonphp/saloon:VERSION-pN+tuxcare
```

Then run `composer update` to apply the changes:

```text
composer update
```

## Resolved CVEs in Saloon

Fixes for the following vulnerabilities are available in ELS for Saloon from TuxCare:

<TableTabs label="Choose a version: " >

<template #Saloon_3.15.0>

| CVE ID         | Severity | Vulnerable versions | Fixed in version   |
|----------------|----------|---------------------|--------------------|
| CVE-2026-33942 | Critical | < 4.0.0             | 3.15.0-p1+tuxcare  |
| CVE-2026-33183 | Critical | < 4.0.0             | 3.15.0-p1+tuxcare  |
| CVE-2026-33182 | High     | < 4.0.0             | 3.15.0-p1+tuxcare  |

</template>

</TableTabs>

If you are interested in the TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

<script setup>

const authjson =
`{
  "http-basic": {
    "nexus.repo.tuxcare.com": {
      "username": "USERNAME",
      "password": "PASSWORD"
    }
  }
}`

const composerjson =
`{
    "repositories": [
        {
        "type": "composer",
        "url": "https://nexus.repo.tuxcare.com/repository/els_php/",
        "options": {
            "http": {
            "verify": true
            }
        }
        }
    ]
}`

const cli =
`composer config repositories.tuxcare '{"type":"composer","url":"https://nexus.repo.tuxcare.com/repository/els_php/","options":{"http":{"verify":true}}}' --json`

const pkgjson =
`{
    "require": {
        "saloonphp/saloon": "3.15.0-p1+tuxcare"
    }
}`

</script>
