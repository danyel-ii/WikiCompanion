# ffuf

> ffuf is a fast, flexible web fuzzer for web content discovery and request templating. It automates path, parameter, and virtual host discovery using wordlists and response-based match/filter logic, supporting machine-readable outputs for integration into broader security workflows.

## Overview
ffuf (Fuzz Faster U Fool) is a command-line tool written in Go for high-speed web fuzzing and content discovery. It is used in web application and API security testing to enumerate unlinked or protected resources and to probe request elements to observe access control and other security behaviors. The project is actively maintained, provides documentation via a GitHub wiki, and emits multiple output formats suitable for both human review and automated pipelines. Its role is complementary to manual testing and other dynamic analysis tooling, emphasizing input-driven enumeration and response triage rather than full vulnerability scanning.

## What It Is
ffuf is a web fuzzer centered on mutating HTTP(S) requests and classifying responses. It substitutes a placeholder keyword within URLs, headers, or bodies with candidate inputs drawn from one or more wordlists. Typical targets include directories and files, parameter names or values, and the Host header for virtual host probing. It is commonly applied to detect forced-browsing exposures and to support assessment of authorization consistency across endpoints. It is not a general-purpose vulnerability scanner and relies on operator-selected inputs and triage criteria.

## How It Works
ffuf defines test cases by embedding a placeholder keyword (default: FUZZ) anywhere in a request template and supplying candidate values from wordlists or an external generator. With multiple wordlists, it combines inputs across placeholders using modes such as clusterbomb and pitchfork. Response triage is guided by matchers and filters over status codes, sizes, word and line counts, regular expressions, and timing, with optional auto-calibration to suppress baseline noise. The engine supports recursion to extend discovery depth, virtual host discovery by fuzzing the Host header without DNS lookups, and a replay-proxy that forwards only matched traffic to an intercepting proxy for manual analysis. Results can be exported in machine- and human-readable formats, including JSON, JSONLines for streaming, CSV, HTML, and Markdown.

## Core Concepts
- Content discovery and forced browsing
- Directory and file enumeration
- Parameter name/value fuzzing
- Virtual host discovery via Host header
- Wordlist-driven testing (e.g., SecLists)
- Response-based match and filter logic
- Auto-calibration to reduce false positives
- Recursive discovery
- Machine-readable outputs for automation
- Access control validation support (e.g., BAC/BFLA indicators)

## Typical Workflow
- Define in-scope targets and obtain authorization for testing.
- Select or prepare wordlists relevant to the application context (paths, parameters, tech stack).
- Embed the FUZZ placeholder in the appropriate part of the request (URL, header, or body) and configure HTTP method and headers.
- Configure matchers/filters (e.g., by status code, response size/words) and, if needed, auto-calibration to manage noise.
- Run discovery and, where appropriate, enable recursion and vhost probing to expand coverage.
- Export results to structured formats and forward matched traffic to a proxy for deeper manual validation.
- Correlate discovered resources with business logic and access control tests guided by OWASP WSTG or API Top 10 risks.

## Use Cases
- Enumerating hidden or unlinked directories/files to detect forced-browsing exposures.
- Mapping attack surface of web apps and APIs for subsequent manual testing.
- Probing parameter names and values to reveal undocumented functionality or inconsistent input handling.
- Validating authorization enforcement by checking whether protected endpoints are reachable by direct URL access.
- Virtual host discovery in shared hosting scenarios by fuzzing the Host header (no DNS records required).
- Feeding CI/CD or security pipelines with machine-readable outputs to flag newly exposed content.

## Limitations
- Scope- and ethics-dependent: sending large volumes of requests can violate policy or laws if not explicitly authorized.
- Coverage is wordlist- and strategy-dependent; undiscoverable names or dynamic, JavaScript-driven routes may be missed.
- Web application firewalls, rate limits, and bot mitigations can throttle or alter responses, causing false negatives/positives.
- Heuristic filtering (status/size/words/lines/regex/time) reduces noise but can hide edge-case findings if misconfigured.
- Does not perform business-logic reasoning; findings require human review against application context and authorization models.
- Vhost discovery uses Host header fuzzing and may not equate to real DNS-resolvable subdomains; separate DNS enumeration may be needed.

## Related Tools
- Gobuster: Alternative Go-based content discovery and vhost/DNS brute-forcing tool with similar directory and vhost modes.
- Feroxbuster: Rust-based recursive content discovery tool focused on speed and automation for forced browsing.
- OWASP ZAP (Forced Browse add-on): GUI-driven proxy with a forced-browse module; complementary for manual inspection and automation in DAST workflows.
- Burp Suite (Content Discovery/Intruder): Commercial/proxy suite with content discovery and request fuzzing; often used alongside ffuf for manual validation.
- SecLists: Community-maintained wordlists widely used as ffuf input for paths, parameters, and vhosts.

## Evidence Gaps
- Performance benchmarks and comparative speed claims vary across blog posts; authoritative, reproducible metrics are not centralized in official docs.
- Some third-party articles imply DNS subdomain enumeration; official ffuf docs emphasize vhost discovery via Host header rather than native DNS bruteforcing.
- Historical release dates and detailed roadmap are not consolidated beyond GitHub releases/changelog.

## Sources
- [ffuf - Fuzz Faster U Fool (GitHub README)](https://github.com/ffuf/ffuf) (GitHub / ffuf project)
- [ffuf Wiki: Documentation, wordlists, matching/filtering, output formats](https://github.com/ffuf/ffuf/wiki) (GitHub / ffuf project)
- [OWASP: Forced browsing (definition and context)](https://owasp.org/www-community/attacks/Forced_browsing) (OWASP Foundation)
- [OWASP WSTG (Latest): Testing for Bypassing Authorization Schema](https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/05-Authorization_Testing/02-Testing_for_Bypassing_Authorization_Schema) (OWASP Foundation)
- [SecLists (official repository)](https://github.com/danielmiessler/SecLists) (GitHub / Daniel Miessler)
- [Gobuster (official repository)](https://github.com/OJ/gobuster) (GitHub / OJ Reeves)
- [Feroxbuster (official site)](https://feroxbuster.com/) (feroxbuster.com)
- [ZAP Forced Browse add-on documentation](https://www.zaproxy.org/docs/desktop/addons/forced-browse/) (OWASP ZAP Team)
- [https://github.com/danielmiessler/SecLists/releases](https://github.com/danielmiessler/SecLists/releases) (github.com)
- [https://www.reddit.com/r/cybersecurity_help/comments/1h21q3q](https://www.reddit.com/r/cybersecurity_help/comments/1h21q3q) (reddit.com)
- [https://www.reddit.com/r/HowToHack/comments/sv2ird](https://www.reddit.com/r/HowToHack/comments/sv2ird) (reddit.com)
- [https://blog.geekinstitute.org/2025/05/ffuf-fuzz-faster-u-fool.html](https://blog.geekinstitute.org/2025/05/ffuf-fuzz-faster-u-fool.html) (blog.geekinstitute.org)

## Confidence
high
