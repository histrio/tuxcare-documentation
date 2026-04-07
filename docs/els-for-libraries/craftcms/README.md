# CraftCMS

Endless Lifecycle Support (ELS) for CraftCMS from TuxCare provides security fixes for versions that have reached their end-of-life. This allows you to continue running your applications without vulnerability concerns, even after official support has ended.

## Supported Versions and Components

* **CraftCMS** 3.x

Other versions upon request.

## Connection to ELS for CraftCMS Repository

This guide outlines the steps needed to integrate the TuxCare ELS for CraftCMS repository into your application. The repository provides trusted CraftCMS packages that can be easily integrated into your **Composer** projects.

### Step 1: Get user credentials

You need a username and password in order to use TuxCare ELS for CraftCMS repository. Anonymous access is disabled. To receive the credentials, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

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

### Step 4: Install CraftCMS

Install the TuxCare-maintained CraftCMS release that matches your project:

<CodeTabs :tabs="[
  { title: 'Composer CLI', content: `composer require craftcms/cms:3.9.15-p1+tuxcare` },
  { title: 'composer.json', content: packagejson }
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

## How to Upgrade to a Newer Version

If you have already installed a TuxCare CraftCMS package and want to upgrade to a newer release, update the version string in your `composer.json` file or run the `composer require` command with the new version:

```text
composer require craftcms/cms:VERSION-pN+tuxcare
```

Then run `composer update` to apply the changes:

```text
composer update
```

## Resolved CVEs

| CVE-ID            | Severity | Vulnerable versions                 | Fixed in Version  |
| ----------------- | -------- | ----------------------------------- | ----------------- |
| CVE-2025-35939    | Medium   | >=3.11, <4.15.3, >=5.0.0, <5.7.5    | 3.9.15-p1+tuxcare |
| CVE-2025-54417    | Medium   | >=3.0.0, <4.16.3, >=5.0.0, <5.8.4   | 3.9.15-p1+tuxcare |
| AIKIDO-2025-10090 | Medium   | <4.14.15, >=5.0.0, <5.6.6           | 3.9.15-p1+tuxcare |
| CVE-2024-52291    | High     | >=3.0.0, 4.12.5,  >=5.0.0, <5.4.6   | 3.9.15-p1+tuxcare |
| CVE-2025-68456    | Critical | >=3.0.0, <4.6.17, >=5.0.1, <5.8.21  | 3.9.15-p1+tuxcare |
| CVE-2026-27128    | Medium   | >=2.1.0, <4.16.19, >=5.0.0, <5.8.22 | 3.9.15-p1+tuxcare |
| CVE-2026-25493    | Low      | >=3.0.0, <4.15.16, >=5.0.0, <5.8.19 | 3.9.15-p1+tuxcare |
| CVE-2026-25495    | High     | >=1.0.0, <4.16.18, >=5.0.0, <5.8.22 | 3.9.15-p1+tuxcare |
| CVE-2023-33495    | Medium   | <4.4.12                             | 3.9.15-p1+tuxcare |

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

const packagejson =
`{
    "require": {
        "craftcms/cms": "3.9.15-p1+tuxcare"
    }
}`

</script>
