# Atomic Red Team

## Overview
Atomic Red Team is a soc operations tool that appears across soc operations workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Atomic Red Team is best understood as a soc-operations tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Atomic Red Team works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- threat hunting
- DCOM
- lateral movement
- T1021.003
- Sysmon
- MMC20
- ShellWindows
- ShellBrowserWindow
- COM objects
- WMI
- RPC
- soc

## Typical Workflow
- DCOM lateral movement exploits three primary COM objects. Each has distinct forensic artifacts.
- attack = json.load(f)
- response = requests.get(
- attack_data = response.json()
- from mitreattack.stix20 import MitreAttackData
- mitre = MitreAttackData("enterprise-attack.json")
- techniques = mitre.get_techniques(remove_revoked_deprecated=True)
- print(t["external_references"][0]["external_id"], t["name"])
- exercise_id: PT-2024-Q1
- duration: 8 hours (09:00-17:00 UTC)

## Use Cases
- Proactively hunting for lateral movement in Active Directory environments where DCOM is enabled
- Investigating alerts for suspicious mmc.exe, dllhost.exe, or explorer.exe child process creation on servers
- Building detection rules for MITRE ATT&CK T1021.003 (Remote Services: Distributed Component Object Model)
- Correlating Sysmon Event ID 1 (Process Create) and Event ID 3 (Network Connection) to trace DCOM-based command execution chains
- Auditing DCOM exposure across the domain to reduce lateral movement attack surface
- During purple team exercises validating detection coverage for DCOM-based techniques
- Dismissing mmc.exe activity as legitimate MMC administration without checking the parent process and command line
- SOC teams need to build or expand their SIEM detection library from scratch
- Threat assessments identify ATT&CK technique gaps requiring new detection rules
- Detection engineers need a structured process for use case design, testing, and deployment

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- ATT&CK Navigator, Microsoft Sentinel, MITRE Caldera, Sigma, And Incident Review, And Lighthouse Multi Tenant, And ML Based Anomaly Detection, ATT&CK Workbench

## Sources
- hunting-for-dcom-lateral-movement
- implementing-siem-use-cases-for-detection
- implementing-threat-modeling-with-mitre-attack
- mapping-mitre-attack-techniques
- performing-purple-team-exercise
- performing-threat-emulation-with-atomic-red-team
