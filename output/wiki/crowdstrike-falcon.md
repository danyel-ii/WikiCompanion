# Crowdstrike Falcon

## Overview
Crowdstrike Falcon is a threat hunting tool that appears across threat hunting workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Crowdstrike Falcon is best understood as a threat-hunting tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Crowdstrike Falcon works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- soc
- ransomware
- incident response
- playbook
- nist
- mitre attack
- containment
- soc operations
- threat hunting
- methodology
- hypothesis
- threat intelligence

## Typical Workflow
- index=sysmon EventCode=11
- | stats dc(TargetFilename) AS unique_files, values(TargetFilename) AS sample_files by Computer, Image, _time
- | where unique_files > 100
- | where suspicious_extensions="YES" OR unique_files > 500
- | sort - unique_files
- **Shadow Copy Deletion (T1490):**
- 1. **Formulate Hypothesis**: Define a testable hypothesis based on threat intelligence or ATT&CK gap analysis.
- 2. **Identify Data Sources**: Determine which logs and telemetry are needed to validate or refute the hypothesis.
- 3. **Execute Queries**: Run detection queries against SIEM and EDR platforms to collect relevant events.
- 4. **Analyze Results**: Examine query results for anomalies, correlating across multiple data sources.

## Use Cases
- SOC teams need a standardized ransomware response playbook for Tier 1-3 analysts
- An organization lacks documented procedures for ransomware containment and recovery
- Tabletop exercises reveal gaps in ransomware response coordination
- Compliance requirements (NIST CSF, ISO 27001) mandate documented incident playbooks
- **LockBit Attack**: Detected via SMB lateral movement and mass file encryption — isolate, scan for Cobalt Strike beacons
- **BlackCat/ALPHV**: Detected via ransomware note creation — check for data exfiltration via Rclone or Mega upload
- **Conti/Royal**: Detected via shadow copy deletion — check for prior BazarLoader/Emotet initial access
- **RansomHub**: Detected via anomalous process execution — investigate for compromised VPN or RDP credentials
- **Play Ransomware**: Detected via service account abuse — audit AD for newly created accounts and group membership changes
- When proactively hunting for indicators of building threat hunt hypothesis framework in the environment

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Microsoft Defender For Endpoint, Sysmon, Elastic Security, Sigma Rules, Velociraptor, Splunk Enterprise, Splunk, BloodHound

## Sources
- building-soc-playbook-for-ransomware
- building-threat-hunt-hypothesis-framework
- conducting-malware-incident-response
- containing-active-breach
- detecting-dcsync-attack-in-active-directory
- detecting-dll-sideloading-attacks
- detecting-email-forwarding-rules-attack
- detecting-evasion-techniques-in-endpoint-logs
- detecting-insider-threat-behaviors
- detecting-kerberoasting-attacks
- detecting-mimikatz-execution-patterns
- detecting-pass-the-hash-attacks
- detecting-privilege-escalation-attempts
- detecting-process-hollowing-technique
- detecting-service-account-abuse
- detecting-suspicious-powershell-execution
- hunting-for-living-off-the-cloud-techniques
- hunting-for-living-off-the-land-binaries
- hunting-for-lolbins-execution-in-endpoint-logs
- hunting-for-persistence-mechanisms-in-windows
- hunting-for-registry-persistence-mechanisms
- hunting-for-scheduled-task-persistence
- hunting-for-shadow-copy-deletion
- hunting-for-spearphishing-indicators
- hunting-for-supply-chain-compromise
- hunting-for-unusual-network-connections
- hunting-for-webshell-activity
- implementing-soar-automation-with-phantom
- performing-lateral-movement-detection
- triaging-security-incident
