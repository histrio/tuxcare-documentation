# Apache Tomcat<sup style="font-size: 0.5em;">®</sup>

Apache®, Apache Tomcat®, are either registered trademarks or trademarks of the Apache Software Foundation in the United States and/or other countries.

<br>

TuxCare's ELS for Apache Tomcat® provides security patches for Apache Tomcat® versions that have reached End of Life (EOL), helping organizations maintain stability without migrating to newer releases.

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

1. **Create a `tomcat` group**

   ```text
   sudo groupadd tomcat
   ```

2. **Create a `tomcat` user**

   Create a new user as a member of the `tomcat` group, with a home directory of `/opt/tomcat` and the login shell set to `/bin/false`.

   ```text
   sudo useradd -s /bin/false -g tomcat -d /opt/tomcat tomcat
   ```

3. **Download Apache Tomcat®**

   Download from TuxCare using your credentials. For example, Apache Tomcat® 8.5.100:

   ```text
   curl -u USERNAME:PASSWORD -O https://nexus.repo.tuxcare.com/repository/els_java/org/apache/tomcat/tomcat/8.5.100-tuxcare.3/tomcat-8.5.100-tuxcare.3.tar.gz
   ```

   Replace `USERNAME` and `PASSWORD` with your actual credentials.

4. **Extract the archive**

   Create the `/opt/tomcat` directory and extract the archive into it.

   ```text
   sudo mkdir -p /opt/tomcat
   sudo tar -xvzf tomcat-8.5.100-tuxcare.3.tar.gz -C /opt/tomcat --strip-components=1
   ```

5. **Change to the installation directory**

   ```text
   cd /opt/tomcat
   ```

6. **Update ownership**

   Change ownership of the installation to the `tomcat` group.

   ```text
   sudo chgrp -R tomcat /opt/tomcat
   ```

7. **Set `conf` directory permissions**

   Give the `tomcat` group read access to `conf` and its contents, and execute access to the directory.

   ```text
   sudo chmod -R g+r conf
   sudo chmod g+x conf
   ```

8. **Set write permissions**

   Give the `tomcat` user write access to `webapps`, `work`, `temp`, and `logs`.

   ```text
   sudo chown -R tomcat webapps/ work/ temp/ logs/
   ```

9. **Set `CATALINA_HOME`**

   Add the following line at the end of your `~/.bashrc` file, updating the path if needed.

   ```text
   export CATALINA_HOME=/opt/tomcat
   ```

   :::tip
   If you're using a different shell, you may need to edit `~/.bash_profile` instead.
   :::

10. **Reload the shell configuration**

    ```text
    source ~/.bashrc
    ```

11. **Verify the changes**

    ```text
    echo $CATALINA_HOME
    ```

12. **Start Apache Tomcat®**

    ```text
    sudo -u tomcat /opt/tomcat/bin/startup.sh
    ```

13. **Verify installation**

    * Go to [http://localhost:8080/](http://localhost:8080/) in your browser. You should see the default Apache Tomcat® homepage.

    * Or check from the terminal:

      ```text
      curl http://localhost:8080
      ```

      Successful output will be an HTML page from Apache Tomcat®.

14. **Stop Apache Tomcat®**

    ```text
    sudo -u tomcat /opt/tomcat/bin/shutdown.sh
    ```

## Windows Installation

1. **Download Apache Tomcat®**

   Download the .zip archive from [https://nexus.repo.tuxcare.com/repository/els_java/](https://nexus.repo.tuxcare.com/repository/els_java/) using your credentials

2. **Extract the archive**

   Extract, for example, apache-tomcat-8.5.100-tuxcare.3.zip to the installation directory, e.g., `C:\Tomcat`

3. **Open Environment Variables**

   Right-click *This PC* → *Properties* → *Advanced system settings* → *Environment Variables*

4. **Set `CATALINA_HOME`**

   Add a new system variable with the value `C:\Tomcat\apache-tomcat-8.5.100-tuxcare.3` (or your installation path)

5. **Start Apache Tomcat®**

   Double-click `C:\Tomcat\apache-tomcat-8.5.100-tuxcare.3\bin\startup.bat`

6. **Verify installation**

   Go to [http://localhost:8080/](http://localhost:8080/) in your browser. You should see the default Apache Tomcat® homepage

7. **Stop Apache Tomcat®**

   Double-click `C:\Tomcat\apache-tomcat-8.5.100-tuxcare.3\bin\shutdown.bat`

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

## What's next?

<WhatsNext hide-title>

* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/?product=Apache+Tomcat) — Track vulnerability fixes and updates
* ![](/images/shield.webp) [Available fixes](https://tuxcare.com/cve-tracker/fixes?product=Apache+Tomcat) — Patched versions and changelogs
* ![](/images/clipboard-notes.webp) [Supported components](https://tuxcare.com/cve-tracker/products?product=Apache+Tomcat) — Full list of product parts covered by ELS
* ![](/images/shield-alert.webp) [VEX feed](https://security.tuxcare.com/vex/cyclonedx/els_lang_java/) — Vulnerability Exploitability eXchange feed
* ![](/images/wrench.webp) [Managing the ELS repository](/els-for-applications/managing-els-repository/) — Update to newer versions

</WhatsNext>
