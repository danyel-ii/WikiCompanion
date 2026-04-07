# Dsinternals

## Overview
Dsinternals is a threat hunting tool that appears across threat hunting workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Dsinternals is best understood as a threat-hunting tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Dsinternals works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- threat hunting
- active directory
- dcsync
- credential theft
- mitre t1003 006
- mimikatz
- kerberos

## Typical Workflow
- 1. **Identify Legitimate Replication Sources**: Document all domain controllers in the environment by hostname, IP, and computer account. Only these should perform directory replication.
- 2. **Enable Required Auditing**: Configure Advanced Audit Policy to capture Event ID 4662 on domain controllers with specific GUID monitoring for replication rights.
- 3. **Monitor Replication Rights Access**: Track access to three critical GUIDs -- DS-Replication-Get-Changes (1131f6aa-9c07-11d1-f79f-00c04fc2dcd2), DS-Replication-Get-Changes-All (1131f6ad-9c07-11d1-f79f-00c04fc2dcd2), and DS-Replication-Get-Changes-In-Filtered-Set (89e95b76-444d-4c62-991a-0facbeda640c).
- 4. **Detect Non-DC Replication Requests**: Alert when any account NOT associated with a domain controller requests replication rights.
- 5. **Correlate with Network Traffic**: DCSync generates replication traffic (MS-DRSR/RPC) from the attacker's machine to the DC. Monitor for DrsGetNCChanges RPC calls from non-DC IP addresses.
- 6. **Investigate Source Context**: Examine the process, user account, and machine originating the replication request.
- 7. **Check for Credential Abuse**: After DCSync detection, audit for subsequent use of extracted hashes (pass-the-hash, golden ticket creation).

## Use Cases
- When hunting for credential theft in Active Directory environments
- After compromise of accounts with Replicating Directory Changes permissions
- When investigating suspected use of Mimikatz or Impacket secretsdump
- During incident response involving lateral movement with domain admin credentials
- When auditing AD replication permissions as part of security hardening

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- BloodHound, CrowdStrike Falcon, Elastic, Impacket Secretsdump.py, Microsoft Defender For Identity, Mimikatz, Splunk

## Sources
- detecting-dcsync-attack-in-active-directory
