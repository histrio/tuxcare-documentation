# OpenJDK

Endless Lifecycle Support (ELS) from TuxCare provides security fixes for OpenJDK versions that have reached end-of-life. This allows you to continue running your OpenJDK-based applications without vulnerability concerns, even after official support has ended.

## Supported OS and OpenJDK versions

**Supported architecture:** x86_64.

| OS                                                      | Package Type | OS Version    | OpenJDK version |
| :-----------------------------------------------------: | :----------: | :-----------: | :-------------: |
| EL 6 (CentOS, CloudLinux, OracleLinux, etc.)            | RPM          | 6.x           | 8               |
| EL 7 (CentOS, CloudLinux, OracleLinux, etc.)            | RPM          | 7.x           | 8               |
| EL 8 (CloudLinux, CentOS, AlmaLinux, OracleLinux, etc.) | RPM          | 8.x           | 8, 11           |
| AlmaLinux                                               | RPM          | 9.x           | 8               |
 

*Other versions and architectures upon request.

## Installation Instructions

:::tip
This installation method is suitable for both non-containerized systems and containerized environments (such as Docker containers based on supported OS versions).
:::

1. Download the TuxCare OpenJDK ELS repository package:

   ```text
   wget https://repo.tuxcare.com/openjdk-els/install-openjdk-els-repo.sh
   ```

2. Install the repository package:

   ```text
   sh install-openjdk-els-repo.sh --license-key XXXXXXXXXXX
   ```

3. Verify the repository is enabled:

   ```text
   yum repolist | grep openjdk-els
   ```

   
   You can now install OpenJDK versions supported by TuxCare’s Endless Lifecycle Support (ELS).

4. Install OpenJDK.

   <TableTabs label="OpenJDK version: " >

   <template #8>
  

   ```text
   yum install java-1.8.0-openjdk
   ```

   </template>

   <template #11>
  

   ```text
   yum install java-11-openjdk
   ```

   </template>

   </TableTabs>

5. Verify the installation:

   ```text
   java -version
   ```

