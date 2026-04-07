# Windows Event Viewer

## Overview
Windows Event Viewer is a threat hunting tool that appears across threat hunting workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Windows Event Viewer is best understood as a threat-hunting tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Windows Event Viewer works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- threat hunting
- dcsync
- active directory
- credential access
- t1003.006
- mimikatz
- windows
- dfir

## Typical Workflow
- 1. **Enable Auditing**: Ensure Audit Directory Service Access is enabled on domain controllers.
- 2. **Collect Events**: Gather Windows Event ID 4662 with AccessMask 0x100 (Control Access).
- 3. **Filter Replication GUIDs**: Search for DS-Replication-Get-Changes and DS-Replication-Get-Changes-All.
- 4. **Identify Non-DC Sources**: Flag events where SubjectUserName is not a domain controller machine account.
- 5. **Correlate with Network**: Cross-reference source IPs against known DC addresses.
- 6. **Validate Findings**: Exclude legitimate replication tools (Azure AD Connect, SCCM).
- 7. **Respond**: Disable compromised accounts, reset krbtgt, investigate lateral movement.

## Use Cases
- When hunting for DCSync credential theft (MITRE ATT&CK T1003.006)
- After detecting Mimikatz or similar tools in the environment
- During incident response involving Active Directory compromise
- When monitoring for unauthorized domain replication requests
- During purple team exercises testing AD attack detection

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- BloodHound, Elastic Security, Impacket Secretsdump.py, Mimikatz Lsadump, Splunk

## Sources
- hunting-for-dcsync-attacks
