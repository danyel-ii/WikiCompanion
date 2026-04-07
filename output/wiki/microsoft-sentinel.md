# Microsoft Sentinel

## Overview
Microsoft Sentinel is a threat detection tool that appears across threat hunting workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Microsoft Sentinel is best understood as a threat-hunting tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Microsoft Sentinel works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- microsoft sentinel
- cloud siem
- kql queries
- soar automation
- threat detection
- cloud security
- threat hunting
- NTLM relay
- event correlation
- T1557.001
- Event 4624
- Responder

## Typical Workflow
- Create a Log Analytics workspace optimized for security data and enable data connectors for multi-cloud ingestion.
- --workspace-name sentinel-workspace
- The NTLM relay attack follows a three-phase pattern: coercion/poisoning, interception, and relay.
- **Phase 1 -- Coercion or Poisoning**: The attacker forces or tricks a victim into initiating NTLM authentication. Methods include LLMNR/NBT-NS poisoning (Responder), PetitPotam (MS-EFSRPC abuse), PrinterBug (SpoolService), and DFSCoerce.
- **Phase 2 -- Interception**: The attacker captures the NTLM Type 1 (Negotiate) and Type 3 (Authenticate) messages from the victim.
- **Phase 3 -- Relay**: The attacker forwards the captured NTLM messages to a target service (SMB, LDAP, HTTP, MSSQL) to authenticate as the victim. This succeeds only when message signing is not enforced.
- Victim ──NTLM Negotiate──> Attacker ──NTLM Negotiate──> Target
- Victim <──NTLM Challenge── Attacker <──NTLM Challenge── Target
- Victim ──NTLM Authenticate──> Attacker ──NTLM Authenticate──> Target
- Attacker authenticated

## Use Cases
- When establishing a centralized security operations center for multi-cloud environments
- When migrating from legacy SIEM platforms (Splunk, QRadar) to cloud-native architecture
- When building automated incident response workflows for cloud-specific threats
- When performing large-scale threat hunting across petabytes of security telemetry
- When integrating threat intelligence feeds with cloud security log analysis
- Hunting for credential relay activity in Active Directory environments where NTLM authentication is still in use
- Investigating alerts for authentication anomalies where the source IP does not match the expected workstation
- Auditing SMB signing and LDAP signing enforcement to assess exposure to relay attacks
- Detecting NTLM downgrade attacks where NTLMv2 is forced to NTLMv1 for easier offline cracking or relay
- Building SIEM correlation rules for MITRE ATT&CK T1557.001 (LLMNR/NBT-NS Poisoning and SMB Relay)

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Sigma, Splunk, Atomic Red Team, ATT&CK Navigator, Elastic SIEM, Sysmon, Zeek, And Coverage Over Time

## Sources
- building-cloud-siem-with-sentinel
- detecting-ntlm-relay-with-event-correlation
- hunting-for-dcom-lateral-movement
- implementing-data-loss-prevention-with-microsoft-purview
- implementing-siem-use-cases-for-detection
- performing-purple-team-atomic-testing
