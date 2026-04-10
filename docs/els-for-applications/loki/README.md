# Loki

TuxCare's ELS for Loki provides security patches for Loki versions that have reached End of Life (EOL), helping organizations maintain stability without migrating to newer releases.

## Supported Loki Versions

* Loki 3.1.0, 3.2.0, 3.3.0

## Supported Operating Systems

TuxCare provides ELS for Loki as pre-built binaries for the following distributions:

* Alpine Linux 3.22
* Debian 12
* Debian 13

## Installation

This guide outlines the steps needed to install the TuxCare ELS build of Loki on your system.

<ELSPrerequisites>

* Repository access credentials (username and password) — contact [sales@tuxcare.com](mailto:sales@tuxcare.com) 

</ELSPrerequisites>

<ELSSteps>

1. **Browse and download from Nexus**

   Visit TuxCare [Nexus](https://nexus.repo.tuxcare.com/#browse/browse:els-golang) and sign in with your credentials. Navigate to the `loki` folder, choose the directory for your operating system, and download the appropriate archive

2. **Or download from the command line**

   Replace `USERNAME` and `PASSWORD` with your TuxCare credentials, and choose the URL that matches your OS and Loki version

   <TableTabs label="Choose operating system: ">

   <template #Debian_13>

   ```text
   curl -u USERNAME:PASSWORD -O https://nexus.repo.tuxcare.com/repository/els-golang/loki/debian13/loki-3.1.0-tuxcare.1.tar.gz
   ```

   For other Loki versions, replace `3.1.0` in the path with `3.2.0` or `3.3.0` as needed.

   </template>

   <template #Debian_12>

   ```text
   curl -u USERNAME:PASSWORD -O https://nexus.repo.tuxcare.com/repository/els-golang/loki/debian12/loki-3.1.0-tuxcare.1.tar.gz
   ```

   For other Loki versions, replace `3.1.0` in the path with `3.2.0` or `3.3.0` as needed.

   </template>

   <template #Alpine_Linux_3.22>

   ```text
   curl -u USERNAME:PASSWORD -O https://nexus.repo.tuxcare.com/repository/els-golang/loki/alpine3_22/loki-3.1.0-tuxcare.1.tar.gz
   ```

   For other Loki versions, replace `3.1.0` in the path with `3.2.0` or `3.3.0` as needed.

   </template>

   </TableTabs>

3. **Extract the archive**

   Create an installation directory (for example `/opt/loki`) and extract.

   ```text
   sudo mkdir -p /opt/loki
   sudo tar -xzf loki-3.1.0-tuxcare.1.tar.gz -C /opt/loki --strip-components=1
   ```

   Adjust the archive filename if you downloaded a different version.

4. **Verify the installation**

   Change to the installation directory and run the binary to confirm the TuxCare ELS build.

   ```text
   cd /opt/loki
   ./loki --version
   ```

5. **Start Loki**

   Use your configuration and verify that the application runs correctly

</ELSSteps>

If you are interested in the TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).
