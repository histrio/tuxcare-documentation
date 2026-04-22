# AWS SDK for PHP

Endless Lifecycle Support (ELS) for AWS SDK for PHP from TuxCare provides security fixes for AWS SDK for PHP library versions that have reached their end-of-life. This allows you to continue running your applications without vulnerability concerns, even after official support has ended.

## Supported Versions

* **AWS SDK for PHP** 3.263.4

Other versions upon request.

## Installation

<ELSPrerequisites>

* A valid TuxCare ELS license key — contact [sales@tuxcare.com](mailto:sales@tuxcare.com) to obtain one. Anonymous access is disabled.
* PHP and [Composer](https://getcomposer.org/) installed on the system

</ELSPrerequisites>

<ELSSteps>

1. Configure Composer authentication

   Create or edit the `auth.json` file for the user running Composer:

   * **Linux/macOS**: `~/.composer/auth.json`
   * **Windows**: `%APPDATA%\Composer\auth.json`

   Use either the Composer CLI or edit `auth.json` directly to add your credentials for `nexus.repo.tuxcare.com`:

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer config --global --auth http-basic.nexus.repo.tuxcare.com USERNAME PASSWORD` },
     { title: 'auth.json', content: authjson }
   ]" />

   Replace `USERNAME` and `PASSWORD` with the credentials provided by TuxCare.

2. Register the TuxCare repository

   Add the `els_php` Composer repository either via CLI or by editing `composer.json`:

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: cli },
     { title: 'composer.json', content: composerjson }
   ]" />

3. Install AWS SDK for PHP

   Install the TuxCare-maintained AWS SDK for PHP release that matches your project:

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require aws/aws-sdk-php:3.263.4-p1+tuxcare` },
     { title: 'composer.json', content: pkgjson }
   ]" />

   **Check the exact version listed in your TuxCare Nexus account to ensure you receive the most recent patched release.**

   If you edited `composer.json` manually, run `composer update` to install the package. Composer will resolve dependencies against the TuxCare repository and install the patched releases.

</ELSSteps>

## Troubleshooting

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

## Resolved CVEs in AWS SDK for PHP

Fixes for the following vulnerabilities are available in ELS for AWS SDK for PHP from TuxCare:

<TableTabs label="Choose a version: " >

<template #AWS_SDK_for_PHP_3.263.4>

| CVE ID         | Severity | Vulnerable versions | Fixed in version      |
|----------------|----------|---------------------|-----------------------|
| CVE-2023-51651 | Medium   | < 3.288.1           | 3.263.4-p1+tuxcare    |

</template>

</TableTabs>

## What's Next?

<WhatsNext hide-title>

* ![](/images/shield-alert.webp) [VEX feed](https://security.tuxcare.com/vex/cyclonedx/els_lang_php/aws-sdk-php/) — Machine-readable vulnerability exploitability data
* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/?product=AWS+SDK+for+PHP) — Track vulnerability fixes and updates
* ![](/images/wrench.webp) [Managing the ELS repository](/els-for-libraries/managing-els-repository/) — Upgrade to a newer version and other repository operations

</WhatsNext>

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
        "aws/aws-sdk-php": "3.263.4-p1+tuxcare"
    }
}`

</script>
