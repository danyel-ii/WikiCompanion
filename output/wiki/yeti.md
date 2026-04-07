# Yeti

## Overview
Yeti is a incident response tool that appears across incident response workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Yeti is best understood as a incident-response tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Yeti works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- IOC collection
- threat indicators
- STIX TAXII
- MISP
- threat intelligence sharing
- incident response

## Typical Workflow
- **Network Indicators:**
- IP addresses (C2 servers, staging servers, exfiltration destinations)
- Domain names (C2 domains, phishing domains, DGA domains)
- URLs (malware download, C2 check-in, exfiltration endpoints)
- JA3/JA3S hashes (TLS client/server fingerprints)
- User-Agent strings (custom or unusual HTTP headers)
- DNS query patterns (tunneling signatures, DGA patterns)
- File hashes (MD5, SHA-1, SHA-256 of malware, tools, scripts)
- File paths (known malware installation directories)
- Registry keys (persistence mechanisms, configuration storage)

## Use Cases
- During active incident response to identify and block adversary infrastructure
- Post-incident to document all observed adversary artifacts for future detection
- When sharing threat intelligence with ISACs, sector partners, or law enforcement
- When building detection rules in SIEM, EDR, or network security tools
- When enriching IOCs with threat intelligence context for risk scoring
- Including internal IP addresses or hostnames in shared IOC packages (information leakage)
- Sharing IOCs at TLP:WHITE that should be restricted to TLP:AMBER

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Distributing IOCs, And Formatting IOCs, And TTPs, CyberChef, Defanging, Indicators, MISP, OpenCTI

## Sources
- collecting-indicators-of-compromise
