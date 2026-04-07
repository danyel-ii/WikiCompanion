# Powershell

## Overview
Powershell is a endpoint tool that appears across endpoint security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Powershell is best understood as a endpoint-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Powershell works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- endpoint
- windows security
- Microsoft Defender
- ASR
- exploit protection
- MDE
- endpoint security
- incident response
- eradication
- malware removal
- persistence
- dfir

## Typical Workflow
- Set-MpPreference -AttackSurfaceReductionRules_Ids BE9BA2D9-53EA-4CDC-84E5-9B1EEEE46550 `
- -AttackSurfaceReductionRules_Actions 1
- Set-MpPreference -AttackSurfaceReductionRules_Ids D4F940AB-401B-4EFC-AADC-AD5F3C50688A `
- Set-MpPreference -AttackSurfaceReductionRules_Ids 3B576869-A4EC-4529-8536-B80A7769E899 `
- schtasks /query /fo CSV /v > schtasks_all.csv
- DCOM lateral movement exploits three primary COM objects. Each has distinct forensic artifacts.

## Use Cases
- Configuring Microsoft Defender for Endpoint (MDE) beyond default settings for enhanced protection
- Implementing Attack Surface Reduction (ASR) rules to block common attack techniques
- Enabling controlled folder access for ransomware protection
- Configuring network protection and exploit protection features
- Deploying Defender settings via Intune, SCCM, or Group Policy at enterprise scale
- Malware infection confirmed and containment is in place
- Forensic investigation has identified all persistence mechanisms
- All compromised systems have been identified and scoped
- Ready to remove attacker artifacts and restore clean state
- Post-containment phase requires systematic cleanup

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Atomic Red Team, CIMSession, ClamAV, CrowdStrike, Elastic SIEM, Impacket, Microsoft 365 Defender Portal, Microsoft Defender For Endpoint API

## Sources
- configuring-windows-defender-advanced-settings
- eradicating-malware-from-infected-systems
- hunting-for-dcom-lateral-movement
