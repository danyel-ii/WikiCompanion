# And TLS Connections

## Overview
And TLS Connections is a detection tool that appears across ransomware defense workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
And TLS Connections is best understood as a ransomware-defense tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
And TLS Connections works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- ransomware
- detection
- network security
- incident response
- defense
- ransomware defense

## Typical Workflow
- | Kill Chain Phase | Network Indicators | Detection Source |
- |------------------|--------------------|------------------|
- | Initial Access | RDP brute force, VPN credential stuffing, phishing callback | Firewall logs, IDS, proxy logs |
- | C2 Establishment | Cobalt Strike beacons (HTTPS/DNS), Sliver/Brute Ratel callbacks | Zeek SSL/HTTP logs, DNS logs |
- | Credential Harvesting | NTLM relay, Kerberoasting, DCSync traffic | Zeek Kerberos/NTLM logs, DC logs |
- | Reconnaissance | Internal port scanning, AD enumeration (LDAP/SMB) | Zeek conn.log, flow data |
- | Lateral Movement | PsExec/WMI/WinRM traffic, RDP pivoting, SMB file copies | Zeek SMB/DCE-RPC logs |
- | Staging | Data aggregation, archive creation, cloud upload prep | Proxy logs, DNS logs, DLP |
- **Suricata rules for common ransomware precursors:**

## Use Cases
- Building detection rules for pre-ransomware network activity (the average time from Cobalt Strike deployment to encryption is 17 minutes)
- Monitoring for initial access broker (IAB) indicators that precede ransomware deployment
- Creating SIEM correlation rules that chain multiple precursor events into high-confidence alerts
- Tuning network detection systems to distinguish ransomware staging from normal administrative activity
- Investigating suspicious network patterns that may indicate ransomware operators have established a foothold
- Dismissing internal port scans as vulnerability scanner activity without verifying the source is an authorized scanner
- Setting detection thresholds too high to avoid false positives, missing low-and-slow reconnaissance

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- AC Hunter, And Long Connections In Zeek Logs, Arkime, DNS, DNS Tunneling, Kerberos, RITA, Suricata

## Sources
- detecting-ransomware-precursors-in-network
