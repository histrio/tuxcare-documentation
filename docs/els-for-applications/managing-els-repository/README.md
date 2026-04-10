# Managing the ELS repository

This page provides instructions for upgrading to newer TuxCare package versions and accessing source code for ELS-patched applications.

## Upgrading to a newer TuxCare version

To update to a newer TuxCare-patched release, follow the instructions for your application.

<TableTabs label="Choose application: ">

<template #Apache_Hadoop>

If you have already installed a package with a `tuxcare.1` suffix and want to upgrade to a newer release (for example, `tuxcare.3`), update the version strings in your Maven or Gradle build file.

</template>

<template #Apache_Hive>

If you have already installed a package with a `tuxcare.1` suffix and want to upgrade to a newer release (for example, `tuxcare.3`), update the version strings in your Maven or Gradle build file.

</template>

<template #Apache_Tomcat>

To upgrade to a newer TuxCare release (e.g., from `tuxcare.1` to `tuxcare.3`):

1. **Download and extract the new version**

   Follow the [installation instructions](/els-for-applications/apache-tomcat/) with the new Apache Tomcat® archive

2. **Start Apache Tomcat®**

   Run the startup script

</template>

<template #Maven>

To upgrade to a newer TuxCare release (e.g., from `tuxcare.1` to `tuxcare.2`), download and extract the new version of the Apache Maven archive from TuxCare using the [installation instructions](/els-for-applications/maven/).

</template>

<template #Gradle>

To upgrade to a newer TuxCare release (e.g., from `tuxcare.1` to `tuxcare.2`), download and extract the new version of the Gradle archive from TuxCare using the [installation instructions](/els-for-applications/gradle/).

</template>

</TableTabs>

## Source code

TuxCare provides source code for patched libraries as source JARs in the repository.

<TableTabs label="Choose application: ">

<template #Apache_Hadoop>

Source code for TuxCare-patched Apache Hadoop libraries is available in the repository. Source JARs follow the standard Maven naming convention with a `-sources` classifier.

For example: [hadoop-common-2.7.3.tuxcare.1-sources.jar](https://nexus.repo.tuxcare.com/repository/els_java/org/apache/hadoop/hadoop-common/2.7.3.tuxcare.1/hadoop-common-2.7.3.tuxcare.1-sources.jar)

:::tip
If a source JAR is not available for a specific package, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com) to report the issue.
:::

</template>

<template #Apache_Hive>

Source code for TuxCare-patched Apache Hive libraries is available in the repository. Source JARs follow the standard Maven naming convention with a `-sources` classifier.

:::tip
If a source JAR is not available for a specific package, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com) to report the issue.
:::

</template>

</TableTabs>
