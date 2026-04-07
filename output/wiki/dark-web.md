# Dark Web

## Overview
Dark Web is a threat intelligence tool that appears across threat intelligence workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Dark Web is best understood as a threat-intelligence tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Dark Web works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- OSINT
- Maltego
- Shodan
- Recon ng
- SpiderFoot
- threat intelligence
- ATT&CK T1591
- NIST CSF
- MITRE ATT&CK
- threat actor
- APT
- CrowdStrike

## Typical Workflow
- Target: threat actor group, malicious domain, IP range, or organization
- Priority Intelligence Requirements (PIRs): What specific questions need answering?
- Legal authority: Passive OSINT is legal; active probing requires authorization
- Data handling: TLP classification for collected intelligence
- -H "apikey: YOUR_KEY"
- whois -h whois.arin.net evil-domain.com
- MITRE ATT&CK Groups: 130+ documented nation-state and criminal groups with TTP mappings
- CrowdStrike Annual Threat Report: adversary naming by nation-state (BEAR=Russia, PANDA=China, KITTEN=Iran, CHOLLIMA=North Korea)
- Mandiant M-Trends: annual report with sector-specific targeting statistics
- CISA Known Exploited Vulnerabilities (KEV) catalog: identifies vulnerabilities actively exploited by specific threat actors

## Use Cases
- Investigating external infrastructure associated with a phishing campaign targeting your organization
- Enriching threat actor profiles with publicly observable indicators (WHOIS, ASN data, SSL certificates)
- Conducting authorized attack surface discovery to understand your organization's external exposure
- Updating the organization's threat model with profiles of adversary groups recently observed targeting your sector
- Preparing an executive briefing on APT groups that align with geopolitical events affecting your business
- Enabling SOC analysts to understand attacker objectives and TTPs to improve detection tuning

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Campaign Analysis, And Campaign Linkages, And Social Media, And Social Media Analysis, And Social Media Reconnaissance, And Technical Intelligence For Adversary Profiling, And Vulnerability Searches, Breach Data

## Sources
- collecting-open-source-intelligence
- profiling-threat-actor-groups
