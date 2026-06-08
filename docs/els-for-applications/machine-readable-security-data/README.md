# Machine-Readable Security Data (SBOM, VEX)

TuxCare provides machine-readable security data for ELS for Open-Source Applications in the following formats:

* **SBOM (Software Bill of Materials)** — package composition and dependency inventory in SPDX and CycloneDX formats
* **VEX (Vulnerability Exploitability eXchange)** — exploitability status for known CVEs in CycloneDX VEX format

Released fixes are also available via [tuxcare.com/cve-tracker](https://tuxcare.com/cve-tracker/) and [security.tuxcare.com](https://security.tuxcare.com/).

## Software Bill of Materials (SBOM)

Each application package built by TuxCare ships with an SBOM that lists its components, versions, and dependency relationships. SBOMs are provided in industry-standard formats — SPDX and CycloneDX — so they can be consumed by any SBOM-aware scanner or supply-chain tool.

To check whether an SBOM is available for a specific application or to request a copy, reach out to [sales@tuxcare.com](mailto:sales@tuxcare.com).

## Vulnerability Exploitability eXchange (VEX)

The VEX (Vulnerability Exploitability eXchange) feed provides machine-readable information about the vulnerability status of artifacts maintained in the TuxCare portfolio. TuxCare publishes VEX as **CycloneDX VEX documents**, distributed alongside each package version (separately from the SBOM). The feed is updated with each release and reflects the current state of vulnerability handling across supported components and their dependencies.

The feed aggregates data across the entire supported portfolio. Each entry represents the relationship between a specific CVE and a specific artifact version. Because the dataset includes all supported base versions, all released iterations, and transitive dependencies, the total number of entries reflects combinations of these elements rather than the number of unique vulnerabilities.

### Status values

VEX status values describe how a vulnerability relates to a particular artifact version:

* **exploitable** — the CVE affects this artifact version and has not yet been patched in that specific release.
* **resolved** — the CVE affecting that artifact version has been patched through a TuxCare release.

### Recommended consumption

For evaluation and planning purposes, it is recommended to filter the VEX data to the specific artifact versions relevant to your environment. The most meaningful view is typically the latest released `-tuxcare.N` iteration for the base version you plan to use. This reflects the current vulnerability coverage provided by TuxCare. Earlier iterations remain in the VEX for historical completeness but are usually not relevant once a newer release has been adopted.

### Why it matters

* Context-aware vulnerability status — separates CVEs that actually affect the package from those that do not
* Cuts scanner noise to what truly matters
* Automation-friendly for tooling and CI/CD
