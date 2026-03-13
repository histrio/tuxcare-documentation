# Ubuntu 20.04 ELS
<ELSPrerequisites>

* A valid TuxCare ELS license key
* Root access to the server
* TCP port 443 open to [cln.cloudlinux.com](http://cln.cloudlinux.com) and [repo.tuxcare.com](http://repo.tuxcare.com)
* Architecture: x86_64. For other architectures, please contact our [sales@tuxcare.com](mailto:sales@tuxcare.com).

</ELSPrerequisites>

<ELSSteps>

## Installing the repository

1. Download the install script:

   ```
   wget https://repo.tuxcare.com/ubuntu20_04-els/install-ubuntu20.04-els-repo.sh
   ```

2. Run with your license key.

   The script registers the server in the CLN with the key, adds a PGP key to the server.

   ```
   bash install-ubuntu20.04-els-repo.sh --license-key XXXXXXXXXXX
   ```

3. Verify that the installation was successful by running the following command:

   ```
   apt-cache show els-define
   ```

   It should return information about the available package. If the package information is displayed, the installation was successful.
   After that, you can install updates from the repository using a standard `apt upgrade` command.

   Example:

   ```
   root@localhost:~# apt-cache show els-define
   Package: els-define
   Version: 1-1.0.3
   Architecture: amd64
   Maintainer: Darya Malyavkina <dmalyavkina@cloudlinux.com>
   Installed-Size: 10
   Homepage: https://tuxcare.com/extended-lifecycle-support/
   Priority: optional
   Section: utils
   Filename: pool/main/e/els-define/els-define_1-1.0.3_amd64.deb
   Size: 1926
   SHA256: eda90ec17fee27c862a923c3666591b5958e5a1bbebf33078cf1fd859d31edff
   SHA1: b3cef5e330f25b2daaf30eb5f41f67809642d9be
   MD5sum: 629b938770455731d05c3525a71b7653
   Description: ELS define package for Ubuntu 20.04
   Description-md5: 05246f694bf7646914c7d748ae3f6a15
   ```

</ELSSteps>

## What's next?

<WhatsNext hide-title>

* ![](/images/shield-alert.webp) [OVAL](https://security.tuxcare.com/oval/els_os/ubuntu20.04els/oval.xml) — OVAL security data
* ![](/images/unlock-alt.webp) [CSAF](https://security.tuxcare.com/csaf/v2/els_os/ubuntu20.04els/) — CSAF security advisories
* ![](/images/eye.webp) [RSS](https://cve.tuxcare.com/rss_feed/els/releases/ubuntu20.04els) — Release notifications
* ![](/images/shield.webp) [Machine-Readable Security Data](/els-for-os/machine-readable-security-data/) — Errata, OVAL, CSAF
* ![](/images/box.webp) [Supported packages list](https://cve.tuxcare.com/els/projects?os=4a9ad44c-1b58-42fa-aa64-7bf19d9ccd13&project=&version=&packages=&orderBy=project-asc) — Full list of packages covered by ELS
* ![](/images/wrench.webp) [Managing the ELS repository](/els-for-os/managing-els-repository/) — Updates, local mirror, and other repository operations

</WhatsNext>
