# Rubrik

## Overview
Rubrik is a incident response tool that appears across incident response workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Rubrik is best understood as a incident-response tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Rubrik works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- soc
- ransomware
- incident response
- playbook
- nist
- mitre attack
- containment
- soc operations
- disaster recovery
- backup
- rto
- rpo

## Typical Workflow
- index=sysmon EventCode=11
- | stats dc(TargetFilename) AS unique_files, values(TargetFilename) AS sample_files by Computer, Image, _time
- | where unique_files > 100
- | where suspicious_extensions="YES" OR unique_files > 500
- | sort - unique_files
- **Shadow Copy Deletion (T1490):**
- | Tier | System Type | RTO Target | RPO Target | Example |
- |------|------------|------------|------------|---------|
- | Tier 1 | Mission-critical | < 1 hour | < 15 min | Active Directory, core database |
- | Tier 2 | Business-critical | < 4 hours | < 1 hour | ERP, email, CRM |

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
- Validating that ransomware recovery plans actually work under realistic conditions

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Threat Hunting Capabilities, AWS Backup, Azure Backup, Commvault, CrowdStrike Falcon, Elastic Security, ID Ransomware, No More Ransom Project

## Sources
- building-soc-playbook-for-ransomware
- testing-ransomware-recovery-procedures
