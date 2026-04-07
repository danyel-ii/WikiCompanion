# Shodan

## Overview
Shodan is a protocol analysis tool that appears across threat intelligence workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Shodan is best understood as a threat-intelligence tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Shodan works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- malware
- C2
- command and control
- beacon
- protocol analysis
- malware analysis
- IOC
- VirusTotal
- AbuseIPDB
- MalwareBazaar
- MISP
- threat intelligence

## Typical Workflow
- ━━━━━━━━━━━━━━━━━━━━━━━━━
- HTTP/HTTPS:     Most common; uses standard web traffic to blend in
- DNS:            Tunneling data through DNS queries and responses
- Custom TCP/UDP: Proprietary binary protocol on non-standard port
- ICMP:           Data encoded in ICMP echo/reply payloads
- **IPv4/IPv6 address**: Check if RFC 1918 private (skip external enrichment), validate format
- **Domain/FQDN**: Defang for safe handling (`evil[.]com`), extract registered domain via tldextract
- **URL**: Extract domain + path separately; check for redirectors
- **File hash**: Identify hash type (MD5/SHA-1/SHA-256); prefer SHA-256 for uniqueness
- **Email address**: Split into domain (check MX/DMARC) and local part for pattern analysis

## Use Cases
- Reverse engineering a malware sample has revealed network communication that needs protocol analysis
- Building network-level detection signatures for a specific C2 framework (Cobalt Strike, Metasploit, Sliver)
- Mapping C2 infrastructure including primary servers, fallback domains, and dead drops
- Analyzing encrypted or encoded C2 traffic to understand the command set and data format
- Attributing malware to a threat actor based on C2 infrastructure patterns and tooling
- Assuming the protocol is static; some C2 frameworks negotiate encryption during the handshake
- Missing fallback C2 channels (DNS, ICMP) that activate when the primary channel fails
- A phishing email or alert generates IOCs (URLs, IP addresses, file hashes) requiring rapid triage
- Automated feeds deliver bulk IOCs that need confidence scoring before ingestion into blocking controls
- An incident investigation requires contextual enrichment of observed network artifacts

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- AbuseIPDB, Amass, Banners, crt.sh, DOM, Domain, Recon Ng, SpiderFoot

## Sources
- analyzing-command-and-control-communication
- analyzing-indicators-of-compromise
- automating-ioc-enrichment
- collecting-open-source-intelligence
- conducting-external-reconnaissance-with-osint
- implementing-attack-surface-management
- performing-ioc-enrichment-automation
- performing-ip-reputation-analysis-with-shodan
- performing-subdomain-enumeration-with-subfinder
