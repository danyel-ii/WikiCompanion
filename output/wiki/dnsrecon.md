# DNSRecon

> DNSRecon is a Python-based DNS enumeration tool for security assessments that automates record discovery, zone transfer testing, DNSSEC zone walking, cache snooping, reverse lookups, and wordlist-based subdomain brute forcing, with export to XML/CSV/JSON and optional REST API and Shodan-assisted enrichment.

## Overview
DNSRecon focuses on collecting and validating DNS information to support mapping and risk assessment of Internet-exposed assets. It blends standard DNS querying with optional passive and active enrichment, such as search-engine and certificate transparency lookups, and tests for common misconfigurations including unauthorized AXFR zone transfers and open recursion exposed via cache snooping. Recent versions added an optional REST API server and Shodan-powered netblock expansion to broaden discovery. Distributed in major security toolsets (e.g., Kali Linux) and maintained on GitHub, DNSRecon had a 1.6.0 release on February 28, 2026.

## What It Is
DNSRecon is a reconnaissance and assessment utility for DNS, not an exploit framework. It implements multiple discovery methods—standard queries, brute-force enumeration, and reverse lookups—alongside checks such as AXFR attempts, wildcard detection, cache snooping, and DNSSEC zone walking where NSEC allows it. The tool emphasizes structured output and a lightweight local datastore to facilitate integration into larger assessment workflows.

## How It Works
DNSRecon uses dnspython for resolution and record retrieval. Its core routines enumerate common record types (NS/SOA, MX, A/AAAA, TXT/SPF, SRV) and attempt AXFR zone transfers against authoritative nameservers. Subdomain discovery combines wordlist-based brute force with passive sources, including search-engine scraping (Bing and Yandex) and certificate transparency via crt.sh; it can optionally derive and expand netblocks from WHOIS/SPF data and consult Shodan for host enrichment, supporting both passive and active validation modes. The system can perform reverse DNS lookups across IP ranges or CIDRs and infer resolver cache contents via cache snooping against specified nameservers. Where DNSSEC exposes walkable NSEC ranges, it can enumerate names through zone walking, subject to NSEC3 and opt-out protections. Results are presented via a command-line interface or an optional REST API and can be exported as XML, CSV, JSON, or persisted in SQLite for downstream correlation.

## Core Concepts
- Authoritative vs. recursive DNS and zone transfers (AXFR).
- Record-type enumeration (SOA, NS, MX, A/AAAA, TXT/SPF, SRV).
- Subdomain discovery: brute force and passive sources (search engines, CT logs).
- Wildcard DNS detection and filtering implications.
- Reverse DNS (PTR) mapping for ranges/CIDRs.
- Cache snooping to infer resolver cache contents.
- DNSSEC NSEC-based zone walking constraints.
- Data export/serialization for integration with other tools.

## Typical Workflow
- Define target domains and select abstract enumeration modes to establish a baseline view of DNS records and infrastructure.
- Optionally include authoritative nameservers and assess AXFR exposure across them to evaluate transfer controls.
- Broaden discovery through passive sources (crt.sh, Bing, Yandex) and SPF/WHOIS-derived netblocks; optionally apply Shodan-backed enrichment for additional candidate hosts.
- Apply wordlist-driven subdomain discovery with wildcard-aware filtering to reduce noise from catch-all responses and CDN aliases.
- Where relevant, correlate reverse DNS mappings for targeted ranges/CIDRs and, when permissible, infer cache contents of resolvers via snooping to understand query prevalence.
- Serialize findings to structured formats or a local datastore to integrate with adjacent reconnaissance outputs and support further analysis of hygiene issues such as unauthorized transfers, open recursion, and NSEC-exposed enumeration.

## Use Cases
- Scoping and mapping external attack surface by cataloging domains, subdomains, and DNS infrastructure for authorized tests.
- Validating DNS hygiene: checking for unauthorized AXFR, recursion exposure, and wildcard behavior.
- Discovering infrastructure pivots via MX/SRV/NS relationships and CT-derived hostnames.
- Building seed hostlists for web/service enumeration and vulnerability scanning pipelines.
- Enriching SPF/WHOIS-derived netblocks with Shodan to identify additional in-scope hosts before validation.
- Assessing DNSSEC posture where NSEC-based zone walking inadvertently enables name enumeration.

