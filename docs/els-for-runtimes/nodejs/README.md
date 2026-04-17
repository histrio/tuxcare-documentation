# Node.js

Endless Lifecycle Support (ELS) for Node.js from TuxCare provides security fixes for Node.js versions that have reached their end-of-life. This allows you to continue running your server vulnerability-free.

## About ALT-Node.js

alt-nodejs is a component provided by TuxCare designed for managing Node.js versions on servers and enabling users to run multiple Node.js versions simultaneously.

Here are the key features and characteristics of alt-nodejs:

* **Multiple Node.js Versions** - alt-nodejs allows the installation and usage of various Node.js versions on a single server. This enables users to select the Node.js version that best suits their applications.

* **User Segmentation** - alt-nodejs allows administrators to provide different Node.js versions for different users or applications. Each user can choose the Node.js version that suits their project.

* **Enhanced Compatibility** - alt-nodejs is designed to ensure maximum compatibility with various Node.js applications and frameworks. This includes optimizations and changes to make it compatible with a wide range of Node.js applications.

* **Updates and Support** - TuxCare provides regular updates for alt-nodejs, including bug fixes, performance improvements, and updates for new Node.js versions. This helps ensure the security and currency of Node.js usage.

* **Easy Version Switching** - alt-nodejs allows switching between versions; users can easily manage which Node.js version is active in their environment.

alt-nodejs provides a more flexible and convenient environment for working with different Node.js versions on a single server, which is particularly useful in development and production environments where multiple applications have varying requirements for Node.js versions.

## Supported OS and Node.js versions

| Operating Systems                                            | Package Type | OS Version                        |
| :----------------------------------------------------------: | :----------: | :-------------------------------: |
| EL 7 (CentOS, CloudLinux, Oracle Linux, etc.)                | RPM          | 7.x                               |
| EL 8 (CentOS, CentOS Stream, CloudLinux, Oracle Linux, etc.) | RPM          | 8.x                               |
| EL 9 (AlmaLinux, CentOS, CloudLinux, Oracle Linux, etc.)    | RPM          | 9.x                               |
| Ubuntu                                                       | DEB          | 18.04, 20.04, 22.04, 24.04        |
| Debian                                                       | DEB          | 10, 11, 12, 13                    |

**For supported Node.js versions, see [tuxcare.com/cve-tracker](https://tuxcare.com/cve-tracker/).**

**Supported architecture:** x86_64 (64-bit)

<ContactSales text="Other versions and architectures available upon request. Contact sales@tuxcare.com for more information." />

## Installation

<ELSPrerequisites>

* A valid TuxCare ELS license key — contact [sales@tuxcare.com](mailto:sales@tuxcare.com) to obtain one
* Root or `sudo` access to the server

</ELSPrerequisites>

<ELSSteps>

1. Download the installer script

   <CodeTabs :tabs="[
     { title: 'RPM', content: `wget https://repo.alt.tuxcare.com/alt-nodejs-els/install-els-alt-nodejs-rpm-repo.sh` },
     { title: 'DEB', content: `wget https://repo.alt.tuxcare.com/alt-nodejs-els/install-els-alt-nodejs-deb-repo.sh` }
   ]" />

2. Run the installer script with your license key

   The script registers the server with CLN, adds the PGP key and repository.

   <CodeTabs :tabs="[
     { title: 'RPM', content: `sh install-els-alt-nodejs-rpm-repo.sh --license-key XXX-XXXXXXXXXXXX` },
     { title: 'DEB', content: `bash install-els-alt-nodejs-deb-repo.sh --license-key XXX-XXXXXXXXXXXX` }
   ]" />

3. Install a Node.js version

   Each version can be installed individually or all versions at once.

   <CodeTabs :tabs="[
     { title: 'RPM', content: `yum install alt-nodejs18*` },
     { title: 'DEB', content: `apt-get install alt-nodejs18*` }
   ]" />

   To install all versions at the same time:

   <CodeTabs :tabs="[
     { title: 'RPM', content: `yum groupinstall alt-nodejs` },
     { title: 'DEB', content: `apt-get install alt-nodejs` }
   ]" />

   To list available groups/meta-packages:

   <CodeTabs :tabs="[
     { title: 'RPM', content: `sudo yum group list` },
     { title: 'DEB', content: `apt list -a | grep alt-nodejs` }
   ]" />

4. Verify the installation

   `alt-nodejs` versions are installed alongside the system default. To use a specific version:

   <CodeTabs :tabs="[
     { title: 'RPM', content: rpmex },
     { title: 'DEB', content: debex }
   ]" />

</ELSSteps>

## What's Next?

<WhatsNext hide-title>

* ![](/images/shield.webp) [Machine-readable security data](../machine-readable-security-data/) — CSAF advisories and RSS feeds for Node.js ELS

</WhatsNext>

<!--examples -->

<script setup>

const rpmex =
`$ source /opt/alt/alt-nodejs18/enable
$ node -v 
v18.20.8`

const debex =
`$ source /opt/alt/alt-nodejs18/enable
$ node -v 
v18.20.8`

</script>
