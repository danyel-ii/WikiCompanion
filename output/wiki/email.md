# Email

## Overview
Email is a soc operations tool that appears across soc operations workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Email is best understood as a soc-operations tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Email works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- OSINT
- Maltego
- Shodan
- Recon ng
- SpiderFoot
- threat intelligence
- ATT&CK T1591
- NIST CSF
- soc
- insider threat
- data exfiltration
- dlp

## Typical Workflow
- Target: threat actor group, malicious domain, IP range, or organization
- Priority Intelligence Requirements (PIRs): What specific questions need answering?
- Legal authority: Passive OSINT is legal; active probing requires authorization
- Data handling: TLP classification for collected intelligence
- -H "apikey: YOUR_KEY"
- whois -h whois.arin.net evil-domain.com
- INSIDER THREAT INVESTIGATION AUTHORIZATION
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Case ID:           IT-2024-0089
- Subject:           [Employee Name] — [Department]

## Use Cases
- Investigating external infrastructure associated with a phishing campaign targeting your organization
- Enriching threat actor profiles with publicly observable indicators (WHOIS, ASN data, SSL certificates)
- Conducting authorized attack surface discovery to understand your organization's external exposure
- HR refers a departing employee for monitoring during their notice period
- DLP alerts indicate bulk data downloads or transfers to personal storage
- UEBA detects anomalous access patterns deviating significantly from peer baselines
- Management reports concerns about an employee accessing sensitive data outside their role
- **Departing Employee**: Bulk download of customer lists and product roadmaps during two-week notice period
- **Disgruntled Employee**: After negative performance review, employee accesses executive salary data outside their role
- **Contractor Overreach**: External consultant accessing systems beyond contracted scope, downloading source code

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Cloud Storage, And Social Media, And Social Media Analysis, And Social Media Reconnaissance, And Vulnerability Searches, Breach Data, Code42 Incydr, crt.sh

## Sources
- collecting-open-source-intelligence
- investigating-insider-threat-indicators
