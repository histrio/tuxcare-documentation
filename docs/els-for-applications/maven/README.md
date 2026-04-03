# Apache Maven

TuxCare's Endless Lifecycle Support (ELS) for Apache Maven provides security patches for versions of Apache Maven that have reached End of Life (EOL) or are no longer maintained by the upstream vendor. Our ELS for Apache Maven service is designed for organizations that are not yet ready to migrate to newer Maven versions and that are seeking long-term stability for their build infrastructure.

## Supported Versions

* Apache Maven 3.8.1
* Apache Maven Shared Utils 3.2.1

## Installation

<ELSPrerequisites>

* Java Development Kit (JDK) 7 or later installed (verify with `java -version`)
* Repository access credentials (username and password) for TuxCare ELS Apache Maven repository
* Access to TuxCare [Nexus](https://nexus.repo.tuxcare.com/#browse/browse:els_java) to browse available artifacts after sign-in

</ELSPrerequisites>

<ELSSteps>

## Linux Installation

1. Download Apache Maven from TuxCare via the terminal using your credentials. For example, Maven 3.8.1:

   ```text
   curl -u USERNAME:PASSWORD -O https://nexus.repo.tuxcare.com/repository/els_java/org/apache/maven/apache-maven/3.8.1-tuxcare.1/apache-maven-3.8.1-tuxcare.1-bin.tar.gz
   ```

   Replace `USERNAME` and `PASSWORD` with your actual credentials, and adjust the version as needed.

2. Extract the archive to a directory of your choice:

   ```text
   sudo mkdir -p /opt/maven
   sudo tar -xvzf apache-maven-3.8.1-tuxcare.1-bin.tar.gz -C /opt/maven
   ```

3. Run the Maven binary directly from the extracted directory to verify:

   ```text
   /opt/maven/apache-maven-3.8.1-tuxcare.1/bin/mvn --version
   ```

   The output should display the Maven version and build details.

## Windows Installation

1. Download the Apache Maven .zip archive from [TuxCare Nexus](https://nexus.repo.tuxcare.com/repository/els_java/org/apache/maven/apache-maven/) using your credentials.

2. Extract the downloaded archive, for example, `apache-maven-3.8.1-tuxcare.1-bin.zip`, to a directory of your choice, e.g., `C:\Maven`.

3. Open a Command Prompt or PowerShell window and run the following command to verify:

   ```text
   C:\Maven\apache-maven-3.8.1-tuxcare.1\bin\mvn --version
   ```

   The output should display the Maven version and build details.

## Upgrading to a Newer TuxCare Version

To upgrade to a newer TuxCare release (e.g., from `tuxcare.1` to `tuxcare.2`), download and extract the new version of the Apache Maven archive from TuxCare using the instructions above.

</ELSSteps>

## Vulnerability Exploitability eXchange (VEX)

VEX is a machine-readable format that indicates whether a known vulnerability is actually exploitable in your product. It helps reduce false positives and prioritize real risks.

TuxCare provides VEX data for Apache Maven ELS versions at: [security.tuxcare.com/vex/cyclonedx/els_lang_java/](https://security.tuxcare.com/vex/cyclonedx/els_lang_java/).

## Resolved CVEs in ELS for Apache Maven

<ClientOnly>
  <ResolvedCveTable project="maven" />
</ClientOnly>
