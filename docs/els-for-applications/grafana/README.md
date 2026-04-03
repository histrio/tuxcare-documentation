# Grafana

Endless Lifecycle Support (ELS) for Grafana from TuxCare provides security fixes for Grafana versions that have reached their end of life. This allows you to continue running Grafana without vulnerability concerns, even after official support has ended.

## Supported Grafana Versions

* Grafana 10.4.1, 11.2.0, 11.3.0, 11.4.0, 11.5.0

## Supported Operating Systems

TuxCare provides ELS for Grafana as pre-built binaries for the following distributions:

* Alpine Linux 3.22
* Debian 12
* Debian 13

## Installation

This guide outlines the steps needed to install the TuxCare ELS build of Grafana on your system.

<ELSPrerequisites>

* Repository access credentials (username and password) — contact [sales@tuxcare.com](mailto:sales@tuxcare.com) 

</ELSPrerequisites>

<ELSSteps>

1. To browse available artifacts, visit TuxCare [Nexus](https://nexus.repo.tuxcare.com/#browse/browse:els-golang). Sign in with your TuxCare credentials. Navigate to the `grafana` folder and choose the directory for your operating system (e.g. `debian12`, `debian13`, `alpine3_22`), then download the appropriate archive for your Grafana version.

2. Alternatively, download from the command line. Replace `USERNAME` and `PASSWORD` with your TuxCare credentials, and choose the URL that matches your OS and desired Grafana version.

   <TableTabs label="Choose operating system: ">

   <template #Debian_13>

   ```text
   curl -u USERNAME:PASSWORD -O https://nexus.repo.tuxcare.com/repository/els-golang/grafana/debian13/grafana-10.4.1-tuxcare.1.tar.gz
   ```

   For other Grafana versions, replace `10.4.1` in the path with `11.2.0`, `11.3.0`, `11.4.0`, or `11.5.0` as needed.

   </template>

   <template #Debian_12>

   ```text
   curl -u USERNAME:PASSWORD -O https://nexus.repo.tuxcare.com/repository/els-golang/grafana/debian12/grafana-10.4.1-tuxcare.1.tar.gz
   ```

   For other Grafana versions, replace `10.4.1` in the path with `11.2.0`, `11.3.0`, `11.4.0`, or `11.5.0` as needed.

   </template>

   <template #Alpine_Linux_3.22>

   ```text
   curl -u USERNAME:PASSWORD -O https://nexus.repo.tuxcare.com/repository/els-golang/grafana/alpine3_22/grafana-10.4.1-tuxcare.1.tar.gz
   ```

   For other Grafana versions, replace `10.4.1` in the path with `11.2.0`, `11.3.0`, `11.4.0`, or `11.5.0` as needed.

   </template>

   </TableTabs>

3. Create an installation directory (for example `/opt/grafana`) and extract the archive:

   ```text
   sudo mkdir -p /opt/grafana
   sudo tar -xzf grafana-10.4.1-tuxcare.1.tar.gz -C /opt/grafana --strip-components=1
   ```

   Adjust the archive filename if you downloaded a different version.

4. Change to the Grafana installation directory and run the binary to confirm the TuxCare ELS build is installed:

   ```text
   cd /opt/grafana
   ./bin/grafana-server --version
   ```

5. Start Grafana according to your deployment method (systemd, Docker, or manual) and verify that the application runs correctly.

</ELSSteps>

## Resolved CVEs

Fixes for the following vulnerabilities are available in ELS for Grafana from TuxCare:

|    CVE ID     | CVE Type | Severity | Affected Libraries |          Vulnerable Versions           |
|:-------------:|:--------:|:--------:|:------------------:|:--------------------------------------:|
| CVE-2025-4123 |  Direct  |  Medium  |      grafana       | 10.4.1, 11.2.0, 11.3.0, 11.4.0, 11.5.0 |

If you are interested in the TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).
