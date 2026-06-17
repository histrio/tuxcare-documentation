# Machine-Readable Security Data (SBOM, VEX)

TuxCare provides machine-readable security data for ELS for Libraries in the following formats:

* **SBOM (Software Bill of Materials)** — package composition and dependency inventory in SPDX and CycloneDX formats
* **VEX (Vulnerability Exploitability eXchange)** — exploitability status for known CVEs in CycloneDX VEX format

Released fixes are available via [tuxcare.com/cve-tracker](https://tuxcare.com/cve-tracker/) and [security.tuxcare.com](https://security.tuxcare.com/).

## Software Bill of Materials (SBOM)

Each package built by TuxCare ships with an SBOM that lists its components, versions, and dependency relationships. SBOMs are provided in industry-standard formats — SPDX and CycloneDX — so they can be consumed by any SBOM-aware scanner or supply-chain tool.

Per-package SBOMs for Python and JavaScript libraries are published to TuxCare Nexus and require credentials:

* Python - [els_python_sbom](https://nexus.repo.tuxcare.com/#browse/browse:els_python_sbom)
* JavaScript - [els-js-sbom](https://nexus.repo.tuxcare.com/#browse/browse:els-js-sbom)

For other ecosystems, reach out to [sales@tuxcare.com](mailto:sales@tuxcare.com) to check SBOM availability.

## Vulnerability Exploitability eXchange (VEX)

TuxCare publishes VEX as CycloneDX VEX documents, distributed alongside each package version and updated with every release. A VEX document tells you which known CVEs actually affect a given artifact version and which don't, so scanner results stay focused on real exposure.

Feeds are published per ecosystem:

* Java - [els_lang_java](https://security.tuxcare.com/vex/cyclonedx/els_lang_java/)
* Python - [els_lang_python](https://security.tuxcare.com/vex/cyclonedx/els_lang_python/)
* JavaScript - [els_lang_javascript](https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript/)
* PHP - [els_lang_php](https://security.tuxcare.com/vex/cyclonedx/els_lang_php/)
* .NET - [els_lang_dotnet](https://security.tuxcare.com/vex/cyclonedx/els_lang_dotnet/)

Each entry links one CVE to one artifact version and carries a status:

* **exploitable** — the CVE affects this artifact version and has not yet been patched in this release.
* **resolved** — the CVE has been patched through a TuxCare release.

The feed covers every supported base version, every released `-tuxcare.N` iteration, and transitive dependencies, so the entry count reflects all of these combinations rather than the number of unique CVEs. When checking coverage, filter to the artifact versions you actually use — usually the latest `-tuxcare.N` iteration of your chosen base version. Earlier iterations remain in the feed for historical completeness but aren't relevant once you've adopted a newer release.
