# .NET

Endless Lifecycle Support (ELS) for .NET from TuxCare delivers security fixes for .NET library, framework, and tool packages, distributed through NuGet packages. This allows you to continue running your .NET applications without vulnerability concerns, even after official support has ended.

NuGet is the standard package manager for .NET, used to deliver the reusable components that applications depend on. ELS applies fixes at the package level, so your applications receive security updates without requiring changes to your own code.

## Supported NuGet packages

* .NET 6, 8, 10
* AutoMapper 2.2.2, 3.3.2, 4.2.2, 5.2.1, 6.2.3, 7.0.2, 8.1.2, 9.0.1, 10.1.2, 11.0.2, 12.0.2, 13.0.2, 14.0.1
* log4net 1.2.15, 1.2.16
* Microsoft.Azure.Storage.DataMovement 1.2.0, 1.2.1
* Microsoft.Data.SqlClient 1.1.4, 1.1.5
* Microsoft.Owin 3.1.0, 3.1.1
* MimeKit 3.6.1, 3.6.2
* Newtonsoft.Json 4.5.11, 4.5.12, 6.0.8, 6.0.9, 8.0.3, 8.0.4, 9.0.1, 9.0.2, 10.0.3, 10.0.4, 11.0.2, 11.0.3, 12.0.3, 12.0.4
* NHibernate 4.1.2.4001
* Refit 6.3.2, 6.3.3
* RestSharp 108.0.3, 108.0.4, 110.2.0, 110.2.1, 111.4.1, 111.4.2
* SharpZipLib 0.86.0, 0.86.1
* SixLabors.ImageSharp 1.0.5
* System.Formats.Asn1 5.0.1, 7.0.1
* System.Text.Json 7.0.5

Other versions upon request.

## Installation

<ELSPrerequisites>

