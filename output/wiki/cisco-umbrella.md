# Cisco Umbrella

## Overview
Cisco Umbrella is a c2 detection tool that appears across soc operations workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Cisco Umbrella is best understood as a soc-operations tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Cisco Umbrella works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- soc
- dns
- exfiltration
- dns tunneling
- dga
- c2 detection
- splunk
- threat detection
- soc operations

## Typical Workflow
- index=dns sourcetype="stream:dns" query_type IN ("A", "AAAA", "TXT", "CNAME", "MX")
- | eval domain_parts = split(query, ".")
- | eval subdomain = mvindex(domain_parts, 0, mvcount(domain_parts)-3)
- | eval subdomain_str = mvjoin(subdomain, ".")
- | eval subdomain_len = len(subdomain_str)
- | eval tld = mvindex(domain_parts, -1)
- | eval registered_domain = mvindex(domain_parts, -2).".".tld
- | where subdomain_len > 50
- | stats count AS queries, dc(query) AS unique_queries,
- avg(subdomain_len) AS avg_subdomain_len,

## Use Cases
- SOC teams suspect data exfiltration through DNS tunneling to bypass firewall/proxy controls
- Threat intelligence indicates adversaries using DNS-based C2 channels (e.g., Cobalt Strike DNS beacon)
- UEBA detects anomalous DNS query volumes from specific hosts
- Malware analysis reveals DNS-over-HTTPS (DoH) or DNS tunneling capabilities
- **Cobalt Strike DNS Beacon**: Detect periodic TXT queries with encoded payloads to C2 domain
- **Data Exfiltration**: Large volumes of unique subdomain queries encoding stolen data in Base64/hex
- **DGA Malware**: Detect DNS queries to algorithmically generated domains (high entropy, no web content)
- **DNS-over-HTTPS Bypass**: Employee using DoH to bypass corporate DNS filtering and monitoring
- **Slow Drip Exfiltration**: Low-volume DNS tunneling staying below threshold alerts (requires baseline comparison)

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Farsight DNSDB, Infoblox DNS Firewall, Splunk Stream, Zeek

## Sources
- analyzing-dns-logs-for-exfiltration
