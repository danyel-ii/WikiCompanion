# Pingcastle

## Overview
Pingcastle is a proactive detection tool that appears across threat hunting workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Pingcastle is best understood as a threat-hunting tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Pingcastle works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- threat hunting
- mitre attack
- lateral movement
- splunk
- siem
- proactive detection
- ta0008
- NTLM relay
- event correlation
- T1557.001
- Event 4624
- Responder

## Typical Workflow
- 1. **Define Lateral Movement Scope**: Identify which lateral movement techniques to hunt (RDP, SMB/Admin Shares, WinRM, PsExec, WMI, DCOM, SSH).
- 2. **Query Authentication Events**: Use SPL to search for Type 3 (Network) and Type 10 (RemoteInteractive) logons across the environment.
- 3. **Build Authentication Graphs**: Map source-to-destination authentication relationships to identify unusual connection patterns.
- 4. **Detect First-Time Relationships**: Identify new source-destination pairs that have not been seen in the historical baseline.
- 5. **Correlate with Process Activity**: Link authentication events to subsequent process creation on destination hosts.
- 6. **Identify Anomalous Patterns**: Flag lateral movement to sensitive servers, unusual hours, service account misuse, or rapid multi-host access.
- 7. **Report and Contain**: Document lateral movement path, affected systems, and coordinate containment response.
- The NTLM relay attack follows a three-phase pattern: coercion/poisoning, interception, and relay.
- **Phase 1 -- Coercion or Poisoning**: The attacker forces or tricks a victim into initiating NTLM authentication. Methods include LLMNR/NBT-NS poisoning (Responder), PetitPotam (MS-EFSRPC abuse), PrinterBug (SpoolService), and DFSCoerce.
- **Phase 2 -- Interception**: The attacker captures the NTLM Type 1 (Negotiate) and Type 3 (Authenticate) messages from the victim.

## Use Cases
- When hunting for adversary movement between compromised systems
- After detecting credential theft to trace subsequent lateral activity
- When investigating unusual authentication patterns across the network
- During incident response to scope the breadth of compromise
- When proactively hunting for TA0008 (Lateral Movement) techniques
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
- BloodHound, CrowdStrike Falcon Identity Protection, Elastic SIEM, Microsoft Sentinel, Ntlmrelayx, Responder, Sigma, Splunk

## Sources
- detecting-lateral-movement-with-splunk
- detecting-ntlm-relay-with-event-correlation
- performing-active-directory-vulnerability-assessment
