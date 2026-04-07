# Recmd

## Overview
Recmd is a forensics tool that appears across digital forensics workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Recmd is best understood as a digital-forensics tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Recmd works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- forensics
- windows registry
- artifact analysis
- regripper
- registry explorer
- evidence collection
- digital forensics
- threat hunting
- mitre attack
- persistence
- windows
- registry

## Typical Workflow
- 1. **Enumerate Known Persistence Locations**: Build a comprehensive list of Windows persistence points (Run keys, services, scheduled tasks, WMI, startup folder, DLL search order, COM hijacks, AppInit DLLs, Image File Execution Options).
- 2. **Collect Endpoint Data**: Use EDR, Sysmon, or Velociraptor to collect current persistence artifacts from endpoints across the environment.
- 3. **Baseline Legitimate Persistence**: Compare collected data against known-good baselines (Autoruns snapshots, GPO-deployed entries, SCCM configurations).
- 4. **Identify Anomalies**: Flag new, unsigned, or unknown entries in persistence locations that deviate from the baseline.
- 5. **Investigate Suspicious Entries**: For each anomaly, examine the binary it points to, its digital signature, file hash, and creation timestamp.
- 6. **Correlate with Process Activity**: Link persistence entries to process execution, network activity, and user login events.
- 7. **Document and Remediate**: Record findings, remove malicious persistence, and update detection rules.
- 1. System memory (RAM) - Most volatile
- 2. Network connections and routing tables
- 3. Running processes and open files

## Use Cases
- When investigating user activity on a Windows system during an incident
- For identifying autorun/persistence mechanisms used by malware
- When tracing installed software, USB devices, and network connections
- During insider threat investigations to reconstruct user actions
- For correlating registry timestamps with other forensic artifacts
- During periodic proactive threat hunts for dormant backdoors
- After an incident to identify all persistence mechanisms an attacker planted
- When investigating unusual services, scheduled tasks, or startup entries
- When threat intel reports describe new persistence techniques in the wild
- During security posture assessments to identify unauthorized persistent software

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- KAPE, OSQuery, RegRipper, Velociraptor, Volatility, AmcacheParser, AppCompatCacheParser, Autopsy

## Sources
- analyzing-windows-registry-for-artifacts
- hunting-for-persistence-mechanisms-in-windows
- performing-endpoint-forensics-investigation
- performing-malware-persistence-investigation
