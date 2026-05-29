<!-- markdownlint-disable MD029 MD024 MD036 -->

# Endless Lifecycle Support for Libraries

<ELSTechnology />

## Vulnerability Coverage and Target Response Times

TuxCare employs the Common Vulnerability Scoring System (CVSS) to assess the severity of security vulnerabilities. Our severity rating system integrates both NVD scoring and vendor scoring (when available); when the vendor's score is lower than the NVD score, we prioritize the NVD score.

Aligning with many industry standards and regulatory requirements, TuxCare is committed to delivering timely security updates. For instance, the Payment Card Industry Data Security Standard (PCI DSS) mandates that all 'High' vulnerabilities (CVSS score of 7.0+) must be addressed within 30 days. Other regulations and standards, such as the Health Insurance Portability and Accountability Act (HIPAA) for healthcare or the Federal Information Security Management Act (FISMA) for government agencies, uphold similar requirements.

* **Vulnerability coverage.** TuxCare shall provide security patches for critical- and high-risk (CVSS 7.0 and above), medium-risk (CVSS 4.0 to 6.9), and low-risk (CVSS 0.1 to 3.9) vulnerabilities. TuxCare reserves the right to offer a mitigation strategy as an alternative to a direct code fix.

* **Response time.** TuxCare will make commercially reasonable efforts to adhere to the following guidelines when addressing vulnerabilities:
    * **High- and critical-risk vulnerabilities (CVSS 7.0 and above):** Patches are provided within 14 days from the date the vulnerabilities are publicly disclosed.
    * **Medium-risk vulnerabilities (CVSS 4.0 to 6.9):** Patches are provided within 60 days from the date the vulnerabilities are publicly disclosed.
    * **Low-risk vulnerabilities (CVSS 0.1 to 3.9):** Patches are provided within 90 days from the date the vulnerabilities are publicly disclosed.

## Incident Reporting and Response Timeframe

Customers can report vulnerabilities by submitting a ticket through the [TuxCare Support Portal](https://tuxcare.com/support-portal/). TuxCare commits to providing an initial response to any reported issue within 3 days.

Requests for customer-directed security patches for CVEs that are outside of the ELS for Libraries scope will be reviewed within 3 working days. If the request is accepted, we will provide the patch within the next 60 days.

Handling Multiple Vulnerabilities: In cases where several CVEs are reported simultaneously for fixing, TuxCare will discuss and agree upon resolution timelines separately with the customer.

## Enhanced Transparency & Visibility

TuxCare's commitment to transparency and visibility is foundational to our ELS for Libraries offering. We provide verifiable metadata that helps customers understand package composition, software provenance, and vulnerability impact across the software supply chain.

* **Software Bill of Materials (SBOM)**: Machine-readable SBOMs provide visibility into package composition and dependencies, supporting software supply chain transparency and accountability. Depending on the package, SBOMs are provided in industry-standard formats — SPDX and CycloneDX. See [Machine-Readable Security Data](./machine-readable-security-data/) for per-ecosystem links.

:::warning
Note: SBOM availability for certain components is still expanding and may vary by package. Contact [sales@tuxcare.com](mailto:sales@tuxcare.com) for current availability details.
:::

* **Vulnerability Exploitability eXchange (VEX)**: Machine-readable VEX documents provide contextual vulnerability information, helping teams understand which known CVEs affect specific package versions and reduce remediation noise. VEX is published in standard formats, including CycloneDX VEX. See [Machine-Readable Security Data](./machine-readable-security-data/) for per-ecosystem feeds and details.
* **Verifiable Integrity and Provenance**: Packages and metadata provide end-to-end provenance information, helping customers verify how software was built, tested, and distributed.

:::warning
Note: This feature is under consideration for future development and may be available at a later date. If you are interested, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).
:::

* **Secure Distribution**: Signed packages and associated metadata are distributed through TuxCare-managed infrastructure to ensure authenticity and integrity.

## Support Duration

TuxCare provides continuous security patching for all supported end-of-life (EOL) technologies for as long as your organization requires them, eliminating the need for rushed or disruptive upgrades.

All updates are delivered at a fixed price for the full term of your contract, ensuring predictable costs and uninterrupted protection.

## Technical Support

TuxCare provides technical support according to the standard [support policy](https://tuxcare.com/TuxCare-support-policy.pdf).

It delivers 24/7/365 access to TuxCare’s support team through the [TuxCare Support Portal](https://tuxcare.com/support-portal/) and to TuxCare’s online knowledge base. 

<WhatsNext hide-title>

* ![](/images/shield-alert.webp) [Machine-Readable Security Data](./machine-readable-security-data/) — SBOM and VEX feeds, formats, and consumption guidance
* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/) — Track vulnerability fixes and updates

</WhatsNext>
