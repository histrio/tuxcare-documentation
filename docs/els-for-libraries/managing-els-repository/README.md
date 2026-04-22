# Managing the ELS repository

This page provides instructions for upgrading to newer TuxCare-patched library versions delivered through the ELS for Libraries repository.

## How to Upgrade to a Newer Version

If you have already installed a TuxCare-patched package and want to upgrade to a newer release, update the version string in your `composer.json` file or run the `composer require` command with the new version.

<ELSSteps>

1. Update the required version

   Replace `VENDOR/PACKAGE` with the package name and `VERSION-pN+tuxcare` with the version listed in your TuxCare Nexus account:

   ```text
   composer require VENDOR/PACKAGE:VERSION-pN+tuxcare
   ```

2. Apply the changes

   Run `composer update` to resolve dependencies and install the new release:

   ```text
   composer update
   ```

</ELSSteps>

**Check the exact version listed in your TuxCare Nexus account to ensure you receive the most recent patched release.**

## Source code

TuxCare provides source code for patched libraries in the [Nexus repository](https://nexus.repo.tuxcare.com) alongside the distribution artifacts.

:::tip
If a source archive is not available for a specific package, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).
:::

If you encounter any issues, please contact [TuxCare support](https://tuxcare.com/support-portal/).
