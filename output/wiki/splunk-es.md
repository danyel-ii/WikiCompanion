# Splunk Es

## Overview
Splunk Es is a intrusion analysis tool that appears across soc operations workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Splunk Es is best understood as a soc-operations tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Splunk Es works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- kill chain
- Lockheed Martin
- MITRE ATT&CK
- intrusion analysis
- defense in depth
- NIST CSF
- threat intelligence
- soc
- ransomware
- incident response
- playbook
- nist

## Typical Workflow
- **Phase 1 - Reconnaissance**: Adversary gathers target information before attack.
- **Phase 2 - Weaponization**: Adversary creates attack tool (malware + exploit).
- **Phase 3 - Delivery**: Adversary transmits weapon to target.
- **Phase 4 - Exploitation**: Adversary exploits vulnerability to execute code.
- **Phase 5 - Installation**: Adversary establishes persistence on target.
- **Phase 6 - Command & Control (C2)**: Adversary communicates with compromised system.
- index=sysmon EventCode=11
- | stats dc(TargetFilename) AS unique_files, values(TargetFilename) AS sample_files by Computer, Image, _time
- | where unique_files > 100
- | where suspicious_extensions="YES" OR unique_files > 500

## Use Cases
- Conducting post-incident analysis to determine how far an adversary progressed through an attack sequence
- Designing layered defensive controls with the goal of interrupting attacks at the earliest possible phase
- Producing threat intelligence reports that communicate attack progression to non-technical stakeholders
- SOC teams need a standardized ransomware response playbook for Tier 1-3 analysts
- An organization lacks documented procedures for ransomware containment and recovery
- Tabletop exercises reveal gaps in ransomware response coordination
- Compliance requirements (NIST CSF, ISO 27001) mandate documented incident playbooks
- **LockBit Attack**: Detected via SMB lateral movement and mass file encryption — isolate, scan for Cobalt Strike beacons
- **BlackCat/ALPHV**: Detected via ransomware note creation — check for data exfiltration via Rclone or Mega upload
- **Conti/Royal**: Detected via shadow copy deletion — check for prior BazarLoader/Emotet initial access

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- CrowdStrike Falcon, Elastic Security, And Incident Review, And Lighthouse Multi Tenant, And ML Based Anomaly Detection, And Threat Hunting Capabilities, Atomic Red Team, ATT&CK Navigator

## Sources
- analyzing-cyber-kill-chain
- building-soc-playbook-for-ransomware
- implementing-siem-use-cases-for-detection
- implementing-soar-automation-with-phantom
