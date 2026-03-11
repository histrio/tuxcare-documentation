# Ruby

Endless Lifecycle Support (ELS) for Ruby from TuxCare provides security fixes for Ruby versions that have reached their end-of-life. This allows you to continue running your server vulnerability-free.

## About ALT-Ruby

alt-ruby is a component provided by TuxCare designed for managing Ruby versions on servers and enabling users to run multiple Ruby versions simultaneously.

Here are the key features and characteristics of alt-ruby:

* **Multiple Ruby Versions** - alt-ruby allows the installation and usage of various Ruby versions on a single server. This enables users to select the Ruby version that best suits their applications.

* **User Segmentation** - alt-ruby allows administrators to provide different Ruby versions for different users or applications. Each user can choose the Ruby version that suits their project.

* **Enhanced Compatibility** - alt-ruby is designed to ensure maximum compatibility with various Ruby applications and frameworks. This includes optimizations and changes to make it compatible with a wide range of Ruby applications.

* **Updates and Support** - TuxCare provides regular updates for alt-ruby, including bug fixes, performance improvements, and updates for new Ruby versions. This helps ensure the security and currency of Ruby usage.

* **Easy Version Switching** - alt-ruby allows switching between versions; users can easily manage which Ruby version is active in their environment.

alt-ruby provides a more flexible and convenient environment for working with different Ruby versions on a single server, which is particularly useful in development and production environments where multiple applications have varying requirements for Ruby versions.

## Supported OS and Ruby versions

| Operating Systems | Package Type | OS Version     |
| :---------------: | :----------: | :------------: |
| Debian            | DEB          | 12, 13         |

**Supported Ruby versions:** 2.6, 2.7, 3.0, 3.1

**Supported architecture:** x86_64 (64-bit)

<ContactSales text="Other distros and architectures available upon request. Contact sales@tuxcare.com for more information." />

## Installation

<ELSPrerequisites>

* A valid TuxCare ELS license key — contact [sales@tuxcare.com](mailto:sales@tuxcare.com) to obtain one
* Root or `sudo` access to the server

</ELSPrerequisites>

<ELSSteps>

1. Download the installer script

   ```text
   wget https://repo.alt.tuxcare.com/alt-ruby-els/install-els-alt-ruby-deb-repo.sh
   ```

2. Run the installer script with your license key

   The script registers the server with CLN, adds the PGP key and repository.

   ```text
   bash install-els-alt-ruby-deb-repo.sh --license-key XXX-XXXXXXXXXXXX
   ```

3. Install a Ruby version

   ```text
   apt-get install alt-ruby27
   ```

   To see available packages:

   ```text
   apt list -a | grep alt-ruby
   ```

4. Verify the installation

   `alt-ruby` versions are installed alongside the system default. To use a specific version:

   ```text
   source /opt/alt/alt-ruby27/enable
   ruby -v
   ```

5. Update packages

   ```text
   apt-get update
   apt-get --only-upgrade install alt-ruby*
   ```

</ELSSteps>

<WhatsNext>

* ![](/images/shield.webp) [Machine-readable security data](../machine-readable-security-data/) — CSAF advisories and RSS feeds for Ruby ELS

</WhatsNext>