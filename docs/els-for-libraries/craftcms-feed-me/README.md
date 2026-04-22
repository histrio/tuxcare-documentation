# CraftCMS Feed Me Plugin

Endless Lifecycle Support (ELS) for the CraftCMS Feed Me plugin from TuxCare provides security fixes for versions that have reached their end-of-life. This allows you to continue running your applications without vulnerability concerns, even after official support has ended.

## Supported Versions and Components

* **CraftCMS Feed Me Plugin** 3.x

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

3. Install CraftCMS Feed Me

   Install the TuxCare-maintained CraftCMS Feed Me release that matches your project:

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require craftcms/feed-me:3.1.17-p1+tuxcare` },
     { title: 'composer.json', content: packagejson }
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

## Resolved CVEs in CraftCMS Feed Me

| CVE-ID            | Severity | Vulnerable versions | Fixed in Version  |
| ----------------- | -------- | ------------------- | ----------------- |
| CVE-2023-36260    | High     | <4.6.1.1           | 3.1.17-p1+tuxcare |

## What's Next?

<WhatsNext hide-title>

* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/?product=CraftCMS+Feed+Me) — Track vulnerability fixes and updates
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

const packagejson =
`{
    "require": {
        "craftcms/feed-me": "3.1.17-p1+tuxcare"
    }
}`

</script>
