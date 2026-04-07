# Groups

## Overview
Groups is a detection engineering tool that appears across network security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Groups is best understood as a network-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Groups works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- network security
- smb
- metasploit
- exploitation
- eternalblue
- MITRE ATT&CK
- ATT&CK Navigator
- Sigma
- D3FEND
- TTP
- detection engineering
- NIST CSF

## Typical Workflow
- nmap -sS -p 445,139 --open -oA smb_hosts 10.10.0.0/24
- nmap -sV -p 445 --script smb-os-discovery,smb-protocols -oA smb_enum 10.10.0.0/24
- crackmapexec smb 10.10.0.0/24 --gen-relay-list smb_nosigning.txt
- crackmapexec smb 10.10.0.0/24 --smb-signing
- crackmapexec smb 10.10.0.0/24 -u '' -p '' --shares
- from mitreattack.stix20 import MitreAttackData
- mitre = MitreAttackData("enterprise-attack.json")
- techniques = mitre.get_techniques(remove_revoked_deprecated=True)
- print(t["external_references"][0]["external_id"], t["name"])

## Use Cases
- Testing Windows systems for critical SMB vulnerabilities (EternalBlue, EternalRomance, PrintNightmare) during authorized penetration tests
- Demonstrating lateral movement risks via SMB relay, pass-the-hash, and credential spraying
- Validating that patch management processes have addressed known SMB vulnerabilities
- Assessing SMB signing enforcement and share permission configurations across the domain
- Testing network segmentation by attempting SMB exploitation across VLAN boundaries
- EternalBlue exploit can cause a blue screen of death (BSOD) on the target, especially on older or unstable systems
- Running psexec on heavily monitored endpoints may trigger EDR alerts and burn the engagement
- Performing hashdump on domain controllers with large databases can cause performance degradation
- Generating an ATT&CK coverage heatmap to show which techniques your detection stack addresses
- Tagging existing SIEM use cases or Sigma rules with ATT&CK technique IDs for structured reporting

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Command Execution Across Windows Networks, And Other Tools For Low Level SMB Protocol Interaction, And Policies From Windows, And Post Exploitation Modules For Comprehensive SMB Testing, Atomic Red Team, ATT&CK Navigator, ATT&CK Workbench, CrackMapExec

## Sources
- exploiting-smb-vulnerabilities-with-metasploit
- mapping-mitre-attack-techniques
