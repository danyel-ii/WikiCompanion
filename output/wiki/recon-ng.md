# Recon Ng

## Overview
Recon Ng is a penetration testing tool that appears across penetration testing workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Recon Ng is best understood as a penetration-testing tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Recon Ng works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- OSINT
- Maltego
- Shodan
- Recon ng
- SpiderFoot
- threat intelligence
- ATT&CK T1591
- NIST CSF
- reconnaissance
- attack surface
- footprinting
- passive recon

## Typical Workflow
- Target: threat actor group, malicious domain, IP range, or organization
- Priority Intelligence Requirements (PIRs): What specific questions need answering?
- Legal authority: Passive OSINT is legal; active probing requires authorization
- Data handling: TLP classification for collected intelligence
- -H "apikey: YOUR_KEY"
- whois -h whois.arin.net evil-domain.com
- **Root domain identification**: Start with the primary domain and identify all related domains through reverse WHOIS lookups on registrant name, email, and organization using `whoxy.com` or `domaintools.com`
- `amass enum -passive -d target.com -o amass_subs.txt` for passive subdomain discovery from 40+ data sources
- `subfinder -d target.com -all -o subfinder_subs.txt` for fast passive enumeration
- `crt.sh` certificate transparency log queries: `curl -s "https://crt.sh/?q=%25.target.com&output=json" | jq -r '.[].name_value' | sort -u`

## Use Cases
- Investigating external infrastructure associated with a phishing campaign targeting your organization
- Enriching threat actor profiles with publicly observable indicators (WHOIS, ASN data, SSL certificates)
- Conducting authorized attack surface discovery to understand your organization's external exposure
- Performing the initial reconnaissance phase of a penetration test to gather intelligence before active scanning
- Mapping an organization's external attack surface to identify unknown or shadow IT assets
- Collecting employee information, email formats, and organizational structure for social engineering campaigns
- Identifying exposed credentials, leaked data, or sensitive documents published on the internet
- Scoping the breadth of an organization's digital footprint prior to a red team engagement
- Relying on a single subdomain enumeration tool and missing assets found by other tools using different data sources
- Failing to check cloud storage services (S3, Azure Blob, GCP) for publicly accessible buckets

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Domain, Shodan, SpiderFoot, Amass, And Certificate Transparency Log Analysis, And Metadata For Internet Connected Devices, And Open Ports From Public Sources, And Social Media

## Sources
- collecting-open-source-intelligence
- conducting-external-reconnaissance-with-osint
