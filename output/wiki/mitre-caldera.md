# MITRE Caldera

## Overview
MITRE Caldera is a detection coverage tool that appears across soc operations workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
MITRE Caldera is best understood as a soc-operations tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
MITRE Caldera works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- soc
- mitre attack
- threat modeling
- ttp
- detection coverage
- attack navigator
- risk assessment
- soc operations
- purple team
- red team
- blue team
- adversary emulation

## Typical Workflow
- response = requests.get(
- attack_data = response.json()
- exercise_id: PT-2024-Q1
- duration: 8 hours (09:00-17:00 UTC)
- environment: Production (Finance VLAN, 10.0.5.0/24)
- WORKSTATION-TEST01 (10.0.5.100) — Test endpoint
- DC-TEST (10.0.5.200) — Test domain controller
- FILESERVER-TEST (10.0.5.201) — Test file server

## Use Cases
- SOC teams need to assess detection coverage against relevant threat actors and their TTPs
- Security leadership requires threat-informed defense prioritization
- New environments (cloud migration, OT integration) need detection strategy planning
- Purple team exercises require structured adversary emulation based on threat models
- Annual risk assessments need ATT&CK-based threat landscape analysis
- **Annual Threat Assessment**: Map top 5 threat actors to ATT&CK, overlay against detection, produce gap analysis
- **Cloud Migration Planning**: Model cloud-specific threats (T1078.004, T1537) and plan detection coverage
- **M&A Security Assessment**: Threat model the acquired company's environment against relevant threat actors
- **Budget Justification**: Use gap analysis to demonstrate detection blind spots requiring tool investment
- **Purple Team Planning**: Select adversary emulation scenarios based on highest-priority gaps from threat model

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Atomic Red Team, AttackIQ, CTID ATT&CK Workbench, MITRE ATT&CK Navigator, Prelude Operator, Tidal Cyber, Vectr

## Sources
- implementing-threat-modeling-with-mitre-attack
- performing-purple-team-exercise
