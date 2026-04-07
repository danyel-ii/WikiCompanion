# Splunk

## Overview
Splunk is a network forensics tool that appears across threat hunting workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Splunk is best understood as a threat-hunting tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Splunk works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- incident response
- lessons learned
- post incident
- after action review
- process improvement
- dns
- c2
- tunneling
- dga
- network forensics
- threat detection
- network security

## Typical Workflow
- index=notable incident_id="IR-2024-042"
- | stats min(_time) as first_alert, max(_time) as last_alert,
- count as total_alerts, dc(src) as unique_sources
- grep -E "TXT|NULL|CNAME|MX" > suspicious_qtypes.log
- cat dns.log | zeek-cut query | sort -u > unique_domains.txt
- 1. **Identify Legitimate Replication Sources**: Document all domain controllers in the environment by hostname, IP, and computer account. Only these should perform directory replication.
- 2. **Enable Required Auditing**: Configure Advanced Audit Policy to capture Event ID 4662 on domain controllers with specific GUID monitoring for replication rights.
- 3. **Monitor Replication Rights Access**: Track access to three critical GUIDs -- DS-Replication-Get-Changes (1131f6aa-9c07-11d1-f79f-00c04fc2dcd2), DS-Replication-Get-Changes-All (1131f6ad-9c07-11d1-f79f-00c04fc2dcd2), and DS-Replication-Get-Changes-In-Filtered-Set (89e95b76-444d-4c62-991a-0facbeda640c).
- 4. **Detect Non-DC Replication Requests**: Alert when any account NOT associated with a domain controller requests replication rights.
- 5. **Correlate with Network Traffic**: DCSync generates replication traffic (MS-DRSR/RPC) from the attacker's machine to the DC. Monitor for DrsGetNCChanges RPC calls from non-DC IP addresses.

## Use Cases
- After any security incident has been fully resolved and recovery completed
- Following tabletop exercises or IR simulations
- After significant near-miss events
- Quarterly review of accumulated incident trends
- When IR playbooks need updating based on real-world experience
- Investigating suspected DNS tunneling used for C2 communication or data exfiltration
- Analyzing DNS query logs for signs of encoded payloads in subdomain strings
- Classifying domains as DGA-generated vs. legitimate using statistical or ML methods
- Detecting DNS beaconing patterns (regular intervals, consistent query sizes)
- Hunting for Iodine, dnscat2, dns2tcp, Cobalt Strike DNS, or Sliver DNS traffic

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Sysmon, Zeek, Elastic Security, Sigma, CrowdStrike Falcon, Elastic, Suricata, Velociraptor

## Sources
- conducting-post-incident-lessons-learned
- detecting-command-and-control-over-dns
- detecting-dcsync-attack-in-active-directory
- detecting-lateral-movement-in-network
- detecting-ntlm-relay-with-event-correlation
- detecting-t1055-process-injection-with-sysmon
- detecting-wmi-persistence
- hunting-for-beaconing-with-frequency-analysis
- hunting-for-command-and-control-beaconing
- hunting-for-data-exfiltration-indicators
- hunting-for-dcom-lateral-movement
- hunting-for-dcsync-attacks
- hunting-for-living-off-the-land-binaries
- hunting-for-lolbins-execution-in-endpoint-logs
- hunting-for-persistence-mechanisms-in-windows
- implementing-network-deception-with-honeypots
- performing-purple-team-atomic-testing
- triaging-security-incident-with-ir-playbook
