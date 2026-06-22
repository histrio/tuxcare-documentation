# Wildfly

Wildfly is a trademark of Red Hat, Inc.

<br>

TuxCare's Endless Lifecycle Support (ELS) for Wildfly provides security patches and selected bug fixes that are integral to the stable operation of applications running on these versions of Wildfly. These components have either reached their end of standard support from vendors or have reached End of Life (EOL).
Our ELS for Wildfly service is designed to provide solutions for organizations that are not yet ready to migrate to newer versions and that are seeking long-term stability for their legacy Wildfly applications.

This guide outlines the steps needed for Wildfly server setup and configuration.

## Supported Versions

* Wildfly 27.0.1.Final

## Installation

<ELSPrerequisites>

* Java Development Kit (JDK) 11 or later installed (verify with `java -version`)
* `JAVA_HOME` set to your JDK installation directory
* Nexus repository access credentials (username and password) — contact [sales@tuxcare.com](mailto:sales@tuxcare.com)
* To browse available artifacts, visit TuxCare [Nexus](https://nexus.repo.tuxcare.com/#browse/browse:els_java) and click **Sign in** in the top right corner. You may need to refresh the page after logging in.

</ELSPrerequisites>

## Linux Installation

<ELSSteps>

1. **Prepare a `wildfly` group**

   Create a `wildfly` group:

   ```text
   sudo groupadd wildfly
   ```

2. **Create a `wildfly` user**

   Create a new user as a member of the `wildfly` group, with a home directory of `/opt/wildfly` and the login shell set to `/bin/false`.

   ```text
   sudo useradd -s /bin/false -g wildfly -d /opt/wildfly wildfly
   ```

3. **Download the TuxCare build**

   Download from TuxCare using your credentials. For example, Wildfly 27.0.1.Final:

   ```text
   curl -u USERNAME:PASSWORD -O https://nexus.repo.tuxcare.com/repository/els_java/org/wildfly/wildfly-ee-dist/27.0.1.Final-tuxcare.1/wildfly-ee-dist-27.0.1.Final-tuxcare.1.tar.gz
   ```

   Replace `USERNAME` and `PASSWORD` with your TuxCare credentials (see [Prerequisites](#prerequisites) above).

4. **Create the installation directory and extract the archive**

   * Create the `/opt/wildfly` directory:

   ```text
   sudo mkdir -p /opt/wildfly
   ```

   * Extract the archive into it:

   ```text
   sudo tar -xvzf wildfly-ee-dist-27.0.1.Final-tuxcare.1.tar.gz -C /opt/wildfly --strip-components=1
   ```

5. **Configure ownership and permissions**

   Change ownership of the installation to the `wildfly` user and group:

   ```text
   sudo chown -R wildfly:wildfly /opt/wildfly
   ```

6. **Set `JBOSS_HOME` and reload the shell**

   * Add the following line at the end of your `~/.bashrc` file, updating the path if needed.

   ```text
   export JBOSS_HOME=/opt/wildfly
   ```

   :::tip
   If you're using a different shell, you may need to edit `~/.bash_profile` instead.
   :::

   * Reload the shell configuration:

   ```text
   source ~/.bashrc
   ```

   * Confirm the variable is set:

   ```text
   echo $JBOSS_HOME
   ```

7. **Start Wildfly**

   ```text
   sudo -u wildfly /opt/wildfly/bin/standalone.sh
   ```

8. **Verify installation**

   * Go to [http://localhost:8080/](http://localhost:8080/). You should see the default Wildfly welcome page.

   * Or check from the terminal (successful output is HTML from Wildfly):

   ```text
   curl http://localhost:8080
   ```

9. **Stop Wildfly**

   ```text
   /opt/wildfly/bin/jboss-cli.sh --connect command=:shutdown
   ```

## Windows Installation

1. **Download Wildfly**

   Download the .zip archive from [https://nexus.repo.tuxcare.com/repository/els_java/org/wildfly/wildfly-ee-dist/27.0.1.Final-tuxcare.1/](https://nexus.repo.tuxcare.com/repository/els_java/org/wildfly/wildfly-ee-dist/27.0.1.Final-tuxcare.1/) using your credentials, for example `wildfly-ee-dist-27.0.1.Final-tuxcare.1.zip`.

2. **Extract the archive**

   Extract the archive to the installation directory, e.g., `C:\WildFly`.

3. **Open Environment Variables**

   Right-click *This PC* → *Properties* → *Advanced system settings* → *Environment Variables*.

4. **Set `JBOSS_HOME`**

   Add a new system variable with the value `C:\WildFly` (or your installation path).

5. **Start Wildfly**

   Run `C:\WildFly\bin\standalone.bat`.

6. **Verify installation**

   Go to [http://localhost:8080/](http://localhost:8080/) in your browser. You should see the default Wildfly welcome page.

7. **Stop Wildfly**

   Run `C:\WildFly\bin\jboss-cli.bat --connect command=:shutdown`.

## Logs Location

Check logs for detailed error information:

* **Linux:**

  ```text
  /opt/wildfly/standalone/log/server.log
  ```

* **Windows:**

  ```text
  C:\WildFly\standalone\log\server.log
  ```

</ELSSteps>

## What's Next?

<WhatsNext hide-title>

* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/?product=Wildfly) — Track vulnerability fixes and updates
* ![](/images/shield.webp) [Available fixes](https://tuxcare.com/cve-tracker/fixes?product=Wildfly) — Patched versions and changelogs
* ![](/images/clipboard-notes.webp) [Supported components](https://tuxcare.com/cve-tracker/products?product=Wildfly) — Full list of product parts covered by ELS
* ![](/images/shield-alert.webp) [VEX feed](https://security.tuxcare.com/vex/cyclonedx/els_lang_java/org.wildfly.core/) — Vulnerability Exploitability eXchange feed
* ![](/images/wrench.webp) [Managing the ELS repository](/els-for-applications/managing-els-repository/) — Update to newer versions

</WhatsNext>
