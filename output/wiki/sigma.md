# Sigma

## Overview
Sigma is a threat detection tool that appears across threat hunting workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Sigma is best understood as a threat-hunting tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Sigma works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- incident response
- lessons learned
- post incident
- after action review
- process improvement
- network security
- lateral movement
- threat detection
- siem
- pass the hash
- threat hunting
- NTLM relay

## Typical Workflow
- index=notable incident_id="IR-2024-042"
- | stats min(_time) as first_alert, max(_time) as last_alert,
- count as total_alerts, dc(src) as unique_sources
- The NTLM relay attack follows a three-phase pattern: coercion/poisoning, interception, and relay.
- **Phase 1 -- Coercion or Poisoning**: The attacker forces or tricks a victim into initiating NTLM authentication. Methods include LLMNR/NBT-NS poisoning (Responder), PetitPotam (MS-EFSRPC abuse), PrinterBug (SpoolService), and DFSCoerce.
- **Phase 2 -- Interception**: The attacker captures the NTLM Type 1 (Negotiate) and Type 3 (Authenticate) messages from the victim.
- **Phase 3 -- Relay**: The attacker forwards the captured NTLM messages to a target service (SMB, LDAP, HTTP, MSSQL) to authenticate as the victim. This succeeds only when message signing is not enforced.
- Victim ──NTLM Negotiate──> Attacker ──NTLM Negotiate──> Target
- Victim <──NTLM Challenge── Attacker <──NTLM Challenge── Target
- Victim ──NTLM Authenticate──> Attacker ──NTLM Authenticate──> Target

## Use Cases
- After any security incident has been fully resolved and recovery completed
- Following tabletop exercises or IR simulations
- After significant near-miss events
- Quarterly review of accumulated incident trends
- When IR playbooks need updating based on real-world experience
- Monitoring enterprise networks for post-compromise lateral movement patterns (pass-the-hash, RDP hopping, PSExec)
- Building SIEM detection rules and alerts for common MITRE ATT&CK lateral movement techniques (T1021, T1570)
- Investigating suspected breaches by analyzing authentication patterns and network connections between internal hosts
- Hunting for anomalous east-west traffic patterns that indicate an attacker pivoting through the network
- Validating that network segmentation and access controls effectively limit lateral movement paths

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Splunk, Zeek, Microsoft Sentinel, Atomic Red Team, ATT&CK Navigator, Elastic, Elastic SIEM, QRadar

## Sources
- conducting-post-incident-lessons-learned
- detecting-lateral-movement-in-network
- detecting-ntlm-relay-with-event-correlation
- hunting-advanced-persistent-threats
- hunting-for-dcom-lateral-movement
- mapping-mitre-attack-techniques
- performing-purple-team-atomic-testing
