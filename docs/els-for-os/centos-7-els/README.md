# CentOS 7 ELS
<ELSPrerequisites>

* A valid TuxCare ELS license key
* Root access to the server
* TCP port 443 open to [cln.cloudlinux.com](http://cln.cloudlinux.com), [repo.tuxcare.com](http://repo.tuxcare.com), and [els-rollout.cloudlinux.com](https://els-rollout.cloudlinux.com/)
* Architecture: x86_64. For other architectures, please contact our [sales@tuxcare.com](mailto:sales@tuxcare.com).

</ELSPrerequisites>

<ELSSteps>

## Installing the repository

1. Download the install script:

   ```
   wget https://repo.tuxcare.com/centos7-els/install-centos7-els-repo.sh
   ```

2. Run with your license key.

   The script registers the server in the CLN with the key, adds a PGP key to the server.

   ```
   sh install-centos7-els-repo.sh --license-key XXXXXXXX
   ```

3. Verify that the installation was successful by running the following command:

   ```
   yum info els-define
   ```

   It should return information about the available package. If the package information is displayed, the installation was successful.
   After that, you can install updates from the repository using a standard `yum upgrade` command.

   Example:

   ```
   [els@centos7 ~]# yum info els-define
   Loaded plugins: fastestmirror
   Loading mirror speeds from cached hostfile
   Installed Packages
   Name        : els-define
   Arch        : x86_64
   Version     : 1
   Release     : 1.0.4.el7
   Size        : 52
   Repo        : installed
   From repo   : centos7-els
   Summary     : CentOS Server els-release file
   License     : GPLv2
   Description : CentOS Server els-release file
   ```

</ELSSteps>

## What's next?

<WhatsNext hide-title>

* ![](/images/shield-alert.webp) [OVAL](https://security.tuxcare.com/oval/els_os/centos7els/oval.xml) — OVAL security data
* ![](/images/unlock-alt.webp) [CSAF](https://security.tuxcare.com/csaf/v2/els_os/centos7els/) — CSAF security advisories
* ![](/images/eye.webp) [RSS](https://cve.tuxcare.com/rss_feed/els/releases/centos7els) — Release notifications
* ![](/images/shield.webp) [Machine-Readable Security Data](/els-for-os/machine-readable-security-data/) — Errata, OVAL, CSAF
* ![](/images/box.webp) [Supported packages list](https://cve.tuxcare.com/els/projects?os=5779c3e2-4d4e-4612-8386-25e5fc241ed6&project=&version=&packages=&orderBy=project-asc) — Full list of packages covered by ELS
* ![](/images/wrench.webp) [Managing the ELS repository](/els-for-os/managing-els-repository/) — Updates, local mirror, and other repository operations

</WhatsNext>
