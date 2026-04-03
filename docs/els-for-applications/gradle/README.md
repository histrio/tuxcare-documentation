# Gradle

TuxCare's Endless Lifecycle Support (ELS) for Gradle provides security patches for versions of Gradle that have reached End of Life (EOL) or are no longer maintained by the upstream vendor. Our ELS for Gradle service is designed for organizations that are not yet ready to migrate to newer Gradle versions and that are seeking long-term stability for their build infrastructure.

## Supported Versions

* Gradle 6.9.4, 7.6.6

## Installation

<ELSPrerequisites>

* Java Development Kit (JDK) 8 or later installed (verify with `java -version`)
* Repository access credentials (username and password) for TuxCare ELS Gradle repository
* Access to TuxCare [Nexus](https://nexus.repo.tuxcare.com/#browse/browse:els_java) to browse available artifacts after sign-in

</ELSPrerequisites>

<ELSSteps>

## Linux Installation

1. Download Gradle from TuxCare via the terminal using your credentials. For example, Gradle 6.9.4:

   ```text
   curl -u USERNAME:PASSWORD -O https://nexus.repo.tuxcare.com/repository/els_java/org/gradle/gradle/6.9.4-tuxcare.1/gradle-6.9.4-tuxcare.1-bin.zip
   ```

   Replace `USERNAME` and `PASSWORD` with your actual credentials, and adjust the version as needed.

2. Extract the archive to a directory of your choice:

   ```text
   sudo mkdir -p /opt/gradle
   sudo unzip gradle-6.9.4-tuxcare.1-bin.zip -d /opt/gradle
   ```

3. Run the Gradle binary directly from the extracted directory to verify:

   ```text
   /opt/gradle/gradle-6.9.4-tuxcare.1/bin/gradle --version
   ```

   The output should display the Gradle version and build details.

## Windows Installation

1. Download the Gradle .zip archive from [TuxCare Nexus](https://nexus.repo.tuxcare.com/#browse/browse:els_java) using your credentials.

2. Extract the downloaded archive, for example, `gradle-6.9.4-tuxcare.1-bin.zip`, to a directory of your choice, e.g., `C:\Gradle`.

3. Open a Command Prompt or PowerShell window and run the following command to verify:

   ```text
   C:\Gradle\gradle-6.9.4-tuxcare.1\bin\gradle --version
   ```

   The output should display the Gradle version and build details.

## Upgrading to a Newer TuxCare Version

To upgrade to a newer TuxCare release (e.g., from `tuxcare.1` to `tuxcare.2`), download and extract the new version of the Gradle archive from TuxCare using the instructions above.

</ELSSteps>

## Vulnerability Exploitability eXchange (VEX)

VEX is a machine-readable format that indicates whether a known vulnerability is actually exploitable in your product. It helps reduce false positives and prioritize real risks.

TuxCare provides VEX data for Gradle ELS versions at: [security.tuxcare.com/vex/cyclonedx/els_lang_java/org.gradle/](https://security.tuxcare.com/vex/cyclonedx/els_lang_java/org.gradle/).

## Resolved CVEs in ELS for Gradle

<ClientOnly>
  <ResolvedCveTable project="gradle" />
</ClientOnly>