* .NET SDK installed — a TuxCare-supported .NET SDK build is also [available](/els-for-runtimes/dotnet/)
* Nexus repository access credentials (username and password) — contact [sales@tuxcare.com](mailto:sales@tuxcare.com). Anonymous access is disabled.
* To browse available artifacts, visit TuxCare [Nexus](https://nexus.repo.tuxcare.com/) and sign in. You may need to refresh the page after logging in.

</ELSPrerequisites>

<ELSSteps>

1. Locate the `nuget.config` file

   NuGet reads sources and credentials from `nuget.config`. The file is resolved in the following order (highest to lowest priority):

   * **Project-level**: `nuget.config` in your project folder (next to the `.csproj`)
   * **Solution-level**: `nuget.config` in the solution folder
   * **User-level**: `~/.nuget/NuGet/NuGet.Config` (Linux/macOS) or `%APPDATA%\NuGet\NuGet.Config` (Windows)
   * **Machine-level**: `/etc/nuget/NuGet/NuGet.Config` (Linux/macOS) or `%ProgramFiles(x86)%\NuGet\Config\` (Windows)

   If you don't have a project yet, create one before continuing:

   ```text
   dotnet new console -o MyProject
   cd MyProject
   ```

2. Add your TuxCare credentials

   Use either the `dotnet` CLI or edit `nuget.config` directly to add credentials for the TuxCare source. Replace `USERNAME` and `PASSWORD` with the credentials provided by TuxCare.

   <CodeTabs :tabs="[
     { title: 'dotnet CLI', content: `dotnet nuget update source TuxCare --username USERNAME --password PASSWORD` },
     { title: 'nuget.config', content: credsSnippet }
   ]" />

   :::warning
   Avoid committing credentials to version control. Consider using environment variables or a separate local configuration file for sensitive information.
   :::

   :::tip
   When using the CLI (`dotnet nuget add source` or `dotnet nuget update source`), the password is stored as a hash. When editing `nuget.config` manually, the password is stored in plain text — use `<ClearTextPassword>` only when a hashed password isn't practical.
   :::

3. Register the TuxCare NuGet repository

   Add the `els_dotnet` NuGet source either via the CLI or by editing `nuget.config`. Replace `<els_dotnet_customerN>` with your customer repository name.

   <CodeTabs :tabs="[
     { title: 'dotnet CLI', content: cli },
     { title: 'nuget.config', content: configjson }
   ]" />

   To verify that the source was added, list all configured NuGet sources:

   ```text
   dotnet nuget list source
   ```

4. Install the patched package

   Install the TuxCare-maintained release that matches your project:

   <CodeTabs :tabs="[
     { title: 'dotnet CLI', content: `dotnet add package Newtonsoft.Json --version 12.0.4-tuxcare-els` },
     { title: 'csproj', content: pkgxml }
   ]" />

   **Check the exact version listed in your TuxCare Nexus account to ensure you receive the most recent patched release.**

   :::tip

   If you edited `nuget.config` or `.csproj` manually, run `dotnet restore` in your project directory to install packages and resolve dependencies against the TuxCare repository:

   ```text
   dotnet restore
   ```

   :::

</ELSSteps>

### Package Source Mapping

If you use a shared `nuget.config`, you can route specific packages to the TuxCare feed while others continue to come from NuGet.org. Add a `<packageSourceMapping>` section inside `<configuration>`. For example, to route Newtonsoft.Json to TuxCare:

<CodeTabs :tabs="[
  { title: 'Snippet to Add', content: mappingSnippet },
  { title: 'Full nuget.config', content: mappingFullConfig }
]" />

### Managing the TuxCare Source

To update existing credentials or remove the source:

```text
dotnet nuget update source TuxCare --username <NEW_USERNAME> --password <NEW_PASSWORD>
```

```text
dotnet nuget remove source TuxCare
```

## Vulnerability Exploitability eXchange (VEX)

VEX is a machine-readable format that tells you if a known vulnerability is actually exploitable in your product. It reduces false positives and helps prioritize real risks.

TuxCare provides VEX for .NET ELS versions: [security.tuxcare.com/vex/cyclonedx/els_lang_dotnet/](https://security.tuxcare.com/vex/cyclonedx/els_lang_dotnet/).

Per-package, per-version CycloneDX VEX documents are available at `els_lang_dotnet/<package>/<version>/vex.json`, alongside a top-level aggregated `vex.json` signed via `vex.json.asc`.

## Resolved CVEs

| CVE ID | Severity | Affected Package | Affected Versions | Safe Versions |
| :----: | :------: | :--------------: | :---------------: | :-----------: |
| CVE-2026-32933 | High | AutoMapper | < 15.1.1; 16.0.0 ≤ v < 16.1.1 | See Nexus |
| CVE-2018-1285 | Critical | log4net | < 2.0.10 | See Nexus |
| CVE-2024-35252 | High | Microsoft.Azure.Storage.DataMovement | < 2.0.0 | See Nexus |
| CVE-2024-0056 | High | Microsoft.Data.SqlClient | < 2.1.7 | See Nexus |
| CVE-2020-1045 | High | Microsoft.Owin | ASP.NET Core 2.1 ≤ v ≤ 2.1.21; 3.1 ≤ v < 3.1.8 | See Nexus |
| CVE-2022-29117 | High | Microsoft.Owin | .NET 5.0, 6.0.0; .NET Core 3.1 (specific releases) | See Nexus |
| CVE-2024-38095 | High | MimeKit | >= 3.0.0, < 4.7.1 | See Nexus |
| GHSA-gmc6-fwg3-75m5 | High | MimeKit | >= 3.0.0, < 4.7.1 | See Nexus |
| CVE-2024-39677 | Medium | NHibernate | < 5.4.9 | See Nexus |
| CVE-2024-21907 | High | Newtonsoft.Json | < 13.0.1 | See Nexus |
| GHSA-5crp-9r3c-p9vr | High | Newtonsoft.Json | < 13.0.1 | See Nexus |
| CVE-2024-51501 | Critical | Refit | < 7.2.22 | See Nexus |
| CVE-2024-45302 | High | RestSharp | >= 107.0.0, < 112.0.0 | See Nexus |
| GHSA-4rr6-2v9v-wcpc | Medium | RestSharp | >= 107.0.0-preview.1, < 112.0.0 | See Nexus |
| CVE-2021-32840 | Critical | SharpZipLib | < 1.3.3 | See Nexus |
| CVE-2021-32841 | Medium | SharpZipLib | >= 1.3.0, < 1.3.3 | See Nexus |
| CVE-2021-32842 | Medium | SharpZipLib | >= 1.0.0, < 1.3.3 | See Nexus |
| CVE-2024-27929 | High | SixLabors.ImageSharp | < 2.1.7; 3.1.0 ≤ v < 3.1.3 | See Nexus |
| CVE-2025-27598 | High | SixLabors.ImageSharp | < 2.1.10; 3.0.0 ≤ v < 3.1.7 | See Nexus |
| CVE-2025-54575 | Medium | SixLabors.ImageSharp | < 2.1.11; 3.0.0 ≤ v < 3.1.11 | See Nexus |
| CVE-2024-38095 | High | System.Formats.Asn1 | 5.0.0-pre ≤ v < 6.0.1; 7.0.0-pre ≤ v < 8.0.1 | See Nexus |
| CVE-2024-30105 | High | System.Text.Json | 7.0.0 ≤ v < 8.0.4 | See Nexus |

## What's Next?

<WhatsNext hide-title>

* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/?product=.NET+Libraries) — Track vulnerability fixes and updates
* ![](/images/shield.webp) [Available fixes](https://tuxcare.com/cve-tracker/fixes?product=.NET+Libraries) — Patched versions and changelogs
* ![](/images/clipboard-notes.webp) [Supported components](https://tuxcare.com/cve-tracker/products?product=.NET+Libraries) — Full list of product parts covered by ELS
* ![](/images/shield-alert.webp) [VEX feed](https://security.tuxcare.com/vex/cyclonedx/els_lang_dotnet/) — Vulnerability Exploitability eXchange feed
* ![](/images/wrench.webp) [Managing the ELS repository](/els-for-libraries/managing-els-repository/) — Update to newer versions

</WhatsNext>

<script setup>

const credsSnippet =
`<packageSourceCredentials>
  <TuxCare>
    <add key="Username" value="USERNAME" />
    <add key="ClearTextPassword" value="PASSWORD" />
  </TuxCare>
</packageSourceCredentials>`

const cli =
`dotnet nuget add source "https://nexus.repo.tuxcare.com/repository/<els_dotnet_customerN>/index.json" \\
  --name TuxCare \\
  --username USERNAME \\
  --password PASSWORD`

const configjson =
`<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <packageSources>
    <!-- To inherit the global NuGet package sources remove the <clear/> line below -->
    <clear />
    <add key="TuxCare" value="https://nexus.repo.tuxcare.com/repository/<els_dotnet_customerN>/index.json" />
    <add key="nuget" value="https://api.nuget.org/v3/index.json" />
  </packageSources>
</configuration>`

const pkgxml =
`<ItemGroup>
  <PackageReference Include="Newtonsoft.Json" Version="12.0.4-tuxcare-els" />
</ItemGroup>`

const mappingSnippet =
`<packageSourceMapping>
  <!-- Allow nuget.org to serve any package -->
  <packageSource key="nuget">
    <package pattern="*" />
  </packageSource>

  <!-- Route specific packages to the TuxCare feed -->
  <packageSource key="TuxCare">
    <package pattern="Newtonsoft.*" />
  </packageSource>
</packageSourceMapping>`

const mappingFullConfig =
`<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <packageSources>
    <!-- To inherit the global NuGet package sources remove the <clear/> line below -->
    <clear />
    <add key="TuxCare" value="https://nexus.repo.tuxcare.com/repository/<els_dotnet_customerN>/index.json" />
    <add key="nuget" value="https://api.nuget.org/v3/index.json" />
  </packageSources>

  <packageSourceCredentials>
    <TuxCare>
      <add key="Username" value="USERNAME" />
      <add key="ClearTextPassword" value="PASSWORD" />
    </TuxCare>
  </packageSourceCredentials>

  <packageSourceMapping>
    <!-- Allow nuget.org to serve any package -->
    <packageSource key="nuget">
      <package pattern="*" />
    </packageSource>

    <!-- Route specific packages to the TuxCare feed -->
    <packageSource key="TuxCare">
      <package pattern="Newtonsoft.*" />
    </packageSource>
  </packageSourceMapping>
</configuration>`

</script>
