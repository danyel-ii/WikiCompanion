# Nikto

> Nikto is a Perl-based web server scanner that performs tests for dangerous files/CGIs, outdated server software, and common misconfigurations, producing machine- and human-readable reports.

## Overview
Nikto is an open-source, signature- and check-database–driven scanner for HTTP/HTTPS services. It emphasizes rapid identification of known, patternable server-side issues rather than deep application logic flaws. Maintained on GitHub with a plugin-based architecture and a checks database, it generates JSON, XML, HTML, CSV, and text outputs to support both human review and system integration. As of February 2026, project documentation targets version 2.6.0. The tool is frequently employed for reconnaissance and baseline assessments and is often embedded in automated pipelines to surface common web server risks quickly.

## What It Is
Nikto is a command-line scanner for web services that targets misconfigurations, default content, risky resources, and server/software versions that may correspond to public vulnerabilities. It is implemented in Perl with historical use of the LibWhisker HTTP library. Typical use includes reconnaissance and baseline assessments, as well as integration into orchestrated or CI/CD environments to detect low-hanging issues on HTTP/HTTPS endpoints.

## How It Works
Nikto executes a corpus of tests defined in a checks database and organized via plugins. At the transaction layer, it issues HTTP(S) requests—optionally through proxies—and can follow redirects and reuse cookies to maintain session state where applicable. Tests encompass file and directory discovery, server option and method checks, banner and header analysis, default and administrative path probing, and version identification. Results are categorized by test or plugin identifiers with descriptive context such as URLs, headers, and banners, and can include tool-defined severity indicators. Reporting in multiple machine- and human-readable formats facilitates downstream ingestion. Code and test updates are distributed via the project’s GitHub repository and can be synchronized regularly.

## Core Concepts
- Signature/check-database–driven web scanning
- Plugin-based architecture governing phases of scanning and reporting
- HTTP transaction layer via LibWhisker heritage
- Web server and software fingerprinting
- Configuration and default-content discovery
- Multiple report formats for integration
- Update cadence via GitHub (code and checks)
- Containerized distribution options (e.g., Docker images)

## Typical Workflow
- Identify candidate HTTP(S) services and select in-scope hosts or base URLs for baseline scanning.
- Configure Nikto with relevant tuning and plugin choices as well as request behaviors aligned to engagement rules (e.g., redirect handling, cookies, proxies, rate).
- Produce machine-readable outputs (JSON/XML/CSV) for ingestion by ticketing, SIEM, or vulnerability management tools, and generate HTML/TXT for reviewers.
- Prioritize findings by risk and relevance; validate high-signal items such as exposed administrative panels, dangerous methods, or outdated server versions.
- Correlate version and banner observations with authoritative advisories and CVEs; use complementary tools or manual analysis to confirm exploitability where needed.
- Iterate by refining scope and tuning, retesting after remediation, and scheduling periodic or pipeline-based baseline scans.

## Use Cases
- Baseline reconnaissance of HTTP(S) services to quickly surface misconfigurations and default content.
- Periodic hygiene scans of internet-facing web servers for exposed administrative paths, directory indexing, or outdated server components.
- Integration in pipelines or orchestration (including containerized deployments) to output machine-readable reports for gating and alerting.
- Complementing broader DAST or proxy-based testing with server-centric checks and fingerprints.
- Assessing control hardening (e.g., HTTP methods and headers) and performing regression checks after patching.

## Limitations
- Primarily oriented to server and file/endpoint checks; not designed for deep business-logic testing or full active exploitation.
- Findings may include false positives and require analyst validation; some checks rely on heuristics or banners.
- Scanning behavior is noisy and easily detected; defenses such as rate-limiting and WAFs may throttle or block it.
- Effectiveness is tied to the freshness and breadth of the checks database and may lag behind some commercial scanners.
- Does not replace comprehensive application security testing (e.g., proxy-assisted exploration, authenticated workflows, fuzzing).

## Related Tools
- OWASP ZAP: Complementary; a full-featured intercepting proxy and active scanner for application-layer testing beyond server checks.
- Nmap: Precursor/adjacent; service discovery and version detection to identify HTTP(S) endpoints prior to Nikto scans.
- Nuclei: Complementary; template-driven scanning for specific vulnerabilities/CVEs across HTTP targets.
- Wapiti: Alternative; open-source web vulnerability scanner with a different test corpus and approach.
- Skipfish: Alternative; high-performance web application security reconnaissance tool.
- Burp Suite: Complementary; manual and automated web testing platform with active scanning and extensibility.

## Evidence Gaps
- Exact, current counts of tests and checks vary by source and version; authoritative counts for 2.6.0 are not consolidated outside the repository and may change with updates.
- Historical references sometimes imply OWASP affiliation; Nikto is not an OWASP project, though it is referenced by the OWASP Web Security Testing Guide.
- Mapping of each plugin or test to CVE/NVD entries is partial and may require consulting specific test definitions in the repository.

## Sources
- [sullo/nikto – Project README](https://github.com/sullo/nikto) (GitHub)
- [Nikto Wiki – Documentation for version 2.6.0 (last edited Feb 11, 2026)](https://github.com/sullo/nikto/wiki) (GitHub)
- [Releases – Nikto 2.6.0 announcement and notes](https://github.com/sullo/nikto/releases) (GitHub)
- [Nikto: Installing and Updating](https://cirt.net/Nikto-Installing_and_Updating) (CIRT.net)
- [Debian package description for nikto (notes LibWhisker and scanner capabilities)](https://packages.debian.org/bookworm/nikto) (Debian Project)
- [secureCodeBox – Nikto scanner integration overview](https://www.securecodebox.io/docs/scanners/nikto/) (OWASP secureCodeBox Project)
- [OWASP Web Security Testing Guide – Attack Surface Identification (references Nikto)](https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/01-Information_Gathering/04-Attack_Surface_Identification) (OWASP Foundation)
- [Fossies Doxygen for Nikto 2.6.0 (generated API docs incl. licensing pointers)](https://fossies.org/dox/nikto-2.6.0/) (Fossies.org)
- [https://en.wikipedia.org/wiki/Nikto_%28vulnerability_scanner%29](https://en.wikipedia.org/wiki/Nikto_%28vulnerability_scanner%29) (en.wikipedia.org)
- [https://github.com/morpheuslord/nikto](https://github.com/morpheuslord/nikto) (github.com)
- [https://github.com/ellerbrock/nikto-docker](https://github.com/ellerbrock/nikto-docker) (github.com)
- [https://cirt.net/Nikto2_Dev](https://cirt.net/Nikto2_Dev) (cirt.net)

## Confidence
high
