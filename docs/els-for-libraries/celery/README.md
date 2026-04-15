# Celery

Endless Lifecycle Support (ELS) for Libraries from TuxCare provides security fixes for Celery. This allows you to continue running your Celery applications without vulnerability concerns, even after official support has ended.

## Supported Celery Versions

* **Celery** 4.4.7, 5.1.2

Other versions upon request.

## Connection to ELS for Celery Repository

This guide outlines the steps needed to integrate the TuxCare ELS for Celery repository.

### Step 1: Get user credentials

You need a username and password in order to use TuxCare ELS for Celery repository. Anonymous access is disabled. To receive the credentials please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

### Step 2: Set Up ELS for Celery

To use TuxCare's ELS for Celery, follow one of the options below:

#### Option 1: Install a Package with ELS Repository via Command Line

You can install or upgrade a package directly using the ELS repository with your credentials:

```text
pip install --upgrade \
  -i https://<username>:<password>@nexus.repo.tuxcare.com/repository/els_python/simple \
  celery
```

**Replace `<username>` and `<password>` with the credentials provided by sales.**

#### Option 2: Configure `pip` to Use the ELS Repository (Full Replacement)

This method is recommended if you want to use only ELS-patched Python packages from TuxCare and replace the default PyPI source with the TuxCare ELS repository. 

1. Create or update the `pip` configuration file and add the following:

   <CodeTabs :tabs="[
   { title: 'Linux/macOS (~/.pip/pip.conf)', content:
   `[global]
   index-url = https://username:password@nexus.repo.tuxcare.com/repository/els_python/simple` },
   { title: 'Windows (%APPDATA%\pip\pip.ini)', content:
   `[global]
   index-url = https://username:password@nexus.repo.tuxcare.com/repository/els_python/simple` }
   ]" />

2. Run the command to install the latest package version:

   ```text
   pip install --upgrade celery
   ```

   Or install a specific patched TuxCare version, for example:

   ```text
   pip install celery==5.1.2.post1+tuxcare
   ```
   
#### Option 3: Add the TuxCare ELS Repository as Additional (recommended)

If you want to keep using public PyPI and fetch only specific patched packages from TuxCare, use *extra-index-url* instead. In this configuration, make sure to specify the exact patched version (step 2 below), otherwise `pip` may install the version from public PyPI.

1. Create or update the `pip` configuration file and add the following:

   <CodeTabs :tabs="[
   { title: 'Linux/macOS (~/.pip/pip.conf)', content:
   `[global]
   extra-index-url = https://username:password@nexus.repo.tuxcare.com/repository/els_python/simple` },
   { title: 'Windows (%APPDATA%\pip\pip.ini)', content:
   `[global]
   extra-index-url = https://username:password@nexus.repo.tuxcare.com/repository/els_python/simple` }
   ]" />

2. Run the command to install a specific patched TuxCare version, for example:

   ```text
   pip install celery==5.1.2.post1+tuxcare
   ```

## Upgrading to a Newer TuxCare Version

To upgrade to a newer TuxCare release (e.g., from `version.post1+tuxcare` to `version.post2+tuxcare`) use the same installation method you used above and specify the newer package version.

## Vulnerability Exploitability eXchange (VEX) 

VEX is a machine-readable format that tells you if a known vulnerability is actually exploitable in your product. It reduces false positives, helps prioritize real risks.

TuxCare provides VEX for Celery ELS versions: [security.tuxcare.com/vex/cyclonedx/els_lang_python/celery/](https://security.tuxcare.com/vex/cyclonedx/els_lang_python/celery/).

## Software Bill of Materials (SBOM)

For each published ELS package and version, TuxCare generates SBOM files. Those artifacts are published to TuxCare Nexus.

You can browse SBOM files for this package in the `els_python_sbom` repository:

[nexus.repo.tuxcare.com/#browse/browse:els_python_sbom:celery](https://nexus.repo.tuxcare.com/#browse/browse:els_python_sbom:celery)

Use the credentials you received for TuxCare ELS ([Step 1: Get user credentials](#step-1:-get-user-credentials)) to access Nexus.

## Resolved CVEs

Fixes for the following vulnerabilities are available in ELS for Celery from TuxCare versions:

| CVE ID         | Severity | Library | Vulnerable Versions | Safe Version         |
| :------------: | :------: | :-----: | :-----------------: | :------------------: |
| CVE-2021-23727 | High     | celery  | < 5.2.2             | 4.4.7.post1+tuxcare  |
| CVE-2021-23727 | High     | celery  | < 5.2.2             | 5.1.2.post1+tuxcare  |

If you are interested in the TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).
