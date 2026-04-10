# Apache Hadoop

TuxCare's ELS for Apache Hadoop provides security patches for Apache Hadoop versions that have reached End of Life (EOL), helping organizations maintain stability without migrating to newer releases.

## Supported Versions

* Apache Hadoop 2.7.1, 2.7.3

## Installation

This guide outlines the steps needed to integrate the TuxCare ELS for Apache Hadoop repository into your Java application. The repository provides trusted Java libraries that can be easily integrated into your **Maven** and **Gradle** projects.

<ELSPrerequisites>

* Repository access credentials (username and password) — contact [sales@tuxcare.com](mailto:sales@tuxcare.com) 

</ELSPrerequisites>

<ELSSteps>

1. **Navigate to the build tool directory**
   * Windows
   ```text
   Maven: C:\Users\{username}\.m2
   Gradle: C:\Users\{username}\.gradle
   ```
   * macOS
   ```text
   Maven: /Users/{username}/.m2
   Gradle: /Users/{username}/.gradle
   ```
   * Linux
   ```text
   Maven: /home/{username}/.m2
   Gradle: /home/{username}/.gradle
   ```

2. **Configure credentials**

   :::tip
   For Maven, you may choose any valid `<id>` value instead of `tuxcare-registry`, but the same value must be used in both `settings.xml` and `pom.xml`.
   :::

   <CodeTabs :tabs="[
     { title: 'Maven (~/.m2/settings.xml)', content: mavencreds },
     { title: 'Gradle (~/.gradle/gradle.properties)', content: gradlecreds }
   ]" />

   Here `USERNAME` and `PASSWORD` are your TuxCare credentials.

3. **Add the TuxCare repository**

   Add the TuxCare Apache Hadoop repository and plugins to your build configuration.

   <CodeTabs :tabs="[
     { title: 'Maven (pom.xml)', content: mavenrepo },
     { title: 'Gradle (build.gradle)', content: gradlerepo }
   ]" />

   * To fully switch from the official Apache Hadoop repository, replace it with the TuxCare repository.
   * To keep both, add TuxCare after the official one.

   Example Maven and Gradle projects are available on GitHub. Remember to set the required environment variables.
   * [Maven](https://github.com/cloudlinux/securechain-java/tree/main/examples/maven)
   * [Gradle](https://github.com/cloudlinux/securechain-java/tree/main/examples/gradle)

4. **Update dependencies**

   Replace Apache Hadoop dependencies with TuxCare-maintained versions. You can find artifact versions on [Nexus](https://nexus.repo.tuxcare.com/#browse/browse:els_java) — sign in with your TuxCare credentials.

   <CodeTabs :tabs="[
     { title: 'Maven (pom.xml)', content: mavendeps },
     { title: 'Gradle (build.gradle)', content: gradledeps }
   ]" />

5. **Verify the setup**

   Use your build tool to list the project's dependencies and confirm TuxCare packages are resolved correctly.

   <CodeTabs :tabs="[
     { title: 'Maven', content: `mvn dependency:tree -Dverbose` },
     { title: 'Gradle', content: `./gradlew dependencies --configuration runtimeClasspath` }
   ]" />

6. **Build the project**

   Include any library from the repository and run a build.

   <CodeTabs :tabs="[
     { title: 'Maven', content: `mvn clean install` },
     { title: 'Gradle', content: `./gradlew build` }
   ]" />

   The build tool you're using should be able to identify and resolve dependencies from the TuxCare ELS for Apache Hadoop repository.

</ELSSteps>

## Resolved CVEs in ELS for Apache Hadoop

<ClientOnly>
  <ResolvedCveTable project="apache-hadoop" />
</ClientOnly>

## What's next?

<WhatsNext hide-title>

* ![](/images/shield-alert.webp) [VEX](https://security.tuxcare.com/vex/cyclonedx/els_lang_java/org.apache.hadoop/) — Vulnerability Exploitability eXchange
* ![](/images/wrench.webp) [Managing the ELS repository](/els-for-applications/managing-els-repository/) — Source code and upgrades

</WhatsNext>

<!-- data for Apache Hadoop instructions used in code blocks -->

<script setup>
const mavencreds =
`<?xml version="1.0" encoding="UTF-8"?>
<settings xmlns="http://maven.apache.org/SETTINGS/1.1.0">
    <servers>
        <server>
          <id>tuxcare-registry</id>
          <username>USERNAME</username>
          <password>PASSWORD</password>
        </server>
    </servers>
</settings>`

const gradlecreds =
`tuxcare_registry_url=https://nexus.repo.tuxcare.com/repository/els_java/
tuxcare_registry_user=USERNAME
tuxcare_registry_password=PASSWORD`

const mavenrepo =
`<repositories>
  <repository>
      <id>tuxcare-registry</id>
      <url>https://nexus.repo.tuxcare.com/repository/els_java/</url>
  </repository>
</repositories>`

const gradlerepo =
`repositories {
    maven {
      url = uri(providers.gradleProperty("tuxcare_registry_url").get())
      credentials {
        username = providers.gradleProperty("tuxcare_registry_user").get()
        password = providers.gradleProperty("tuxcare_registry_password").get()
      }
      authentication {
        basic(BasicAuthentication)
      }
    }
    mavenCentral()
}`

const mavendeps =
`<dependencyManagement>
    <dependencies>
            <dependency>
                <groupId>org.apache.hadoop</groupId>
                <artifactId>hadoop-project</artifactId>
                <version>2.7.3.tuxcare.1</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
    </dependencies>
</dependencyManagement>

<dependencies>
    <dependency>
        <groupId>org.apache.hadoop</groupId>
        <artifactId>hadoop-common</artifactId>
    </dependency>
</dependencies>`

const gradledeps =
`dependencies {
    implementation("org.apache.hadoop:hadoop-common:2.7.1.tuxcare.1")
}`
</script>
