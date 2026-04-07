# Elastic

## Overview
Elastic is a network forensics tool that appears across threat hunting workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Elastic is best understood as a threat-hunting tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Elastic works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- dns
- c2
- tunneling
- dga
- network forensics
- threat detection
- network security
- cloud security
- credential compromise
- guardduty
- incident response
- anomaly detection

## Typical Workflow
- grep -E "TXT|NULL|CNAME|MX" > suspicious_qtypes.log
- cat dns.log | zeek-cut query | sort -u > unique_domains.txt
- Monitor GuardDuty findings and CloudTrail anomalies that indicate credential abuse.
- 1. **Identify Legitimate Replication Sources**: Document all domain controllers in the environment by hostname, IP, and computer account. Only these should perform directory replication.
- 2. **Enable Required Auditing**: Configure Advanced Audit Policy to capture Event ID 4662 on domain controllers with specific GUID monitoring for replication rights.
- 3. **Monitor Replication Rights Access**: Track access to three critical GUIDs -- DS-Replication-Get-Changes (1131f6aa-9c07-11d1-f79f-00c04fc2dcd2), DS-Replication-Get-Changes-All (1131f6ad-9c07-11d1-f79f-00c04fc2dcd2), and DS-Replication-Get-Changes-In-Filtered-Set (89e95b76-444d-4c62-991a-0facbeda640c).
- 4. **Detect Non-DC Replication Requests**: Alert when any account NOT associated with a domain controller requests replication rights.
- 5. **Correlate with Network Traffic**: DCSync generates replication traffic (MS-DRSR/RPC) from the attacker's machine to the DC. Monitor for DrsGetNCChanges RPC calls from non-DC IP addresses.
- 6. **Investigate Source Context**: Examine the process, user account, and machine originating the replication request.
- 7. **Check for Credential Abuse**: After DCSync detection, audit for subsequent use of extracted hashes (pass-the-hash, golden ticket creation).

## Use Cases
- Investigating suspected DNS tunneling used for C2 communication or data exfiltration
- Analyzing DNS query logs for signs of encoded payloads in subdomain strings
- Classifying domains as DGA-generated vs. legitimate using statistical or ML methods
- Detecting DNS beaconing patterns (regular intervals, consistent query sizes)
- Hunting for Iodine, dnscat2, dns2tcp, Cobalt Strike DNS, or Sliver DNS traffic
- Monitoring TXT record abuse for command delivery or staged payload download
- Building DNS anomaly detection rules for SOC/SIEM deployment
- **DISCLAIMER**: DNS tunneling tools referenced in this skill (Iodine, dnscat2, dns2tcp) are dual-use. They have legitimate uses (bypassing captive portals, security research) and malicious uses (C2 channels, exfiltration). Only deploy detection in networks you are authorized to monitor. Testing tunneling tools requires explicit authorization.
- When investigating alerts about unusual cloud API activity from unfamiliar locations
- When building detection rules for credential theft and abuse across cloud environments

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Splunk, ATT&CK Navigator, Sigma, Sysmon, Activity Log, And Beacon Detection Queries, And Coverage Over Time, And File Telemetry

## Sources
- detecting-command-and-control-over-dns
- detecting-compromised-cloud-credentials
- detecting-dcsync-attack-in-active-directory
- detecting-t1055-process-injection-with-sysmon
- mapping-mitre-attack-techniques
- performing-purple-team-atomic-testing
- performing-timeline-reconstruction-with-plaso
