# Maltego

## Overview
Maltego is a campaign analysis tool that appears across threat intelligence workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Maltego is best understood as a threat-intelligence tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Maltego works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- OSINT
- Maltego
- Shodan
- Recon ng
- SpiderFoot
- threat intelligence
- ATT&CK T1591
- NIST CSF
- campaign analysis
- correlation
- MISP
- ATT&CK

## Typical Workflow
- Target: threat actor group, malicious domain, IP range, or organization
- Priority Intelligence Requirements (PIRs): What specific questions need answering?
- Legal authority: Passive OSINT is legal; active probing requires authorization
- Data handling: TLP classification for collected intelligence
- -H "apikey: YOUR_KEY"
- whois -h whois.arin.net evil-domain.com
- Internal SIEM (raw events, alert history)
- TIP (historical indicators and events)
- ISAC sharing (partner-submitted events in MISP or TAXII)
- Commercial intelligence (Recorded Future, Mandiant, CrowdStrike reports)

## Use Cases
- Investigating external infrastructure associated with a phishing campaign targeting your organization
- Enriching threat actor profiles with publicly observable indicators (WHOIS, ASN data, SSL certificates)
- Conducting authorized attack surface discovery to understand your organization's external exposure
- Multiple unrelated-appearing incidents share IOCs (same C2 IP, same malware hash, similar TTPs)
- An ISAC partner shares indicators from an incident that match your own historical events
- Building a campaign report linking adversary activity over weeks or months to a single operation
- You have collected raw OSINT data from multiple tools and sources but need to identify connections, contradictions, and patterns across them.
- You need to build a unified intelligence profile for a target entity (person, organization, or infrastructure) from fragmented data.
- Traditional manual correlation is too slow or error-prone for the volume of data collected.
- You want confidence-scored assessments of identity linkage across platforms rather than simple keyword matching.

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- SpiderFoot, And Social Media, And Social Media Analysis, And Social Media Reconnaissance, And Vulnerability Searches, Breach Data, Claude, crt.sh

## Sources
- collecting-open-source-intelligence
- correlating-threat-campaigns
- performing-ai-driven-osint-correlation