## Limitations
- AXFR is rarely permitted in well-managed zones; successful transfers are uncommon.
- Search-engine scraping (Bing/Yandex) and some passive sources may be rate-limited, captcha-gated, or incomplete; results can vary over time.
- DNSSEC zone walking only works where NSEC records expose walkable ranges; NSEC3 and proper configurations prevent this.
- Wildcard DNS and CDN CNAME patterns can inflate false positives in brute-force results if not filtered.
- Reverse PTR coverage depends on rDNS delegation; many ranges have sparse or outdated PTRs.
- Shodan enrichment requires an API key and reflects Shodan’s crawl freshness; active validation is recommended.
- Output reflects resolver and network conditions (timeouts, filtering, DNS over TCP/UDP behavior) and may miss transient records.

## Related Tools
- Amass: Broader asset discovery (passive/active) with many data sources; complementary for large-scale subdomain enumeration.
- Subfinder: Fast passive subdomain enumeration; pairs well with DNSRecon’s active checks and AXFR/zone-walk tests.
- dnsenum: Another DNS enumeration script with AXFR and brute force; overlapping scope.
- dig: Low-level DNS query utility; useful for validation of individual findings.
- massdns: High-speed DNS resolution for very large wordlists; can post-process DNSRecon candidate names.
- fierce: DNS reconnaissance with different heuristics for host discovery; complementary approach.
- dnsx (ProjectDiscovery): Fast DNS probing/resolution utility to validate large host sets discovered by DNSRecon.
- Gobuster (DNS mode): Focused, fast wordlist-based DNS brute forcing; alternative to DNSRecon’s brt mode.

## Evidence Gaps
- The GitHub README lists core capabilities but omits a full CLI flag reference; the Kali tools page currently serves as the most complete public reference for modes/flags, which may lag or differ from upstream in future versions.
- Historical claims of Google-based enumeration appear in some secondary sources; current maintained documentation emphasizes Bing/Yandex and crt.sh. Modern Google scraping behavior is not confirmed in upstream docs.
- Detailed behavior and stability guarantees of the new REST API are described mainly in release notes and README snippets; a formal upstream API specification is limited.

## Sources
- [DNSRecon GitHub repository (README, version info)](https://github.com/darkoperator/dnsrecon) (GitHub)
- [DNSRecon releases (introduces REST API; recent versions)](https://github.com/darkoperator/dnsrecon/releases) (GitHub)
- [dnsrecon | Kali Linux Tools (CLI options, modes, exports)](https://www.kali.org/tools/dnsrecon/) (OffSec/Kali Linux)
- [dnsrecon · PyPI (packaging overview)](https://pypi.org/project/dnsrecon/) (Python Package Index)
- [https://www.geeksforgeeks.org/dnsrecon-a-powerful-dns-enumeration-script/](https://www.geeksforgeeks.org/dnsrecon-a-powerful-dns-enumeration-script/) (geeksforgeeks.org)
- [https://www.patreon.com/posts/dnsrecon-now-123526865](https://www.patreon.com/posts/dnsrecon-now-123526865) (patreon.com)
- [https://linuxhandbook.com/enumerate-dns-records-dnsrecon/](https://linuxhandbook.com/enumerate-dns-records-dnsrecon/) (linuxhandbook.com)
- [https://wiredgorilla.com/enumerate-dns-records-from-the-command-line-with-dnsrecon/](https://wiredgorilla.com/enumerate-dns-records-from-the-command-line-with-dnsrecon/) (wiredgorilla.com)
- [https://www.reddit.com/r/Pentesting/comments/1otced8](https://www.reddit.com/r/Pentesting/comments/1otced8) (reddit.com)
- [https://thelinuxcode.com/dnsrecon-a-powerful-dns-enumeration-script/](https://thelinuxcode.com/dnsrecon-a-powerful-dns-enumeration-script/) (thelinuxcode.com)
- [https://www.aldeid.com/wiki/Dnsrecon](https://www.aldeid.com/wiki/Dnsrecon) (aldeid.com)
- [https://www.reddit.com/r/Infosec/comments/1otcfox](https://www.reddit.com/r/Infosec/comments/1otcfox) (reddit.com)

## Confidence
high
