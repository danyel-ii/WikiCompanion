# Elastic Siem

## Overview
Elastic Siem is a threat hunting tool that appears across threat hunting workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Elastic Siem is best understood as a threat-hunting tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Elastic Siem works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- threat hunting
- NTLM relay
- event correlation
- T1557.001
- Event 4624
- Responder
- SMB signing
- LDAP signing
- NTLM downgrade
- PetitPotam
- Active Directory
- DCOM

## Typical Workflow
- The NTLM relay attack follows a three-phase pattern: coercion/poisoning, interception, and relay.
- **Phase 1 -- Coercion or Poisoning**: The attacker forces or tricks a victim into initiating NTLM authentication. Methods include LLMNR/NBT-NS poisoning (Responder), PetitPotam (MS-EFSRPC abuse), PrinterBug (SpoolService), and DFSCoerce.
- **Phase 2 -- Interception**: The attacker captures the NTLM Type 1 (Negotiate) and Type 3 (Authenticate) messages from the victim.
- **Phase 3 -- Relay**: The attacker forwards the captured NTLM messages to a target service (SMB, LDAP, HTTP, MSSQL) to authenticate as the victim. This succeeds only when message signing is not enforced.
- Victim ──NTLM Negotiate──> Attacker ──NTLM Negotiate──> Target
- Victim <──NTLM Challenge── Attacker <──NTLM Challenge── Target
- Victim ──NTLM Authenticate──> Attacker ──NTLM Authenticate──> Target
- Attacker authenticated
- **Key Detection Insight**: In a relay attack, Event 4624 on the target will show the victim's username but the attacker's IP address. The WorkstationName field may still reflect the victim's machine. This IP-to-hostname mismatch is the primary detection signal.
- DCOM lateral movement exploits three primary COM objects. Each has distinct forensic artifacts.

## Use Cases
- Hunting for credential relay activity in Active Directory environments where NTLM authentication is still in use
- Investigating alerts for authentication anomalies where the source IP does not match the expected workstation
- Auditing SMB signing and LDAP signing enforcement to assess exposure to relay attacks
- Detecting NTLM downgrade attacks where NTLMv2 is forced to NTLMv1 for easier offline cracking or relay
- Building SIEM correlation rules for MITRE ATT&CK T1557.001 (LLMNR/NBT-NS Poisoning and SMB Relay)
- Responding to PetitPotam, DFSCoerce, or PrinterBug coercion alerts that may precede relay attacks
- During purple team exercises validating NTLM relay detection and SMB signing enforcement
- Dismissing the multiple logons as normal network activity without checking the IP-hostname correlation
- Proactively hunting for lateral movement in Active Directory environments where DCOM is enabled
- Investigating alerts for suspicious mmc.exe, dllhost.exe, or explorer.exe child process creation on servers

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Microsoft Sentinel, Sigma, Splunk, Zeek, Atomic Red Team, CIMSession, CrowdStrike Falcon Identity Protection, Impacket

## Sources
- detecting-ntlm-relay-with-event-correlation
- hunting-for-dcom-lateral-movement
- performing-alert-triage-with-elastic-siem
