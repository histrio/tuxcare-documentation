# Python

Endless Lifecycle Support (ELS) for Python from TuxCare provides security fixes for Python versions that have reached their end-of-life. This allows you to continue running your server vulnerability-free.

## About ALT-Python

alt-python is a component provided by TuxCare designed for managing Python versions on servers and enabling users to run multiple Python versions simultaneously.

Here are the key features and characteristics of alt-python:

* **Multiple Python Versions** - alt-python allows the installation and usage of various Python versions on a single server. This enables users to select the Python version that best suits their applications.

* **User Segmentation** - alt-python allows administrators to provide different Python versions for different users or applications. Each user can choose the Python version that suits their project.

* **Enhanced Compatibility** - alt-python is designed to ensure maximum compatibility with various Python applications and frameworks. This includes optimizations and changes to make it compatible with a wide range of Python applications.

* **Updates and Support** - TuxCare provides regular updates for alt-python, including bug fixes, performance improvements, and updates for new Python versions. This helps ensure the security and currency of Python usage.

* **Direct Version Access** - alt-python allows switching between versions, users can easily manage which Python version is active in their environment.

alt-python provides a more flexible and convenient environment for working with different Python versions on a single server, which is particularly useful in development and production environments where multiple applications have varying requirements for Python versions.

## Supported OS and Python versions

| Operating Systems                                            | Package Type | OS Version                         | Python versions               |
| :----------------------------------------------------------: | :----------: | :--------------------------------: | :---------------------------: |
| EL 7 (CentOS, CloudLinux, Oracle Linux, etc.)                | RPM          | 7.x                               | 2.7, 3.6                     |
| EL 8 (CentOS, CentOS Stream, CloudLinux, Oracle Linux, etc.) | RPM          | 8.x                               | 2.7, 3.6                     |
| EL 9 (AlmaLinux, CentOS, CloudLinux, Oracle Linux, etc.)     | RPM          | 9.x                               | 2.7, 3.6                     |
| EL 10 (AlmaLinux, CloudLinux, Oracle Linux, etc.)            | RPM          | 10.x                              | 2.7, 3.6                     |
| Ubuntu                                                       | DEB          | 16.04, 18.04, 20.04, 22.04, 24.04 | 2.7, 3.6                     |
| Debian                                                       | DEB          | 10, 11                            | 2.7, 3.6                     |
| Debian                                                       | DEB          | 12, 13                            | 2.7, 3.6, 3.7, 3.8, 3.9     |

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
     { title: 'RPM', content: `wget https://repo.alt.tuxcare.com/alt-python-els/install-els-alt-python-rpm-repo.sh` },
     { title: 'DEB', content: `wget https://repo.alt.tuxcare.com/alt-python-els/install-els-alt-python-deb-repo.sh` }
   ]" />

2. Run the installer script with your license key

   The script registers the server with CLN, adds the PGP key and repository.

   <CodeTabs :tabs="[
     { title: 'RPM', content: `sh install-els-alt-python-rpm-repo.sh --license-key XXX-XXXXXXXXXXXX` },
     { title: 'DEB', content: `bash install-els-alt-python-deb-repo.sh --license-key XXX-XXXXXXXXXXXX` }
   ]" />

3. Install a Python version

   **For RPM-based systems**, enable the CodeReady Builder (CRB) repository which contains the `gdbm` package:

   <CodeTabs :tabs="[
     { title: 'RPM', content: `yum install alt-python36 --enablerepo crb` },
     { title: 'DEB', content: `apt-get install alt-python36` }
   ]" />

4. Verify the installation

   `alt-python` versions are installed alongside the system default. To use a specific version:

   <CodeTabs :tabs="[
     { title: 'RPM', content: rpmex },
     { title: 'DEB', content: debex }
   ]" />

</ELSSteps>

<WhatsNext>

* ![](/images/shield.webp) [Machine-readable security data](../machine-readable-security-data/) — OVAL, CSAF, Errata, and RSS feeds for Python ELS

</WhatsNext>

<script setup>

const rpmex =
`$ /opt/alt/python36/bin/python3.6
Python 3.6.15 (default, Apr 10 2024, 00:00:00) 
[GCC 11.5.0 20240719 (Red Hat 11.5.0-5)] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> print("Hello, World!")
Hello, World!`

const debex =
`$ /opt/alt/python36/bin/python3.6
Python 3.6.15 (default, Sep 18 2025, 13:57:38) 
[GCC 5.4.0 20160609] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>>`

</script>
