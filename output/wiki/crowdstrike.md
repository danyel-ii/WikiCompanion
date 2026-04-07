# Crowdstrike

## Overview
Crowdstrike is a incident response tool that appears across incident response workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Crowdstrike is best understood as a incident-response tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Crowdstrike works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- incident response
- eradication
- malware removal
- persistence
- dfir

## Typical Workflow
- schtasks /query /fo CSV /v > schtasks_all.csv

## Use Cases
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
- ClamAV, PowerShell, Sysinternals Autoruns, Velociraptor, YARA

## Sources
- eradicating-malware-from-infected-systems
