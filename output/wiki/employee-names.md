# Employee Names

## Overview
Employee Names is a penetration testing tool that appears across penetration testing workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Employee Names is best understood as a penetration-testing tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Employee Names works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- OSINT
- reconnaissance
- attack surface
- footprinting
- passive recon
- penetration testing

## Typical Workflow
- **Root domain identification**: Start with the primary domain and identify all related domains through reverse WHOIS lookups on registrant name, email, and organization using `whoxy.com` or `domaintools.com`
- `amass enum -passive -d target.com -o amass_subs.txt` for passive subdomain discovery from 40+ data sources
- `subfinder -d target.com -all -o subfinder_subs.txt` for fast passive enumeration
- `crt.sh` certificate transparency log queries: `curl -s "https://crt.sh/?q=%25.target.com&output=json" | jq -r '.[].name_value' | sort -u`
- **DNS record analysis**: Query for all record types: `dig target.com ANY`, check for SPF, DKIM, DMARC records that reveal email infrastructure, and enumerate MX records to identify email providers
- **Zone transfer attempt**: `dig axfr @ns1.target.com target.com` to check for misconfigured DNS servers
- **Consolidate results**: Merge, deduplicate, and resolve all discovered subdomains to IP addresses. Map IP addresses to ASN and hosting providers.
- **Shodan**: `shodan search "ssl.cert.subject.cn:target.com"` to find all internet-facing services with TLS certificates for the target domain. Also search by organization name and IP ranges.
- **Censys**: Search for target's IP ranges and TLS certificates to identify services, technologies, and potential vulnerabilities indexed from internet-wide scanning

## Use Cases
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
- Amass, And Certificate Transparency Log Analysis, And Metadata For Internet Connected Devices, And Open Ports From Public Sources, Banners, DNS Brute Forcing, Domain, Hosts

## Sources
- conducting-external-reconnaissance-with-osint
