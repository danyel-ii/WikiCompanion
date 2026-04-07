# Ntlmrelayx

## Overview
Ntlmrelayx is a network security tool that appears across network security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Ntlmrelayx is best understood as a network-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Ntlmrelayx works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

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
- network security

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
- nmap -sS -p 445,139 --open -oA smb_hosts 10.10.0.0/24

## Use Cases
- Hunting for credential relay activity in Active Directory environments where NTLM authentication is still in use
- Investigating alerts for authentication anomalies where the source IP does not match the expected workstation
- Auditing SMB signing and LDAP signing enforcement to assess exposure to relay attacks
- Detecting NTLM downgrade attacks where NTLMv2 is forced to NTLMv1 for easier offline cracking or relay
- Building SIEM correlation rules for MITRE ATT&CK T1557.001 (LLMNR/NBT-NS Poisoning and SMB Relay)
- Responding to PetitPotam, DFSCoerce, or PrinterBug coercion alerts that may precede relay attacks
- During purple team exercises validating NTLM relay detection and SMB signing enforcement
- Dismissing the multiple logons as normal network activity without checking the IP-hostname correlation
- Testing Windows systems for critical SMB vulnerabilities (EternalBlue, EternalRomance, PrintNightmare) during authorized penetration tests
- Demonstrating lateral movement risks via SMB relay, pass-the-hash, and credential spraying

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Responder, And Command Execution Across Windows Networks, And Other Tools For Low Level SMB Protocol Interaction, And Policies From Windows, And Post Exploitation Modules For Comprehensive SMB Testing, CrackMapExec, Credential Testing, CrowdStrike Falcon Identity Protection

## Sources
- detecting-ntlm-relay-with-event-correlation
- exploiting-smb-vulnerabilities-with-metasploit
