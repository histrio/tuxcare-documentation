# Apache Tomcat<sup style="font-size: 0.5em;">®</sup>

Apache®, Apache Tomcat®, are either registered trademarks or trademarks of the Apache Software Foundation in the United States and/or other countries.

<br>

TuxCare's Endless Lifecycle Support (ELS) for Apache Tomcat® provides security patches, and selected bug fixes, that are integral to the stable operation of applications running on these versions of Apache Tomcat® core components such as Coyote, Catalina, Jasper, etc. These components have either reached their end of standard support from vendors or have reached End of Life (EOL).
Our ELS for Apache Tomcat® service is designed to provide solutions for organizations that are not yet ready to migrate to newer versions and that are seeking long-term stability for their legacy Apache Tomcat® applications.

This guide outlines the steps needed for Apache Tomcat server setup and configuration.

:::tip
Apache Tomcat® is also available for installation as a library for Maven and Gradle projects. You can find the corresponding instructions [here](/els-for-libraries/apache-tomcat/).
:::

## Supported Versions

* Apache Tomcat® 8.5.100, 9.0.50, 9.0.75, 9.0.83, 9.0.87, 9.0.90, 9.0.100, 10.1.18

## Installation

<ELSPrerequisites>

* Java Development Kit (JDK) 7 or later installed (verify with `java -version`)
* `JAVA_HOME` set to your JDK installation directory
* Repository access credentials (username and password) for TuxCare ELS Apache Tomcat repository
* Access to TuxCare [Nexus](https://nexus.repo.tuxcare.com/#browse/browse:els_java) to browse available artifacts after sign-in

</ELSPrerequisites>

## Linux Installation

<ELSSteps>

1. For security purposes, create a `tomcat` group:

   ```text
   sudo groupadd tomcat
   ```

2. Create a new `tomcat` user as a member of this `tomcat` group, with a home directory of `/opt/tomcat`, which will be used to install Apache Tomcat®, and set the user's login shell to `/bin/false` so that no one can log in directly as this user:

   ```text
   sudo useradd -s /bin/false -g tomcat -d /opt/tomcat tomcat
   ```

3. Open the terminal and download Apache Tomcat® from TuxCare using your credentials. For example, Apache Tomcat® 8.5.100:

   ```text
   curl -u USERNAME:PASSWORD -O https://nexus.repo.tuxcare.com/repository/els_java/org/apache/tomcat/tomcat/8.5.100-tuxcare.3/tomcat-8.5.100-tuxcare.3.tar.gz
   ```

   Replace `USERNAME` and `PASSWORD` with your actual credentials.

4. Create the `/opt/tomcat` directory and extract the Apache Tomcat® archive into it:

   ```text
   sudo mkdir -p /opt/tomcat
   sudo tar -xvzf tomcat-8.5.100-tuxcare.3.tar.gz -C /opt/tomcat --strip-components=1
   ```

5. Change to the Apache Tomcat® installation directory:

   ```text
   cd /opt/tomcat
   ```

6. Update permissions so that the `tomcat` user has access to the Apache Tomcat® installation. Change ownership to the `tomcat` group:

   ```text
   sudo chgrp -R tomcat /opt/tomcat
   ```

7. Give the `tomcat` group read access to the `conf` directory and its contents, and execute access to the directory itself:

   ```text
   sudo chmod -R g+r conf
   sudo chmod g+x conf
   ```

8. Give the `tomcat` user write access to the `webapps`, `work`, `temp`, and `logs` directories:

   ```text
   sudo chown -R tomcat webapps/ work/ temp/ logs/
   ```

9. Add the following line at the end of your `~/.bashrc` file, updating the path if needed:

   ```text
   export CATALINA_HOME=/opt/tomcat
   ```

   :::tip
   If you're using a different shell, you may need to edit `~/.bash_profile` instead.
   :::

10. Reload the shell configuration:

    ```text
    source ~/.bashrc
    ```

11. Verify the changes:

    ```text
    echo $CATALINA_HOME
    ```

12. To start Apache Tomcat® run:

    ```text
    sudo -u tomcat /opt/tomcat/bin/startup.sh
    ```

13. Verify installation.

    * Go to [http://localhost:8080/](http://localhost:8080/) in your browser. You should see the default Apache Tomcat® homepage.

    * Or check from the terminal:

      ```text
      curl http://localhost:8080
      ```

      Successful output will be an HTML page from Apache Tomcat®.

14. To stop Apache Tomcat® run:

    ```text
    sudo -u tomcat /opt/tomcat/bin/shutdown.sh
    ```

## Windows Installation

1. Download the Apache Tomcat® .zip archive from [https://nexus.repo.tuxcare.com/repository/els_java/](https://nexus.repo.tuxcare.com/repository/els_java/) using your credentials.

2. Extract the downloaded archive, for example, apache-tomcat-8.5.100-tuxcare.3.zip, to the installation directory, e.g., `C:\Tomcat`.

3. Right-click *This PC* → *Properties* → *Advanced system settings* → *Environment Variables*.

4. Add a new system variable named `CATALINA_HOME` with the value `C:\Tomcat\apache-tomcat-8.5.100-tuxcare.3` (or your installation path).

5. Start Apache Tomcat® by double-clicking `C:\Tomcat\apache-tomcat-8.5.100-tuxcare.3\bin\startup.bat`.

6. Verify installation. Go to [http://localhost:8080/](http://localhost:8080/) in your browser. You should see the default Apache Tomcat® homepage.

7. Stop Apache Tomcat® by double-clicking `C:\Tomcat\apache-tomcat-8.5.100-tuxcare.3\bin\shutdown.bat`.

## Upgrading to a Newer TuxCare Version

To upgrade to a newer TuxCare release (e.g., from `tuxcare.1` to `tuxcare.3`):

1. Download and extract a new version of the Apache Tomcat® archive from TuxCare using the instructions above.

2. Start Apache Tomcat® by running the startup script.

## Logs Location

Check logs for detailed error information:

* **Linux:**

  ```text
  /opt/tomcat/logs/catalina.out
  ```

* **Windows:**

  ```text
  C:\Tomcat\logs\catalina.[date].log
  ```

</ELSSteps>

## Vulnerability Exploitability eXchange (VEX)

VEX is a machine-readable format that indicates whether a known vulnerability is actually exploitable in your product. It helps reduce false positives and prioritize real risks.

TuxCare provides VEX data for Apache Tomcat® ELS versions at: [security.tuxcare.com/vex/cyclonedx/els_lang_java/](https://security.tuxcare.com/vex/cyclonedx/els_lang_java/).

## Resolved CVEs in ELS for Apache Tomcat®

<ClientOnly>
  <ResolvedCveTable project="apache-tomcat" />
</ClientOnly>
