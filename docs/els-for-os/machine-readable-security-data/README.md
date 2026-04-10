# Machine-Readable Security Data (Errata, OVAL, CSAF)

TuxCare provides the following security updates for ELS for OS:

* **Errata** — qualified security and selected bug-fix errata advisories
* **OVAL** — Open Vulnerability and Assessment Language patch definitions for use with OpenSCAP and similar tools
* **CSAF** — Common Security Advisory Framework advisories in [OASIS](https://www.csaf.io/) CSAF 2.0 format (VEX and Security Advisory)
* **RSS** — release feeds for tracking updates

Released fixes are available via [tuxcare.com/cve-tracker](https://tuxcare.com/cve-tracker/fixes) and can additionally be found on [security.tuxcare.com](https://security.tuxcare.com).

## Security data feeds

| OS | OVAL | CSAF | RSS |
|----|------|------|-----|
| Alpine Linux 3.18 ELS | [oval.xml](https://security.tuxcare.com/oval/els_os/alpinelinux3.18els/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_os/alpinelinux3.18els/) | [rss](https://tuxcare.com/cve-tracker/api/products/export/rss?product=Alpine+Linux+3.18+ELS) |
| CentOS 6 ELS | [oval.xml](https://security.tuxcare.com/oval/els_os/centos6els/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_os/centos6els/) | [rss](https://tuxcare.com/cve-tracker/api/products/export/rss?product=CentOS+6+ELS) |
| CentOS 7 ELS | [oval.xml](https://security.tuxcare.com/oval/els_os/centos7els/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_os/centos7els/) | [rss](https://tuxcare.com/cve-tracker/api/products/export/rss?product=CentOS+7+ELS) |
| CentOS 8.4 ELS | [oval.xml](https://security.tuxcare.com/oval/els_os/centos8.4els/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_os/centos8.4els/) | [rss](https://tuxcare.com/cve-tracker/api/products/export/rss?product=CentOS+8.4+ELS) |
| CentOS 8.5 ELS | [oval.xml](https://security.tuxcare.com/oval/els_os/centos8.5els/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_os/centos8.5els/) | [rss](https://tuxcare.com/cve-tracker/api/products/export/rss?product=CentOS+8.5+ELS) |
| CentOS Stream 8 ELS | [oval.xml](https://security.tuxcare.com/oval/els_os/centos-stream8els/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_os/centos-stream8els/) | [rss](https://tuxcare.com/cve-tracker/api/products/export/rss?product=CentOS+Stream+8+ELS) |
| Debian 10 ELS | [oval.xml](https://security.tuxcare.com/oval/els_os/debian10els/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_os/debian10els/) | [rss](https://tuxcare.com/cve-tracker/api/products/export/rss?product=Debian+10+ELS) |
| Oracle Linux 6 ELS | [oval.xml](https://security.tuxcare.com/oval/els_os/oraclelinux6els/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_os/oraclelinux6els/) | [rss](https://tuxcare.com/cve-tracker/api/products/export/rss?product=Oracle+Linux+6+ELS) |
| Oracle Linux 7 ELS | [oval.xml](https://security.tuxcare.com/oval/els_os/oraclelinux7els/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_os/oraclelinux7els/) | [rss](https://tuxcare.com/cve-tracker/api/products/export/rss?product=Oracle+Linux+7+ELS) |
| Red Hat Enterprise Linux 7 ELS | [oval.xml](https://security.tuxcare.com/oval/els_os/rhel7els/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_os/rhel7els/) | [rss](https://tuxcare.com/cve-tracker/api/products/export/rss?product=Red+Hat+Enterprise+Linux+7+ELS) |
| Red Hat Enterprise Linux 8 ELS | [oval.xml](https://security.tuxcare.com/oval/els_os/rhel8els/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_os/rhel8els/) | [rss](https://tuxcare.com/cve-tracker/api/products/export/rss?product=Red+Hat+Enterprise+Linux+8+ELS) |
| Ubuntu 16.04 ELS | [oval.xml](https://security.tuxcare.com/oval/els_os/ubuntu16.04els/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_os/ubuntu16.04els/) | [rss](https://tuxcare.com/cve-tracker/api/products/export/rss?product=Ubuntu+16.04+ELS) |
| Ubuntu 18.04 ELS | [oval.xml](https://security.tuxcare.com/oval/els_os/ubuntu18.04els/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_os/ubuntu18.04els/) | [rss](https://tuxcare.com/cve-tracker/api/products/export/rss?product=Ubuntu+18.04+ELS) |
| Ubuntu 20.04 ELS | [oval.xml](https://security.tuxcare.com/oval/els_os/ubuntu20.04els/oval.xml) | [csaf](https://security.tuxcare.com/csaf/v2/els_os/ubuntu20.04els/) | [rss](https://tuxcare.com/cve-tracker/api/products/export/rss?product=Ubuntu+20.04+ELS) |

## Errata advisories

TuxCare Endless Lifecycle Support provides qualified security and selected bug-fix errata advisories across all architectures. They can help users track which CVEs are resolved and which bugs have been addressed.

You can view the full list of released fixes on [tuxcare.com/cve-tracker](https://tuxcare.com/cve-tracker/fixes/).

## OVAL patch definitions

Leveraging the Open Vulnerability and Assessment Language (OVAL) patch definitions with OVAL-compatible tools, e.g. OpenSCAP, users can accurately check their systems for the presence of vulnerabilities.

Identifying the vulnerabilities that apply to your systems is an important task for IT and InfoSec teams, and at TuxCare we make it easy. We provide OVAL data that contain instructions to the vulnerability scanner to determine the addressed vulnerabilities from the ELS updates. OVAL streams for each OS are listed in the [Security data feeds](#security-data-feeds) table above.

### How to use OpenSCAP with TuxCare ELS

OpenSCAP is an open source vulnerability scanner and compliance tool and it can be used to scan a system protected by TuxCare ELS. The following steps show how to produce a vulnerability report for the system:

1. Install the ELS release package and OpenSCAP:

   <CodeTabs :tabs="[
     { title: 'RPM', content: `yum install els-define openscap openscap-utils scap-security-guide -y` },
     { title: 'DEB', content: `apt-get install els-define libopenscap8 -y` },
     { title: 'APK', content: `apk add els-alpine-release openscap` }
   ]" />

2. Before running a scan, make sure the system is up to date and running the latest kernel:

   <CodeTabs :tabs="[
     { title: 'RPM', content: `yum update -y` },
     { title: 'DEB', content: `apt-get update && apt-get upgrade -y` },
     { title: 'APK', content: `apk update && apk upgrade` }
   ]" />

3. Reboot the system.

4. **RPM-based system only**: after reboot, remove older kernel versions:

   <CodeTabs :tabs="[
     { title: 'EL 6, EL 7', content: `package-cleanup --oldkernels --count=1 -y` },
     { title: 'EL 8, EL 9', content: `dnf remove --oldinstallonly -y` }
   ]" />

5. Download the OVAL stream. For example, Ubuntu 18.04:

   ```
   wget https://security.tuxcare.com/oval/els_os/ubuntu18.04els/oval.xml
   ```

6. Run the scan:

   ```
   oscap oval eval --results results.xml --report report.html oval.xml
   ```

7. Examine the scan results report.

   Following the example above, the scan results report will be saved to the report.html file in the current directory. This file can then be downloaded for analysis or published directly with a local web server, for example:

   ```
   python3 -m http.server 8000
   ```

   or for python2

   ```
   python -m SimpleHTTPServer 8000
   ```

   Assuming the above command is run from the directory with the report.html file, the webpage with the report can then be accessed on `http://<server-ip-address>:8000/report.html` through a web browser.

   **Note: the OpenSCAP report below is provided as an example. The results will vary depending on the OS and version you are scanning.**

   ![](/images/available-cve-fixes-and-their-status.webp)

   The report includes a table with vulnerabilities and their status on the examined system. A line such as the one below reports that the system is vulnerable to CVE-2023-2828:

   ```
   update oval:com.tuxcare.clsa:def:1688677755 true patch [CLSA-2023:1688677755], [CVE-2023-2828] Fix CVE(s): CVE-2023-2828
   ```

   The table also includes corresponding hyperlinks to advisory pages where the package and the version containing the fix can be found as well as the command to run on the target system in order to install the update.

   Lines like the one below designate that the fix for the corresponding CVE is already installed on the system, and no further action is needed:

   ```
   oval:com.tuxcare.clsa:def:1694538670 false patch [CLSA-2023:1694538670], [CVE-2022-40433] Fix CVE(s): CVE-2022-40433
   ```

### How to integrate the OVAL data with a new vulnerability scanner

Identifying the vulnerabilities that apply to your systems is an important task for IT and InfoSec teams, and at TuxCare we make it easy.

To detect whether a system has TuxCare ELS installed, check for the following file being present: `/etc/els-release`.

Once that is validated, you can use the OVAL files corresponding to your operating system from above to scan for vulnerabilities.

## Common Security Advisory Framework

Common Security Advisory Framework (CSAF) is a machine-readable format, standardized by [OASIS](https://www.csaf.io/). It's designed to enable consistent and automated sharing of security advisory information. CSAF links for each OS are listed in the [Security data feeds](#security-data-feeds) table above.

TuxCare publishes the following CSAF files at [security.tuxcare.com](https://security.tuxcare.com/csaf/v2/):
* CSAF Vulnerability Exploitability eXchange (VEX) files – VEX documents, indexed by CVE, are available in CSAF 2.0 format, including past CVEs.
* CSAF Security Advisory files – advisories are published in CSAF 2.0 format and indexed by Security Advisory.

`provider-metadata.json` contains information for tools and users about where and how to retrieve CSAF advisories published by TuxCare. By OASIS requirements, it is available at two URLs (both serving the same file):
* [csaf.data.security.tuxcare.com](https://csaf.data.security.tuxcare.com/)
* [tuxcare.com/.well-known/csaf/provider-metadata.json](https://tuxcare.com/.well-known/csaf/provider-metadata.json)

## RSS release feeds

TuxCare provides RSS feeds for tracking new ELS releases. RSS links for each OS are listed in the [Security data feeds](#security-data-feeds) table above.

